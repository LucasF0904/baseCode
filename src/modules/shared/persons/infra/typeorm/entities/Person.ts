import IPerson, { genderType } from '@modules/shared/persons/domain/interfaces/IPersons';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'persons' })
class Person implements IPerson {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	birthdate: string;

	@Column({
		type: 'enum',
		enum: genderType,
		default: genderType.N,
	})
	gender: genderType;

	@Column()
	cpf: string;

	@Column()
	passport: string;

	@Exclude()
	@CreateDateColumn()
	created_at: Date;

	@Exclude()
	@UpdateDateColumn()
	updated_at: Date;

	@Exclude()
	@DeleteDateColumn()
	deleted_at: Date;
}

export default Person;
