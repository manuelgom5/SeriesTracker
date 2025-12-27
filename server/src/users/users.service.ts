import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email},
    });

    if (existingUser) {
      throw new ConflictException('El email ya está registrado.');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    return this.excludePassword(user);
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      where: { deletedAt: null },
    });
    return users.map((user) => this.excludePassword(user));
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    
    if (!user || user.deletedAt) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return this.excludePassword(user);
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return this.excludePassword(updatedUser);
  }

  async remove(id: number) {
    await this.findOne(id);
    const deletedUser = await this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    return this.excludePassword(deletedUser);
  }

  private excludePassword(user: any) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
