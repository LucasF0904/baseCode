/* eslint-disable consistent-return */
import { RequestHandler } from 'express';
import createHttpError from 'http-errors';
import Reset from '../models/ResetModel';
import IUser from '../domain/interfaces/IUser';

export const getReset: RequestHandler = (_req, res) => {
	res.json({ message: 'Hello' });
};
export const getResetData: RequestHandler = async (req, res, next) => {
	const { person, id }: IUser = req.body;

	try {
		const reset = await Reset.findOne({ person });

		if (reset) return next(createHttpError(406, 'Reset already active'));

		const newReset = new Reset({ person, id });

		await newReset.save();

		res.json({ person, id });
	} catch (error) {
		return next(createHttpError.InternalServerError);
	}
};
