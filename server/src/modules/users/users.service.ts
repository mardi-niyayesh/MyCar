import {Injectable} from '@nestjs/common';
import {BaseApiResponseType} from "../../lib";
import {UserRole} from "../prisma/generated/enums";
import {PrismaService} from "../prisma/prisma.service";
import {CreateUserInput, CreateUserResponse} from "./dto";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /** create user in db */
  async create(createData: CreateUserInput): Promise<BaseApiResponseType<{ user: CreateUserResponse }>> {
    const newUser = await this.prisma.user.create({
      data: {
        ...createData,
        role: UserRole.USER
      }
    });

    return {
      message: "user created successfully",
      data: {
        user: {
          ...newUser,
          password: undefined
        }
      }
    };
  }
}