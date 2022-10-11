/* eslint-disable camelcase */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import ILogException, { methodType } from '@modules/shared/logException/domain/interfaces/models/ILogException';

@Entity('log_exception')
class LogException implements ILogException {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	message: string;

	@Column({ type: 'varchar', nullable: true })
	code: string | null;

	@Column()
	type: string;

	@Column('text')
	stack: string | null;

	@Column()
	agent: string;

	@Column()
	ip: string;

	@Column()
	url: string;

	@Column({
		type: 'enum',
		enum: methodType,
	})
	method: methodType;

	@Column()
	data: string;

	@CreateDateColumn()
	created_at: string;

	@UpdateDateColumn()
	updated_at: string;

	@DeleteDateColumn()
	deleted_at: string;
}

export default LogException;
