/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { Request, Response } from 'express';
import { IController } from '@config/IController';

export const routerAdapter = (controller: IController) => {
	return async (req: Request, res: Response) => {
		const response = await controller.Handle(req.body.request, req.body);
		res.status(response.StatusCode).json(response.Body);
	};
};
