import { inject, injectable } from 'tsyringe';
import ILogAuthRepository from '@modules/logAuth/domain/repositories/ILogAuthRepository';
import ISaveLogAuth from '@modules/logAuth/domain/request/ISaveLogAuth';

@injectable()
class SaveLogAuthService {
	constructor(
		@inject('LogAuthRepository')
		private LogAuthRepository: ILogAuthRepository,
	) {}

	public async execute({ user, typeAuth }: ISaveLogAuth): Promise<void> {
		await this.LogAuthRepository.register({ user, typeAuth });
	}
}

export default SaveLogAuthService;
