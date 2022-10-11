import ISaveLogAuth from '@modules/logAuth/domain/request/ISaveLogAuth';

interface ILogAuthRepository {
	register({ user, typeAuth }: ISaveLogAuth): Promise<void>;
}

export default ILogAuthRepository;
