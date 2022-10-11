// @ts-nocheck

import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';
import { LOG_EXCEPTION, IDX_LOG_EXCEPTION_ID } from './options/TableLogException';

class Query1643051820702 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		// await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

		// @ts-ignore logException
		await queryRunner.createTable(new Table(LOG_EXCEPTION));
		await queryRunner.createIndex('log_exception', new TableIndex(IDX_LOG_EXCEPTION_ID));

	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropIndex('log_exception', 'IDX_LOG_EXCEPTION_ID');
		await queryRunner.dropTable('log_exception');

	}
}

export default Query1643051820702;
