import { NOBOX_API, NOBOX_PROJECT, NOBOX_TOKEN } from '@/config';
import { Config, getFunctions, getSchemaCreator } from 'nobox-client';

export const config: Config = {
    endpoint: NOBOX_API,
    project: NOBOX_PROJECT,
    token: NOBOX_TOKEN,
};

export const createRowSchema = getSchemaCreator(config, { type: 'rowed' });

export const createKeyGroupSchema = getSchemaCreator(config, {
    type: 'key-group',
});

export const Nobox = getFunctions(config);
