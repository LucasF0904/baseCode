import SaveLogAuth from '@modules/logAuth/service/SaveLogAuthService';
import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import { injectable, container, inject } from 'tsyringe';
import IUsersRepository from '@modules/user/domain/repositories/IUsersRepository';
import authDictionary from '@shared/exceptions/dictionary/auth';
import http from '@config/http';
import Handler from '@shared/exceptions/Handler';
import CacheRedis from '@shared/cache/CacheRedis';

@injectable()
class LogoutService {
	saveLogAuth: SaveLogAuth;

	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository,
	) {
		this.saveLogAuth = container.resolve(SaveLogAuth);
	}

	public async execute(userId: string, token: string): Promise<void> {
		const user = await this.usersRepository.findById(userId);
		if (!user) {
			throw new Handler(
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.MESSAGE,
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.CODE,
				http.BAD_REQUEST,
			);
		}

		await new CacheRedis().invalidate(token);

		const typeAuth = 'login' as unknown as typeAuth;
		await this.saveLogAuth.execute({ user, typeAuth });
	}
}

export default LogoutService;
