import { genderType } from '@modules/shared/persons/domain/interfaces/IPersons';

interface ICreatePerson {
	name: string;
	birthdate?: string;
	gender?: genderType;
	cpf: string;
	passport?: string;
}

export default ICreatePerson;
