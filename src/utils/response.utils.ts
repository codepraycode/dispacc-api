/* eslint-disable @typescript-eslint/no-explicit-any */
// Handle sending response
import { ApiError } from '@/interfaces/ApiResponse';
import { Response } from 'express';

class AppResponse {
    success: boolean = true;
    data: any;
    message?: string;
    errors?: ApiError[];
    status: number = 200;

    constructor(private res: Response) {}

    send() {
        if (this.errors) {
            this.success = false;
        }
        this.res.status(this.status).json({
            data: this.data,
            message: this.message,
            success: this.success,
            errors: this.errors,
        });
    }

    error(err: any) {
        this.res.status(err.status || 500).json({
            data: undefined,
            message: err.message || 'An error Occurred',
            success: false,
            errors: err.errors,
        });
    }
}

export default AppResponse;
