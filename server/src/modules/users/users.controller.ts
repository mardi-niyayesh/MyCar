import * as UserDTO from "./dto";
import {ZodPipe} from "../../common";
import {ApiBody} from "@nestjs/swagger";
import {UsersService} from "./users.service";
import {Body, Controller, HttpCode, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiBody({type: UserDTO.CreateUserSchema})
  create(
    @Body(new ZodPipe(UserDTO.CreateUser)) data: UserDTO.CreateUserInput
  ) {
    return this.usersService.create(data);
  }
}