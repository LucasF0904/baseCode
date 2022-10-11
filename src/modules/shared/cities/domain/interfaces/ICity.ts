import IState from '@modules/shared/states/domain/interfaces/IState';

interface ICity {
    id: string;
	state?: IState;
	code?: string;
	name?: string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}

export default ICity;