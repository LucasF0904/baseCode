import { inject, injectable } from 'tsyringe';
import ICity from '@modules/shared/cities/domain/interfaces/ICity';
import ICitiesRepository from '@modules/shared/cities/domain/repositories/ICitiesRepository';
import IRequestCreateCities from '../domain/interfaces/IRequestCreateCities';

@injectable()
class CreateCitiesService {
    constructor(
        @inject('CitiesRepository')
        private citiesRepository: ICitiesRepository,
    ){}

    public async create(parameters: IRequestCreateCities): Promise<ICity> {
        const city = await this.citiesRepository.create({
            name: parameters.name,
            code: parameters.code,
            state: parameters.state
        });
        return city;
    }
}

export default CreateCitiesService;