import { Request, Response } from 'express';

export function CreateWallet(req: Request, res: Response) {
    return res.status(201).json({
        // eslint-disable-next-line quotes
        data: "You'll create a wallet soon",
    });
}

export function GetWalletById(req: Request, res: Response) {
    return res.status(200).json({
        // eslint-disable-next-line quotes
        data: "You'll get it soon",
    });
}
