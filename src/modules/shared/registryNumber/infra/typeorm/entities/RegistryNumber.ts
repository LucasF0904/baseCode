import IRegistryNumber from '@modules/shared/registryNumber/domain/interfaces/IRegistryNumber';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('registryNumber')
class RegistryNumber implements IRegistryNumber {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	regNumber: string;

	@Column()
	type: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
export default RegistryNumber;