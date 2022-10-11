import { inject, injectable, container } from 'tsyringe';
import IUsersRepository from '@modules/user/domain/repositories/IUsersRepository';
import authDictionary from '@shared/exceptions/dictionary/auth';
import IRequestLogin from '@modules/auth/domain/request/IRequestLogin';
import Handler from '@shared/exceptions/Handler';
import http from '@config/http';
import SaveLogAuth from '@modules/logAuth/service/SaveLogAuthService';
import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import CleanDeep from '@shared/util/CleanDeep';
import ValidateCredential from './ValidateCredentialService';
import UserCache from './UserCacheService';
import AuthJwt from './AuthJwtService';
import IAuthRepository from '../domain/repositories/IAuthRepository';

@injectable()
class AuthLoginService {
	saveLogAuth: SaveLogAuth;

	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository,
		@inject('AuthRepository')
		private authRepository: IAuthRepository,
	) {
		this.saveLogAuth = container.resolve(SaveLogAuth);
	}

	public async execute({ email, password }: IRequestLogin): Promise<unknown> {
		const user = await this.usersRepository.findByEmail(email);
		if (!user) {
			throw new Handler(
				authDictionary.CREDENTIALS_INVALID.MESSAGE,
				authDictionary.CREDENTIALS_INVALID.CODE,
				http.UNAUTHORIZED,
			);
		}

		await ValidateCredential.execute(password, user.password);

		const auth = await new AuthJwt().sign(user);

		const dataAuth = CleanDeep.execute(await this.authRepository.getAuthData(user));

		await UserCache.execute(auth.accessToken, dataAuth);

		const typeAuth = 'login' as unknown as typeAuth;
		await this.saveLogAuth.execute({ user, typeAuth });

		return {
			dataAuth,
			auth,
		};
	}
}

export default AuthLoginService;
