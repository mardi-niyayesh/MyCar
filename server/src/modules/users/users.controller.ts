import * as UserDTO from "./dto";
import {ZodPipe} from "../../common";
import {UsersService} from "./users.service";
import {ApiBody, ApiCreatedResponse} from "@nestjs/swagger";
import {Body, Controller, HttpCode, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  @ApiBody({type: UserDTO.CreateUserSchema})
  @ApiCreatedResponse({
    type: UserDTO.CreateUserOkResponse
  })
  create(
    @Body(new ZodPipe(UserDTO.CreateUser)) data: UserDTO.CreateUserInput
  ) {
    return this.usersService.create(data);
  }
}