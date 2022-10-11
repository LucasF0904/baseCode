import IPhone from '@modules/shared/phone/domain/interfaces/IPhone';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('phone')
class Phone implements IPhone {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	number: string;

	@Column()
	type: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
export default Phone;