import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import type { Request } from 'express'
import { Strategy } from 'passport-jwt'
import { UsersService } from '../../users/users.service'
import type { JwtPayload } from '../jwt-payload.interface'

function cookieExtractor(req: Request): string | null {
  const cookieName = process.env.COOKIE_NAME ?? 'access_token'
  return req?.cookies?.[cookieName] ?? null
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: configService.getOrThrow<string>('JWT_SECRET'),
    })
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.findById(payload.sub)

    if (!user) {
      throw new UnauthorizedException()
    }

    return this.usersService.toSafeUser(user)
  }
}
