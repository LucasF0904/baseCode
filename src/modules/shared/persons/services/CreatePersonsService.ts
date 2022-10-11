import { inject, injectable } from 'tsyringe';
import ICreatePerson from '../domain/interfaces/ICreatePersons';
import IPerson from '../domain/interfaces/IPersons';
import IPersonRepository from '../domain/repositories/IPersonRepository';
// import ValidateIfExistsPersonsByDocument from './ValidateIfExistsUserByDocument';
// import Handler from '../../../../shared/exceptions/Handler';
// import userDictionary from '../../../../shared/exceptions/dictionary/users/index';

@injectable()
class CreatePersonsService {
	// private validateIfExistsPersonsByDocument: ValidateIfExistsPersonsByDocument;

	constructor(
		@inject('PersonRepository')
		private PersonRepository: IPersonRepository,
	) {
		// this.validateIfExistsPersonsByDocument = container.resolve(ValidateIfExistsPersonsByDocument);
	}

	public async execute({ name, birthdate, gender, cpf, passport }: ICreatePerson): Promise<IPerson> {
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

	/* public async execute(parametres: ICreatePerson): Promise<IPerson> {
		this.validateIfExistsPersonsDocument(parametres.cpf);
		const person = await this.PersonRepository.create({
			name: parametres.name,
			birthdate: parametres.birthdate,
			gender: parametres.gender,
			cpf: parametres.cpf,
			passport: parametres.passport,
		});

		return person;
	} */

	/* private async validateIfExistsPersonsDocument(document: string): Promise<void> {
		const existsByDocument = await this.validateIfExistsPersonsByDocument.execute(document);
		if (existsByDocument) {
			throw new Handler(
				userDictionary.USER_DOCUMENT_ALREADY_REGISTERED.MESSAGE,
				userDictionary.USER_DOCUMENT_ALREADY_REGISTERED.CODE,
			);
		}
	} */
}

export default CreatePersonsService;
