import sendgrid from '@sendgrid/mail';
import { TWILIO_SENDGRID_KEY } from './env';

sendgrid.setApiKey(TWILIO_SENDGRID_KEY);

export const mailSender = sendgrid;
