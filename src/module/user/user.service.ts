import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10);
    const email = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (email) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          message: `Já existe um usuário com o email ${createUserDto.email}`,
        },
        HttpStatus.CONFLICT,
      );
    }

    const user = await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashPassword,
        image: createUserDto.image,
        password_recovery_token: createUserDto.password_recovery_token,
        data_recovery_token: createUserDto.data_recovery_token,
      },
    });
    return user;
  }

  async findAll() {
    const user = await this.prisma.user.findMany();
    return user;
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({ where: { id: id } });
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id: id } });
    const hashPassword = await bcrypt.hash(updateUserDto.password, 10);
    const email = await this.prisma.user.findUnique({
      where: { email: updateUserDto.email },
    });

    if (email) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          message: `Já existe um usuário com o email ${updateUserDto.email}`,
        },
        HttpStatus.CONFLICT,
      );
    }
    if (user) {
      const update = await this.prisma.user.update({
        where: { id: id },
        data: { ...updateUserDto, password: hashPassword },
      });
      return update;
    }
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id: id } });
    if (user) {
      const searchUser = await this.prisma.user.delete({ where: { id: id } });
      return searchUser;
    }
  }
}
