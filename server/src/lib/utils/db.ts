import z from 'zod';
import {IsUUID} from "class-validator";

export class IsValidUUIDv4 {
  @IsUUID("4", {message: "UUID v4 is invalid, please enter a valid UUID"})
  id: string;
}

export function formatZodError(error: z.ZodError) {
  return error?.issues?.map(i => ({
    fields: i.path.join(", "),
    message: i.message,
  }));
}