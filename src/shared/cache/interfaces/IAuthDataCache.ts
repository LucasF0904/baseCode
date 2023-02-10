import IUser from '@modules/user/domain/interfaces/IUser';

interface IAuthDataCache {
	user: IUser;
	refreshToken: string;
	accessToken: string;
}

export default IAuthDataCache;
