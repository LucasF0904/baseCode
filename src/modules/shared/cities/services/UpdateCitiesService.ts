import { inject, injectable } from 'tsyringe';
import ICitiesRepository from '@modules/shared/cities/domain/repositories/ICitiesRepository';
import ICity from '@modules/shared/cities/domain/interfaces/ICity';

@injectable()
class UpdateCitiesService {

    constructor(
        @inject('CityRepository')
        private cityRepository: ICitiesRepository,
    ) {}

    public async update(id: string, paramters: ICity): Promise<boolean> {
        const data = {}

        if (typeof paramters.id !== 'undefined') {
            Object.assign(data, {id: paramters.id });
        }

        if (typeof paramters.code !== 'undefined') {
            Object.assign(data, {code: paramters.code });
        }

        if (typeof paramters.name !== 'undefined') {
            Object.assign(data, {name: paramters.name });
        }

        if (typeof paramters.state !== 'undefined') {
            Object.assign(data, {state: paramters.state });
        }

        if (typeof paramters.created_at !== 'undefined') {
            Object.assign(data, {created_at: paramters.created_at });
        }

        if (typeof paramters.updated_at !== 'undefined') {
            Object.assign(data, {updated_at: paramters.updated_at });
        }

        if (typeof paramters.deleted_at !== 'undefined') {
            Object.assign(data, {deleted_at: paramters.deleted_at });
        }

        if (Object.keys(data).length === 0) {
			return false;
		}

        await this.cityRepository.update(id, data);

        return true;

    }
}

export default UpdateCitiesService;