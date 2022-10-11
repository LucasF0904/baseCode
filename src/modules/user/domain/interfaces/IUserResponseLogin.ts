import IUser from './IUser';

interface IUserResponseLogin {
	user: IUser;
	access_token: string;
	refresh_token: string;
}

export default IUserResponseLogin;
