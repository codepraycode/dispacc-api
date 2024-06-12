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
            res.status(400).json({
                message: 'Invalid data',
                errors: validate.errors,
            });
        } else {
            next();
        }
    };

export default validate;
