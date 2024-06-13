/* eslint-disable @typescript-eslint/no-explicit-any */
import AppResponse from '@/utils/response.utils';
import { Request, Response } from 'express';
import { Wallet, WalletModel } from './model';
import { NODE_ENV } from '@/config';

export async function CreateWallet(req: Request, res: Response) {
    const resp = new AppResponse(res);
    let data: Wallet;

    try {
        data = await WalletModel.insertOne(req.body);
    } catch (err: any) {
        console.error(err);
        err.status = 400;
        err.message = 'Could not create wallet';
        return resp.error(err);
    }

    resp.status = 201;
    resp.message = 'Wallet successfully created';
    resp.data = data;
    return resp.send();
}

export async function GetWalletById(req: Request, res: Response) {
    const resp = new AppResponse(res);
    let data: Wallet;
    const { id } = req.params;

    try {
        data = await WalletModel.findOne({ id });
    } catch (err: any) {
        err.status = 400;

        if (NODE_ENV !== 'development' || NODE_ENV !== 'test') {
            err.message = 'Could not retrieve wallet';
        }

        if (NODE_ENV === 'development') {
            console.error(err);
        }

        return resp.error(err);
    }

    resp.status = 200;

    if (!data) {
        resp.success = false;
        resp.message = 'Wallet not found';
    } else {
        resp.message = 'Wallet retrieved';
        resp.data = data;
    }
    return resp.send();
}
