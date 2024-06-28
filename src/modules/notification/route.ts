import express from 'express';
import validate from '@/common/middleware/validator.middleware';
import SendSMSSchema from './schema/send-sms.schema.json';
import { SendSMS } from './controller';

const notificationRouter = express.Router();

notificationRouter.post('/sms', validate(SendSMSSchema), SendSMS);

export default notificationRouter;
