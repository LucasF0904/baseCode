// @ts-nocheck
import IAuthRepository from '@modules/auth/domain/repositories/IAuthRepository';
import { getRepository, Repository } from 'typeorm';
import IUser from '@modules/user/domain/interfaces/IUser';
import User from '@modules/user/infra/typeorm/entities/User';

class AuthRepository implements IAuthRepository {
	private ormRepositoryUser: Repository<User>;
	constructor() {
		this.ormRepositoryUser = getRepository(User);
	}

	public async getAuthData(user: IUser): Promise<IUser | undefined> {
		const userData = await this.ormRepositoryUser.findOne({
			where: {
				id: user.id,
			},
		});
		return userData;
	}
}

export default AuthRepository;
