import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import type { Response } from 'express'
import { CurrentUser } from '../common/decorators/current-user.decorator'
import type { SafeUser } from '../users/users.service'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { JwtAuthGuard } from './guards/jwt-auth.guard'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.authService.register(dto)
    this.setAuthCookie(res, user)
    return user
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const user = await this.authService.login(dto)
    this.setAuthCookie(res, user)
    return user
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    const cookieName = this.configService.get<string>('COOKIE_NAME') ?? 'access_token'
    res.clearCookie(cookieName, { path: '/' })
    return { success: true }
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@CurrentUser() user: SafeUser) {
    return user
  }

  private setAuthCookie(res: Response, user: SafeUser) {
    const cookieName = this.configService.get<string>('COOKIE_NAME') ?? 'access_token'
    const token = this.authService.signToken(user)
    res.cookie(cookieName, token, this.authService.getCookieOptions())
  }
}
