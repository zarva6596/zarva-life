import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcryptjs'
import { UsersService } from '../users/users.service'
import type { RegisterDto } from './dto/register.dto'
import type { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.usersService.findByEmail(dto.email)

    if (existingUser) {
      throw new ConflictException('Email is already registered')
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10)
    const user = await this.usersService.create({
      email: dto.email,
      password: hashedPassword,
      name: dto.name,
    })

    return this.usersService.toSafeUser(user)
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email)

    if (!user) {
      throw new UnauthorizedException('Invalid email or password')
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password')
    }

    return this.usersService.toSafeUser(user)
  }

  signToken(user: { id: string, email: string, role: string }) {
    return this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    })
  }

  getCookieOptions() {
    const maxAgeMs = this.parseExpiryToMs(this.configService.get<string>('JWT_EXPIRES_IN') ?? '7d')
    const isProduction = this.configService.get('NODE_ENV') === 'production'

    return {
      httpOnly: true,
      sameSite: isProduction ? 'none' as const : 'lax' as const,
      secure: isProduction,
      path: '/',
      maxAge: maxAgeMs,
    }
  }

  private parseExpiryToMs(expiry: string): number {
    const match = /^(\d+)([smhd])$/.exec(expiry)

    if (!match) {
      return 7 * 24 * 60 * 60 * 1000
    }

    const value = Number(match[1])
    const unit = match[2]
    const unitMs = { s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000 }[unit] ?? 86_400_000

    return value * unitMs
  }
}
