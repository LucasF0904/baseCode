import IUser from '@modules/user/domain/interfaces/IUser';

interface IUserResponseLogin {
	user: IUser;
	accessToken: string;
	refreshToken: string;
}

export default IUserResponseLogin;
