import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { customErrorMessages } from 'src/constants/error-messages';

@Catch()
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    

    //the custom message if available, or the default "Internal server error" message
    const message = customErrorMessages[status] || 'Internal server error';

    console.error(`Error on ${request.method} ${request.url}:`, exception);

    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
