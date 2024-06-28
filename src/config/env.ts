import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
    PORT: Joi.number().default(3000),
    NOBOX_API: Joi.string().default('https://api.nobox.cloud'),
    NOBOX_PROJECT: Joi.string().required(),
    NOBOX_TOKEN: Joi.string().required(),
    TWILIO_ACCOUNT_SID: Joi.string().required(),
    TWILIO_AUTH_TOKEN: Joi.string().required(),
    TWILIO_BASE_PHONE_NUMBER: Joi.string().required(),
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test')
        .default('development'),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const PORT = envVars.PORT;
export const NOBOX_API = envVars.NOBOX_API;
export const NOBOX_PROJECT = envVars.NOBOX_PROJECT;
export const NOBOX_TOKEN = envVars.NOBOX_TOKEN;
export const NODE_ENV = envVars.NODE_ENV;
export const TWILIO_ACCOUNT_SID = envVars.TWILIO_ACCOUNT_SID;
export const TWILIO_AUTH_TOKEN = envVars.TWILIO_AUTH_TOKEN;
export const TWILIO_BASE_PHONE_NUMBER = envVars.TWILIO_BASE_PHONE_NUMBER;
