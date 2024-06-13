import express, { Request, Response } from 'express';
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

app.use(errorMiddleware);

export default app;
