import { Schema, model, Document } from 'mongoose';

export interface IReset extends Document {
	name: string;
	id: string;
}

const ResetSchema: Schema = new Schema({
	name: { type: String },
	id: { type: String },
});
export default model<IReset>('Reset', ResetSchema);
