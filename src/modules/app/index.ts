import express, { Request, Response } from 'express';
import walletRouter from '../wallet/route';

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use('/wallet', walletRouter);

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello world');
});

export default app;
