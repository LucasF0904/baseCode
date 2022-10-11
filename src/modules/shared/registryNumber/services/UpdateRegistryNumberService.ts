import { inject, injectable } from 'tsyringe';
import IRegistryNumberRepository from '@modules/shared/registryNumber/domain/repositories/IRegistryNumberRepository';
import IRegistryNumber from '@modules/shared/registryNumber/domain/interfaces/IRegistryNumber';

@injectable()
class UpdateRegistryNumberService {

    constructor(
        @inject('RegistryNumberRepository')
        private registryNumberRepository: IRegistryNumberRepository,
    ) {}

    public async update(id: string, paramters: IRegistryNumber): Promise<boolean> {
        const data = {}

        if (typeof paramters.id !== 'undefined') {
            Object.assign(data, {id: paramters.id });
        }

        if (typeof paramters.regNumber !== 'undefined') {
            Object.assign(data, {regNumber: paramters.regNumber });
        }

        if (typeof paramters.type !== 'undefined') {
            Object.assign(data, {type: paramters.type });
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

        await this.registryNumberRepository.update(id, data);

        return true;

    }
}

export default UpdateRegistryNumberService;