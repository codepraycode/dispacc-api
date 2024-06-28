import express from 'express';
import validate from '@/common/middleware/validator.middleware';
import SendMessageSchema from './schema/send-message.schema.json';
import { SendSMS, SendwhatsAppMessage } from './controller';

const notificationRouter = express.Router();

notificationRouter.post('/sms', validate(SendMessageSchema), SendSMS);
notificationRouter.post(
    '/whatsapp',
    validate(SendMessageSchema),
    SendwhatsAppMessage,
);

export default notificationRouter;
