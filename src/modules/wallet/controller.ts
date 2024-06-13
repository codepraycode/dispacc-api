import AppResponse from '@/utils/response.utils';
import { Request, Response } from 'express';

export function CreateWallet(req: Request, res: Response) {
    const resp = new AppResponse(res);
    resp.status = 201;

    // eslint-disable-next-line quotes
    resp.data = "You'll create a wallet soon";
    resp.data = req.body;
    return resp.send();
}

export function GetWalletById(req: Request, res: Response) {
    const resp = new AppResponse(res);
    // eslint-disable-next-line quotes
    resp.message = "You'll get it soon";

    return resp.send();
}
