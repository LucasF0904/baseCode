import { EntityRepository, getRepository, Repository } from 'typeorm';
import ILogAuthRepository from '@modules/logAuth/domain/repositories/ILogAuthRepository';
import LogAuth from '@modules/logAuth/infra/typeorm/entities/LogAuth';
import ISaveLogAuth from '@modules/logAuth/domain/request/ISaveLogAuth';

@EntityRepository(LogAuth)
class LogAuthRepository implements ILogAuthRepository {
	private ormRepository: Repository<LogAuth>;

	constructor() {
		this.ormRepository = getRepository(LogAuth);
	}

	public async register({ user, typeAuth }: ISaveLogAuth): Promise<void> {
		const logAuth = new LogAuth();
		logAuth.user_id = user;
		logAuth.log = typeAuth;

		await this.ormRepository.save(logAuth);
	}
}

export default LogAuthRepository;
