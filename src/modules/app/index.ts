import express, { NextFunction, Request, Response } from 'express';
import walletRouter from '../wallet/route';
import errorMiddleware from '@/common/middleware/error.middleware';
import AppResponse from '@/utils/response.utils';

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use('/wallet', walletRouter);

app.get('/', (req: Request, res: Response) => {
    const resp = new AppResponse(res);
    resp.message = 'Hello world!';
    return resp.send();
});

// Test exception
app.get('/error', (req: Request, res: Response, next: NextFunction) => {
    try {
        throw new Error('Something went wrong');
    } catch (err) {
        next(err); // Pass the error to the error-handling middleware
    }
});

// Catch 404 errors
app.use((req: Request, res: Response) => {
    const resp = new AppResponse(res);
    resp.message = 'Endpoint not found!';
    resp.status = 404;
    resp.success = false;

    resp.send();
});

// General error handling middleware
app.use(errorMiddleware);

export default app;
