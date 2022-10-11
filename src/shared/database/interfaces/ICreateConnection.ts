interface IConnectionParameters {
	name: string;
	drive: string;
	type: string;
	host: string;
	port: string | number;
	database: string;
	schema?: string;
	password: string;
	username: string;
}

export default IConnectionParameters;
