import {ZodPipe} from "../../common";
import {ApiBody} from "@nestjs/swagger";
import * as UserValidator from "./validators/";
import {Body, Controller, HttpCode, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  @HttpCode(201)
  @ApiBody({type: UserValidator.CreateUserSchema})
  create(
    @Body(new ZodPipe(UserValidator.CreateUser)) data: UserValidator.CreateUserInput
  ) {
    console.log(data);
    return {
      user: "create users successfully.",
    };
  }
}