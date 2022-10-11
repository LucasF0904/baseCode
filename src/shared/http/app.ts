import 'process';
import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import '@shared/container';
import 'es6-shim';
import '@shared/database';

import { isCelebrateError } from 'celebrate';
import express, { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';

import http from '@config/http';
import CreateLogExceptionService from '@modules/shared/logException/service/CreateLogExceptionService';
import CreateConnection from '@shared/database/CreateConnection';
import CelebrateError from '@shared/exceptions/CelebrateError';
import Dictionary from '@shared/exceptions/dictionary/request';
import Handler from '@shared/exceptions/Handler';
import ShowPrettyError from '@shared/exceptions/ShowPrettyError';
import ErrorResponse from '@shared/http/response/ErrorResponse';

import setupRoutes from './routes';

const app = express();

app.use(express.json());
app.use(setupRoutes);

CreateConnection.execute();

app.use(async (error: Handler, request: Request, response: Response, _next: NextFunction) => {
	let handler = error;

	if (isCelebrateError(error)) {
		handler = new Handler(
			new CelebrateError().treatReturn(error),
			Dictionary.INVALID_PARAMETERS.CODE,
			http.OK,
			'CelebrateError',
		);
	}

	ShowPrettyError.execute(error);

	handler.statusCode = typeof handler.statusCode === 'undefined' ? http.INTERNAL_SERVER_ERROR : handler.statusCode;

	const createLogExceptionService = container.resolve(CreateLogExceptionService);
	await createLogExceptionService.execute(handler, request);

	return response.status(handler.statusCode).json(new ErrorResponse().execute(handler));
});

export { app };
