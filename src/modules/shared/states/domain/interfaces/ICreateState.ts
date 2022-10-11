import { shortName } from "./IState";

interface ICreateState {
    id?: string;
	short_name?: shortName;
	long_name?: string;
	created_at?: Date;
	updated_at?: Date;
	deleted_at?: Date;
}

export default ICreateState;