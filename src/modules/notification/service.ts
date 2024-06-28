import { NODE_ENV, TWILIO_BASE_PHONE_NUMBER } from '@/config/env';
import twilioClient from '@/config/twilio';
import { NotificationError } from '@/utils/error';
import { MessageInstance } from 'twilio/lib/rest/api/v2010/account/message';

interface SendSMSConfig {
    body: string;
    to: string;
    from?: string;
}

export async function sendSMS(config: SendSMSConfig) {
    try {
        const message: MessageInstance = await twilioClient.messages.create({
            body: config.body,
            from: TWILIO_BASE_PHONE_NUMBER,
            to: config.to,
        });

        console.debug(message);

        const msg = message.toJSON();

        return {
            from: msg.from,
            to: msg.to,
            date_sent: msg.dateSent,
            status: msg.status,
            error: msg.errorCode && {
                code: msg.errorCode,
                message: msg.errorMessage,
            },
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
        console.error(err);

        let message: string = '';

        switch (err.code) {
            case 21608 && NODE_ENV !== 'development':
                message =
                    'Could not send sms, please check the number and try again';
                break;
            default:
                message = err.message;
                break;
        }

        const error = new NotificationError(message, err.code, err.status);

        throw error;
    }
}
