import {getBaseOkResponseSchema} from "../../../common";
import {createUserResponse, CreateUserResponse} from "./users.create";

/** ok example for get one user by id */
export class GetUserOkResponse extends getBaseOkResponseSchema<{
  user: CreateUserResponse
}>({
  path: createUserResponse.path,
  create: false,
  message: "User found successfully",
  data: createUserResponse.data as {
    user: CreateUserResponse
  }
}) {}