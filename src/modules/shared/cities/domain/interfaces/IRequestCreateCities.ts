import IState from '@modules/shared/states/domain/interfaces/IState';

interface IRequestCreateCities {
	state?: IState;
	code?: string;
	name?: string;
}

export default IRequestCreateCities;