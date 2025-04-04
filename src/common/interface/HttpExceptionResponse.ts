import * as J from 'fp-ts/Json';
import { ErrorPrompt } from '../../infrastructure/lib/prompts/types';

export interface HttpExceptionResponse {
  status_code: number;
  error: string;
  message: Omit<ErrorPrompt, 'status' | 'code'> | J.Json;
}

export interface CustomHttpExceptionResponse extends HttpExceptionResponse {
  path: string;
  method: string;
  timestamp: Date;
  correlation_id: string;
}
