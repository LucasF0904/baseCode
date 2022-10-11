import { inject, injectable } from 'tsyringe';
import ICountryRepository from '@modules/shared/country/domain/repositories/ICountryRepository';


@injectable()
class DeleteCountryService {
	constructor(
		@inject('CountryRepository')
		private countryRepository: ICountryRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.countryRepository.delete(id);
	}
}

export default DeleteCountryService;
