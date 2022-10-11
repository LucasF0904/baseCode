export enum shortName {
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'ES',
	'GO',
	'MA',
	'MT',
	'MS',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SC',
	'SP',
	'SE',
	'TO',
	'DF',
}
export interface IState {
	id: string;
	short_name: shortName;
	long_name: string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}
export default IState;