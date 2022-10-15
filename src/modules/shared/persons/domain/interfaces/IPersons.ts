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
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}

export default IPerson;
