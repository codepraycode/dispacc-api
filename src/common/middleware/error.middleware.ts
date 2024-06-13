import { NODE_ENV } from '@/config';
import { ApiError } from '@/interfaces/ApiResponse';
import AppResponse from '@/utils/response.utils';
import { Request, Response } from 'express';

const errorMiddleware = (
    error: Error,
    req: Request,
    res: Response,
    // next: NextFunction,
): void => {
    const resp = new AppResponse(res);

    console.error(error);
    resp.success = false;
    const _error: ApiError = {
        field: error.name || 'server',
        message: error.message || 'Interal server error',
    };

    if (NODE_ENV === 'development') {
        // Include stack trace in development mode
        // resp.errors = [{ field: 'server', message: error.stack || 'Unknown Error' }];

        _error.stack = error.stack || 'Unknown error';
    }

    resp.errors = [_error];

    resp.status = res.statusCode === 200 ? 500 : res.statusCode;

    resp.send();
};

export default errorMiddleware;
