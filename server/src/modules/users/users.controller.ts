import {ZodPipe} from "../../common";
import {Body, Controller, Get, HttpCode, Post} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post()
  @HttpCode(201)
  create() {

  }
}