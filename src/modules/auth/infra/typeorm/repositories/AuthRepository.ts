// @ts-nocheck
import IAuthRepository from '@modules/auth/domain/repositories/IAuthRepository';
import IUser from '@modules/users/domain/interfaces/IUser';
import User from '@modules/users/infra/typeorm/entities/User';
import { getRepository, Repository } from 'typeorm';

class AuthRepository implements IAuthRepository {
	private ormRepositoryUser: Repository<User>;

	constructor() {
		this.ormRepositoryUser = getRepository(User);
	}

	public async getAuthData(user: IUser): Promise<unknown | undefined> {
		const userData = await this.ormRepositoryUser.findOne({
			where: {
				id: user.id,
			},
		});

		return {
			...userData,
		};
	}
}

export default AuthRepository;
