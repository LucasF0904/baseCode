import IUsers from '@modules/users/domain/interfaces/IUsers';

interface IAuthDataCache {
	user: IUsers;
	refreshToken: string;
	accessToken: string;
}

export default IAuthDataCache;
