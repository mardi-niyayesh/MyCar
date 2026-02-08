import {ApiBody} from "@nestjs/swagger";
import {ZodPipe} from "../../common";
import * as UserValidator from "./validators/";
import {Body, Controller, HttpCode, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  @HttpCode(201)
  @ApiBody({type: UserValidator.CreateUserDto})
  create(
    @Body(new ZodPipe(UserValidator.BaseUserSchema)) data: UserValidator.CreateUserInput
  ) {
    console.log(data);
    return {
      user: "Damn ChatGPT",
    };
  }
}