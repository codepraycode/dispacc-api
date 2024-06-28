import express from 'express';
import validate from '@/common/middleware/validator.middleware';
import SendMessageSchema from './schema/send-message.schema.json';
import SendMailSchema from './schema/send-mail.schema.json';
import {
    ReplywhatsAppMessage,
    SendMail,
    SendSMS,
    SendwhatsAppMessage,
    WhatsAppStatusCallback,
} from './controller';

const notificationRouter = express.Router();

// Mail
notificationRouter.post('/mail', validate(SendMailSchema), SendMail);

// SMS
notificationRouter.post('/sms', validate(SendMessageSchema), SendSMS);

// Whatsapp
notificationRouter.post(
    '/whatsapp',
    validate(SendMessageSchema),
    SendwhatsAppMessage,
);
notificationRouter.post('/whatsapp/reply', ReplywhatsAppMessage);
notificationRouter.get('/whatsapp/callback', WhatsAppStatusCallback);

export default notificationRouter;
