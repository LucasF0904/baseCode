import { sign } from 'jsonwebtoken';
import auth from '@config/auth';
import IUser from '@modules/users/domain/interfaces/IUser';
import IUserResponseLogin from '@modules/users/domain/interfaces/IUserResponseLogin';

class AuthJwt {
	public async sign(user: IUser): Promise<IUserResponseLogin> {
		const payload = {
			id: user.id,
			email: user.email,
		};

		const access_token = await sign(payload, auth.jwt.secret, {
			expiresIn: auth.jwt.expires,
		});

		const refresh_token = sign(payload, auth.refresh.secret, { expiresIn: auth.refresh.expires });

		return {
			user,
			access_token,
			refresh_token,
		};
	}
}

export default AuthJwt;
