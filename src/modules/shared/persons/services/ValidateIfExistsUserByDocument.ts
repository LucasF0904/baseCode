import IPersonRepository from '@modules/shared/persons/domain/repositories/IPersonRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ValidateIfExistsPersonsByDocument {
	constructor(
		@inject('PersonRepository')
		private PersonRepository: IPersonRepository,
	) {}

	public async execute(document: string): Promise<boolean> {
		const person = await this.PersonRepository.findByDocument(document);
		if (person) {
			return true;
		}
		return false;
	}
}

export default ValidateIfExistsPersonsByDocument;
