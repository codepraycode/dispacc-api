/* eslint-disable @typescript-eslint/no-explicit-any */
import AppResponse from '@/utils/response.utils';
import { Request, Response } from 'express';
import { sendSMS, sendwhatsAppMessage } from './service';

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

export async function SendwhatsAppMessage(req: Request, res: Response) {
    const { message, phoneNumber } = req.body;

    // TODO: Check and validate phonenumber
    // TODO: Check and validate message

    const resp = new AppResponse(res);

    try {
        const messageResponse = await sendwhatsAppMessage({
            body: message,
            to: phoneNumber,
        });

        resp.status = 200;
        resp.message = 'WhatsApp Message sent!';
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

export async function ReplywhatsAppMessage(req: Request, res: Response) {
    const data = req.body;
    const resp = new AppResponse(res);

    console.debug('Reply DTO', data);
    resp.status = 200;
    resp.message = 'WhatsApp: You received a message!';
    resp.data = {};

    return resp.send();
}

export async function WhatsAppStatusCallback(req: Request, res: Response) {
    const { body, params, query } = req;

    const resp = new AppResponse(res);

    console.debug('Status callback:', { body, query, params });

    resp.status = 200;
    resp.message = 'WhatsApp Message status callback';
    resp.data = {};

    return resp.send();
}
