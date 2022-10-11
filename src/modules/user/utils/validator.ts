/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import createHttpError from 'http-errors';
import { NextFunction } from 'express';
import Joi from 'joi';

const validator = async (resetSchema: Joi.ObjectSchema, body: object, next: NextFunction): Promise<void> => {
	const value = await resetSchema.validate(body);

	try {
		value.error ? next(createHttpError(422, value.error.details[0].message)) : next();
	} catch (error) {
		console.log(error);
	}
};
export default validator;
