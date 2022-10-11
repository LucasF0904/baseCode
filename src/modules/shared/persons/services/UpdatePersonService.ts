import { inject, injectable } from 'tsyringe';
import ICreatePerson from '../domain/interfaces/ICreatePersons';
import IPerson from '../domain/interfaces/IPersons';
import IPersonRepository from '../domain/repositories/IPersonRepository';

@injectable()
class UpdatePersonService {
	constructor(
		@inject('PersonRepository')
		private PersonRepository: IPersonRepository,
	) {}

	public async updateById({ name, birthdate, gender, cpf, passport }: ICreatePerson): Promise<IPerson> {
		// this.validateIfExistsPersonsDocument(cpf);
		const person = await this.PersonRepository.create({
			name,
			birthdate,
			gender,
			cpf,
			passport,
		});
		return person;
	}
}

export default UpdatePersonService;
