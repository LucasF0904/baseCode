import ICity from '@modules/shared/cities/domain/interfaces/ICity';
import IState from '@modules/shared/states/domain/interfaces/IState';
import State from '@modules/shared/states/infra/typeorm/entities/State';
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

@Entity('cities')
class City implements ICity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@ManyToOne(() => State)
	@JoinColumn({ name: 'state_id' })
	state: IState;

	@Column()
	code: string;

	@Column()
	name: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}
export default City;