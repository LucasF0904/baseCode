import mongoose from 'mongoose';
import Handler from '@shared/exceptions/Handler';
import requestDictionary from '@shared/exceptions/dictionary/request';
import { Request, Response, NextFunction } from 'express';

export default async function validateObjectId(
	request: Request,
	_response: Response,
	next: NextFunction,
): Promise<void> {
	if (mongoose.Types.ObjectId.isValid(request.params.id) === false) {
		throw new Handler(requestDictionary.INVALID_OBJECT_ID.MESSAGE, requestDictionary.INVALID_OBJECT_ID.CODE);
	}

	return next();
}
