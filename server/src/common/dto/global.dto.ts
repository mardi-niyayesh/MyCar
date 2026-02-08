import {BaseApiResponseType} from "../../lib";
import {ApiProperty} from "@nestjs/swagger";

export class ApiResponse<T> {
  success: boolean;
  statusCode: number;
  detail: string;
  response: BaseApiResponseType<T>;
  timestamp: string;
  path?: string;
}

export function getBaseOkResponseSchema<T>(props: { create: boolean, message: string, data: T, path: string }) {
  class BaseOkResponse {
    @ApiProperty({example: true})
    success: boolean;

    @ApiProperty({example: props.create ? 201 : 200})
    statusCode: number;

    @ApiProperty({example: "Resource Created"})
    detail: string;

    @ApiProperty({
      example: {
        message: props.message,
        ...props.data
      }
    })
    response: {
      message: string;
      data: T;
    };

    @ApiProperty({example: "2026-02-08T02:11:20.630Z"})
    timestamp: string;

    @ApiProperty({example: props.path})
    path: string;
  }

  return BaseOkResponse;
}