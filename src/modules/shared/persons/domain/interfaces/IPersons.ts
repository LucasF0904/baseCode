export enum genderType {
	'M',
	'F',
	'N',
}
interface IPerson {
	id: string;
	name: string;
	birthdate?: string;
	gender?: genderType;
	cpf: string;
	passport?: string;
	created_at: string;
	updated_at: string;
	deleted_at: string;
}

export default IPerson;
