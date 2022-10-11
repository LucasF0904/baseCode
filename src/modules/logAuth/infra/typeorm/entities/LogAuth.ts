import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import ILogAuth from '@modules/logAuth/domain/interfaces/ILogAuth';
import ITypeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import User from '@modules/users/infra/typeorm/entities/User';
import IUser from '@modules/users/domain/interfaces/IUser';

@Entity('log_auth')
class LogAuth implements ILogAuth {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@ManyToOne(() => User)
	@JoinColumn({ name: 'user_id' })
	user_id: IUser;

	@Column({
		type: 'enum',
		enum: ITypeAuth,
		default: 'login',
	})
	log: ITypeAuth;

	@CreateDateColumn()
	created_at: Date;
}

export default LogAuth;
