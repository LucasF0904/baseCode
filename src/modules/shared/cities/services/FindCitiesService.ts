import { inject, injectable } from 'tsyringe';
import ICitiesRepository from '@modules/shared/cities/domain/repositories/ICitiesRepository';
import ICity from '@modules/shared/cities/domain/interfaces/ICity';


@injectable()
class FindStateService {

    constructor(
        @inject('CitiesRepository')
        private citiesRepository: ICitiesRepository,
    ) {}

    public async findAll(): Promise<ICity[] | undefined> {
        const state = await this.citiesRepository.findAll();

        return state;
    }

    public async findById(id: string): Promise<ICity | undefined> {
        const state = await this.citiesRepository.findById(id);

        return state;
    }
    public async findByName(name: string): Promise<ICity | undefined> {
        const state = await this.citiesRepository.findByName(name);

        return state;
    }
    public async findByCode(code: string): Promise<ICity | undefined> {
        const state = await this.citiesRepository.findByCode(code);

        return state;
    }
}

export default FindStateService;