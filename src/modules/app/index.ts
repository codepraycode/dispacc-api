import express, { Request, Response } from 'express';

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello world');
});

export default app;
