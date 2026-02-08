import {ZodPipe} from "../../common";
import {Body, Controller, HttpCode, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  @HttpCode(201)
  create() {
    return {
      users: "users",
    };
  }
}