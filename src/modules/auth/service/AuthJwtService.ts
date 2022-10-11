import { sign } from 'jsonwebtoken';
import auth from '@config/auth';
import IUser from '@modules/user/domain/interfaces/IUser';
import IUserResponseLogin from '@modules/auth/domain/response/IUserResponseLogin';

class AuthJwtService {
	public async sign(user: IUser): Promise<IUserResponseLogin> {
		const payload = {
			id: user.id,
		};

		const accessToken = await sign(payload, auth.jwt.secret, {
			expiresIn: auth.jwt.expires,
		});

		const refreshToken = sign(payload, auth.refresh.secret, { expiresIn: auth.refresh.expires });

		return {
			user,
			accessToken,
			refreshToken,
		};
	}
}

export default AuthJwtService;
