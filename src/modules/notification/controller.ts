/* eslint-disable @typescript-eslint/no-explicit-any */
import AppResponse from '@/utils/response.utils';
import { Request, Response } from 'express';
import { sendSMS } from './service';

export async function SendSMS(req: Request, res: Response) {
    const { message, phoneNumber } = req.body;

    // TODO: Check and validate phonenumber
    // TODO: Check and validate message

    const resp = new AppResponse(res);

    try {
        const messageResponse = await sendSMS({
            body: message,
            to: phoneNumber,
        });

        resp.status = 200;
        resp.message = 'SMS sent!';
        resp.data = messageResponse;
    } catch (err: any) {
        resp.status = 400;
        resp.data = {
            message: err.message,
            code: err.code,
            status: err.status,
        };
    }

    return resp.send();
}
