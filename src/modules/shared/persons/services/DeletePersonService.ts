import { inject, injectable } from 'tsyringe';
import IPersonRepository from '../domain/repositories/IPersonRepository';

@injectable()
class DeletePersonService {
	constructor(
		@inject('PersonRepository')
		private PersonRepository: IPersonRepository,
	) {}

	public async deleteById(id: string): Promise<void> {
		await this.PersonRepository.remove(id);
	}
}

export default DeletePersonService;
