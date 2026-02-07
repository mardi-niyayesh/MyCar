import {BaseApiResponseType} from "../types";

export class ApiResponse<T> {
  success: boolean;
  statusCode: number;
  detail: string;
  response: BaseApiResponseType<T>;
  timestamp: string;
  path?: string;
}