import { inject, injectable } from 'tsyringe';
import IStatesRepository from '@modules/shared/states/domain/repositories/IStateRepository';


@injectable()
class DeleteStateService {
	constructor(
		@inject('StateRepository')
		private stateRepository: IStatesRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.stateRepository.delete(id);
	}
}

export default DeleteStateService;
