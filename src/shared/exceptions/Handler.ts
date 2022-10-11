/* eslint-disable no-new */
import http from '@config/http';
import { methodType } from '@modules/shared/logException/domain/interfaces/models/ILogException';

class Handler extends Error {
	public message: string;

	public code: string | null;

	public statusCode: number;

	public type: string;

	public messageError: string;

	public ip: string;

	public agent: string;

	public url: string;

	public method: methodType;

	public data: string;

	public traceId: string;

	public created_at: string;

	public updated_at: string;

	public deleted_at: string;

	constructor(message: string, code: string | null, statusCode = http.BAD_REQUEST, type = 'Exception') {
		super();

		this.message = message;

		this.messageError = message;

		this.type = type;

		this.code = code;

		this.statusCode = statusCode;
	}
}

export default Handler;
