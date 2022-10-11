import 'dotenv/config';

const database = {
	/*
	   |--------------------------------------------------------------------------
	   | Database Connections
	   |--------------------------------------------------------------------------
	   |
	   | Here are each of the database connections setup for your application.
	   | Of course, examples of configuring each database platform that is
	   | supported by node is shown below to make development simple.
	   |`
	*/
	connections: [
		{
			name: 'default',
			drive: process.env.DB_BASECODE_DRIVE || 'postgres',
			type: process.env.DB_BASECODE_TYPE || 'postgres',
			host: process.env.DB_BASECODE_HOST || 'localhost',
			database: process.env.DB_BASECODE_DATABASE || 'baseCode',
			port: process.env.DB_BASECODE_PORT || 5432,
			username: process.env.DB_BASECODE_USERNAME || 'baseCode_admin',
			password: process.env.DB_BASECODE_PASSWORD || 'Y1R0X1Uu',
			schema: process.env.DB_BASECODE_SCHEMA || 'baseCode',
			synchronize: true,
			debug: true,
		},
	],
};

export default database;
