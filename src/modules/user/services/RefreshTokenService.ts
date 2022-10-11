import authDictionary from '@shared/exceptions/dictionary/auth';
import Handler from '@shared/exceptions/Handler';
import AuthJwt from '@shared/http/auth/AuthJwt';
import { inject, injectable } from 'tsyringe';
import http from '@config/http';
import IUserResponseLogin from '../domain/interfaces/IUserResponseLogin';
import IUsersRepository from '../domain/repositories/IUsersRepository';

@injectable()
class RefreshTokenService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository,
	) {}

	public async execute(user_id: string): Promise<IUserResponseLogin> {
		const user = await this.usersRepository.findById(user_id);

		if (!user) {
			throw new Handler(
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.MESSAGE,
				authDictionary.AUTHENTICATED_FAILED_REFRESH_TOKEN.CODE,
				http.BAD_REQUEST,
			);
		}

		const newAuth = await new AuthJwt().sign(user);

		return newAuth;
	}
}

export default RefreshTokenService;
