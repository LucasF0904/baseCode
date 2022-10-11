import IAddress from '@modules/shared/address/domain/interfaces/IAddress';
import ICity from '@modules/shared/cities/domain/interfaces/ICity';
import City from '@modules/shared/cities/infra/typeorm/entities/City';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('address')
class Address implements IAddress {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	fullAddress: string;

	@Column()
	complement: string;
	
	@Column()
	district: string;
	
	@ManyToOne(() => City)
	@JoinColumn({ name: 'city_id' })
	city: ICity;

	@Column()
	postalCode: string;

	@Column()
	geoLocation: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
export default Address;