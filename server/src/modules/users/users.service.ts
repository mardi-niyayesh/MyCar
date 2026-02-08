import {Injectable} from '@nestjs/common';
import {CreateUserInput} from "./validators";
import {BaseApiResponseType} from "../../lib";
import {User} from "../prisma/generated/client";
import {UserRole} from "../prisma/generated/enums";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /** create user in db */
  async create(createData: CreateUserInput): Promise<BaseApiResponseType<{ user: User }>> {
    const newUser = await this.prisma.user.create({
      data: {
        ...createData,
        role: UserRole.USER
      }
    });

    return {
      message: "user created successfully",
      data: {
        user: newUser
      }
    };
  }
}