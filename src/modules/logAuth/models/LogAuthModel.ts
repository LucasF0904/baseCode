import { Schema, model } from 'mongoose';
import ILogAuth from '@modules/logAuth/domain/interfaces/ILogAuth';
import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import User from '@modules/user/infra/typeorm/entities/User';
import ILog from '../domain/interfaces/ILog';

export interface ITypeLogs {
	type: ILog;
}

const schema: Schema = new Schema<ILogAuth>({
	user: { type: User, required: true },
	log: { type: typeAuth, required: true },
	created_at: { type: String, required: true, default: Date.now },
	updated_at: { type: String, required: false },
});

export default model('log_auths', schema);
