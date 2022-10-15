import {MigrationInterface, QueryRunner, TableIndex} from "typeorm";
import { IDX_ADDRESS_ID, IDX_ADDRESS_CITY_ID, ADDRESS } from "./options/TableAddress";
import { IDX_CITY_ID, IDX_CITY_STATE_ID, CITIES } from "./options/TableCities";
import { IDX_COUNTRY_ID, COUNTRY } from "./options/TableCountry";
import { IDX_LOG_AUTH_ID, IDX_LOG_AUTH_USERS_ID, LOG_AUTH } from "./options/TableLogAuth";
import { IDX_LOG_EXCEPTION_ID, LOG_EXCEPTION } from "./options/TableLogException";
import { IDX_PERSONS_ID, PERSONS } from "./options/TablePersons";
import { IDX_PHONE_ID, PHONES } from "./options/TablePhones";
import { IDX_REGISTRYNUMBER_ID, REGISTRYNUMBER } from "./options/TableRegistryNumber";
import { IDX_STATES_ID, STATES } from "./options/TableStates";
import { IDX_USERS_ID, IDX_USERS_ADDRESS_ID, IDX_USERS_PERSON_ID, USERS } from "./options/TableUsers";

export class createDatabase1665815178339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // @ts-ignore logException
		await queryRunner.createTable(new Table(LOG_EXCEPTION));
		await queryRunner.createIndex('log_exception', new TableIndex(IDX_LOG_EXCEPTION_ID));

        // @ts-ignore registryNumber
        await queryRunner.createTable(new Table(REGISTRYNUMBER));
        await queryRunner.createIndex('registryNumber', new TableIndex(IDX_REGISTRYNUMBER_ID));

        // @ts-ignore country
        await queryRunner.createTable(new Table(COUNTRY));
        await queryRunner.createIndex('country', new TableIndex(IDX_COUNTRY_ID));

        // @ts-ignore state
		await queryRunner.createTable(new Table(STATES));
		await queryRunner.createIndex('states', new TableIndex(IDX_STATES_ID));

		// @ts-ignore cities
		await queryRunner.createTable(new Table(CITIES));
		await queryRunner.createIndex('cities', new TableIndex(IDX_CITY_ID));
		await queryRunner.createIndex('cities', new TableIndex(IDX_CITY_STATE_ID));

		// @ts-ignore address
		await queryRunner.createTable(new Table(ADDRESS));
		await queryRunner.createIndex('address', new TableIndex(IDX_ADDRESS_ID));
		await queryRunner.createIndex('address', new TableIndex(IDX_ADDRESS_CITY_ID));

		// @ts-ignore phones
		await queryRunner.createTable(new Table(PHONES));
		await queryRunner.createIndex('phones', new TableIndex(IDX_PHONE_ID));

		// @ts-ignore PERSONS
		await queryRunner.createTable(new Table(PERSONS));
		await queryRunner.createIndex('persons', new TableIndex(IDX_PERSONS_ID));

		// @ts-ignore USERS
		await queryRunner.createTable(new Table(USERS));
		await queryRunner.createIndex('users', new TableIndex(IDX_USERS_ID));
		await queryRunner.createIndex('users', new TableIndex(IDX_USERS_ADDRESS_ID));
		await queryRunner.createIndex('users', new TableIndex(IDX_USERS_PERSON_ID));		

		// @ts-ignore LOG AUTH
		await queryRunner.createTable(new Table(LOG_AUTH));
		await queryRunner.createIndex('log_auth', new TableIndex(IDX_LOG_AUTH_ID));
		await queryRunner.createIndex('log_auth', new TableIndex(IDX_LOG_AUTH_USERS_ID));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex('log_exception', 'IDX_LOG_EXCEPTION_ID');
		await queryRunner.dropTable('log_exception');

        
		await queryRunner.dropIndex('log_auth', 'IDX_LOG_AUTH_ID');
		await queryRunner.dropIndex('log_auth', 'IDX_LOG_AUTH_USERS_ID');
		await queryRunner.dropTable('log_auth');

		await queryRunner.dropIndex('users', 'IDX_USERS_ID');
		await queryRunner.dropIndex('users', 'IDX_USERS_ADDRESS_ID');
		await queryRunner.dropIndex('users', 'IDX_USERS_PERSON_ID');
		await queryRunner.dropTable('users');

		await queryRunner.dropIndex('persons', 'IDX_PERSONS_ID');
		await queryRunner.dropTable('persons');

		await queryRunner.dropIndex('phones', 'IDX_PHONE_ID');
		await queryRunner.dropTable('phones');

		await queryRunner.dropIndex('address', 'IDX_ADDRESS_ID');
		await queryRunner.dropIndex('address', 'IDX_ADDRESS_CITY_ID');
		await queryRunner.dropTable('address');

		await queryRunner.dropIndex('cities', 'IDX_CITY_ID');
		await queryRunner.dropIndex('cities', 'IDX_CITY_STATE_ID');
		await queryRunner.dropTable('cities');

		await queryRunner.dropIndex('states', 'IDX_STATES_ID');
		await queryRunner.dropTable('states');

        await queryRunner.dropIndex('country', 'IDX_COUNTRY_ID');
        await queryRunner.dropTable('country');

    }

}
