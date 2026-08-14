import { Injectable } from '@nestjs/common'
import type { User } from '@prisma/client'
import { PrismaService } from '../prisma/prisma.service'

export type SafeUser = Omit<User, 'password'>

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  create(data: { email: string, password: string, name?: string }) {
    return this.prisma.user.create({ data })
  }

  toSafeUser(user: User): SafeUser {
    const { password: _password, ...safeUser } = user
    return safeUser
  }
}
