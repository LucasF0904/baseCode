import { inject, injectable } from 'tsyringe';
import IPersonRepository from '@modules/shared/persons/domain/repositories/IPersonRepository';
import IPerson from '@modules/shared/persons/domain/interfaces/IPersons';

@injectable()
class FindPersonsService {
	constructor(
		@inject('PersonRepository')
		private PersonRepository: IPersonRepository,
	) {}

	public async findById(id: string): Promise<IPerson | undefined> {
		const person = await this.PersonRepository.findById(id);

		return person;
	}

	public async findByDocument(document: string): Promise<IPerson | undefined> {
		const person = await this.PersonRepository.findByDocument(document);
		return person;
	}

	public async findAll(): Promise<IPerson[] | undefined> {
		const person = await this.PersonRepository.findAll();

		return person;
	}
}

export default FindPersonsService;
