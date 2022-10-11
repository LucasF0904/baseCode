import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import Handler from '@shared/exceptions/Handler';
import AuthJwt from '@shared/http/auth/AuthJwt';
import authDictionary from '@shared/exceptions/dictionary/auth';
import http from '@config/http';
import IUsersRepository from '../domain/repositories/IUsersRepository';
import IRequestLogin from '../domain/interfaces/IRequestLogin';
import IUserResponseLogin from '../domain/interfaces/IUserResponseLogin';

@injectable()
class AuthLoginService {
	constructor(
		@inject('UsersRepository')
		private usersRepository: IUsersRepository,
	) {}

	public async execute({ email, password }: IRequestLogin): Promise<IUserResponseLogin> {
		const user = await this.usersRepository.findByEmail(email);

		if (!user) {
			throw new Handler(
				authDictionary.CREDENTIALS_INVALID.MESSAGE,
				authDictionary.CREDENTIALS_INVALID.CODE,
				http.UNAUTHORIZED,
			);
		}

		const passwordConfirmed = await compare(password.toString(), user.password);

		if (!passwordConfirmed) {
			throw new Handler(
				authDictionary.CREDENTIALS_INVALID.MESSAGE,
				authDictionary.CREDENTIALS_INVALID.CODE,
				http.UNAUTHORIZED,
			);
		}

		const auth = await new AuthJwt().sign(user);

		return auth;
	}
}

export default AuthLoginService;
