import z from "zod";
import {createZodDto} from "nestjs-zod";
import {BaseUserSchema} from "./users.validators";
import {getBaseOkResponseSchema} from "../../../common";

export const CreateUser = BaseUserSchema.overwrite(data => ({
  ...data,
  display_name: data.display_name?.trim()
}));

/** Create User Type */
export type CreateUserInput = z.infer<typeof BaseUserSchema>;

/** Create User DTO for Swagger */
export class CreateUserSchema extends createZodDto(BaseUserSchema) {}

export class CreateUserOkResponse extends getBaseOkResponseSchema<>({
  path: "users",
  message: "user created successfully",
  create: true,
  data: {
    id: "d228cc19-b8c9-41c4-8c70-c2c6effb05ca",
    email: "user@example.com",
    role: "USER",
    display_name: "string",
    age: 120,
    createdAt: "2026-02-08T02:11:20.596Z",
    updatedAt: "2026-02-08T02:11:20.596Z"
  }
}) {

}