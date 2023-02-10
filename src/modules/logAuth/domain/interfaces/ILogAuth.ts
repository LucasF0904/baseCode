import typeAuth from '@modules/logAuth/domain/interfaces/ITypeAuth';
import User from '@modules/user/infra/typeorm/entities/User';

interface ILogAuth {
	id?: string;
	user?: User;
	log?: typeAuth;
	created_at?: Date;
	updated_at?: Date;
}

export default ILogAuth;
