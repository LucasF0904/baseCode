import { inject, injectable, container } from 'tsyringe';
import IUsersRepository from '@modules/user/domain/repositories/IUsersRepository';
import authDictionary from '@shared/exceptions/dictionary/auth';
import IUserResponseLogin from '@modules/auth/domain/response/IUserResponseLogin';
import Handler from '@shared/exceptions/Handler';
import http from '@config/http';
import SaveLogAuth from '@modules/logAuth/service/SaveLogAuthService';
import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import AuthJwt from './AuthJwtService';
import UserCache from './UserCacheService';

@injectable()
class RefreshTokenService {
	saveLogAuth: SaveLogAuth;

	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository,
	) {
		this.saveLogAuth = container.resolve(SaveLogAuth);
	}

	public async execute(userId: string): Promise<IUserResponseLogin> {
		const user = await this.usersRepository.findById(userId);
		if (!user) {
			throw new Handler(
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.MESSAGE,
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.CODE,
				http.BAD_REQUEST,
			);
		}

		const newAuth = await new AuthJwt().sign(user);

		await UserCache.execute(newAuth.accessToken, user);

		const typeAuth = 'refresh' as unknown as typeAuth;
		await this.saveLogAuth.execute({ user, typeAuth });

		return newAuth;
	}
}

export default RefreshTokenService;
