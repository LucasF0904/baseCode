import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import IUser from '@modules/user/domain/interfaces/IUser';

interface ISaveLogAuth {
	user: IUser;
	typeAuth: typeAuth;
}

export default ISaveLogAuth;
