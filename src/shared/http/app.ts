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

import logger from '@shared/logger';


const app = express();

app.use(express.json());
app.use(setupRoutes);

CreateConnection.execute();

app.use(async (error: Handler, request: Request, response: Response, _next: NextFunction) => {
	logger.info('Entrou no use - App.ts');

	let handler = error;
	if (isCelebrateError(error)) {
		logger.info('Houve Error no Celebrate - App.ts');

		handler = new Handler(
			new CelebrateError().treatReturn(error),
			Dictionary.INVALID_PARAMETERS.CODE,
			http.OK,
			'CelebrateError',
		);
		logger.info('Retornou Error no Celebrate - App.ts');

	}

	logger.info('Se houver error aqui será mostrado com Pretty - App.ts');

	ShowPrettyError.execute(error);

	logger.info('Verificando o statusCode - App.ts');


	handler.statusCode = typeof handler.statusCode === 'undefined' ? http.INTERNAL_SERVER_ERROR : handler.statusCode;

	logger.info('Criando Container no CreateLogExpetionService no Celebrate - App.ts');

	const createLogExceptionService = container.resolve(CreateLogExceptionService);

	logger.info('Executando o createLogExeptionService.execute - App.ts');

	createLogExceptionService.execute(handler, request);

	logger.info('Retornoando o statusCode  - App.ts');


	return response.status(handler.statusCode).json(new ErrorResponse().execute(handler));
});

export { app };
