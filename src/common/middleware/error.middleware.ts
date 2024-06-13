/* eslint-disable @typescript-eslint/no-explicit-any */
import { NODE_ENV } from '@/config';
import { ApiError } from '@/interfaces/ApiResponse';
import AppResponse from '@/utils/response.utils';
import { Request, Response } from 'express';

const errorMiddleware = (
    error: any,
    req: Request,
    res: Response,
    // next: NextFunction,
): void => {
    const resp = new AppResponse(res);

    const _error: ApiError = {
        field: error.name || 'server',
        message: error.message || 'Interal server error',
    };

    console.error('Error Encountered:', error);
    if (NODE_ENV === 'development') {
        // Include stack trace in development mode
        _error.stack = error.stack || 'Unknown error';
    }

    resp.success = false;
    resp.errors = [_error];
    resp.status = error.status || 500;

    resp.send();
};

export default errorMiddleware;
