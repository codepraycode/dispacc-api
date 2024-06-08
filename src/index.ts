import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello world');
});

app.listen(port, () => {
    console.log('Server is running on port 3000');
});
