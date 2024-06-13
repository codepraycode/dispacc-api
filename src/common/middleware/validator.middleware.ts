/* eslint-disable @typescript-eslint/no-explicit-any */
import AppResponse from '@/utils/response.utils';
import Ajv, { ValidateFunction } from 'ajv';
import { NextFunction, Request, Response } from 'express';

const ajv = new Ajv({ allErrors: true });

function validateSchema(schema: object): ValidateFunction {
    return ajv.compile(schema);
}

const validate =
    (schema: object) =>
    (req: Request, res: Response, next: NextFunction): void => {
        const validate = validateSchema(schema);
        const valid = validate(req.body);

        if (!valid) {
            const resp = new AppResponse(res);
            resp.errors = validate.errors as any[];
            resp.status = 400;

            resp.send();
        } else {
            next();
        }
    };

export default validate;
