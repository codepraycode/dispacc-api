import express from 'express';
import validate from '@/common/middleware/validator.middleware';
import SendMessageSchema from './schema/send-message.schema.json';
import {
    ReplywhatsAppMessage,
    SendSMS,
    SendwhatsAppMessage,
    WhatsAppStatusCallback,
} from './controller';

const notificationRouter = express.Router();

notificationRouter.post('/sms', validate(SendMessageSchema), SendSMS);
notificationRouter.post(
    '/whatsapp',
    validate(SendMessageSchema),
    SendwhatsAppMessage,
);
notificationRouter.post('/whatsapp/reply', ReplywhatsAppMessage);
notificationRouter.get('/whatsapp/callback', WhatsAppStatusCallback);

export default notificationRouter;
