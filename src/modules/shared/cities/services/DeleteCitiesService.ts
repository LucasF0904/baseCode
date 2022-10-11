import { inject, injectable } from 'tsyringe';
import ICitiesRepository from '@modules/shared/cities/domain/repositories/ICitiesRepository';

@injectable()
class DeleteCitiesService {
	constructor(
		@inject('CitiesRepository')
		private citiesRepository: ICitiesRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.citiesRepository.delete(id);
	}
}

export default DeleteCitiesService;
