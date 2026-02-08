import z from "zod";
import {BaseUserSchema} from "./index";
import {createZodDto} from "nestjs-zod";

/** Create User Type */
export type CreateUserInput = z.infer<typeof BaseUserSchema>;

/** Create User DTO for Swagger */
export class CreateUserDto extends createZodDto(BaseUserSchema) {}