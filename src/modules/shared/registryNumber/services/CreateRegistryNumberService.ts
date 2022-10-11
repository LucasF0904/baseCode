import { inject, injectable } from 'tsyringe';
import IRegistryNumber from '@modules/shared/registryNumber/domain/interfaces/IRegistryNumber';
import IRegistryNumberRepository from '@modules/shared/registryNumber/domain/repositories/IRegistryNumberRepository';
import IRequestCreateRegistryNumber from '../domain/interfaces/IRequestCreateRegistryNumber';

@injectable()
class CreateRegistryNumberService {
    constructor(
        @inject('RegistryNumberRepository')
        private registryNumberRepository: IRegistryNumberRepository,
    ){}

    public async create(parameters: IRequestCreateRegistryNumber): Promise<IRegistryNumber> {
        const registryNumber = await this.registryNumberRepository.create({
            regNumber: parameters.regNumber,
            type: parameters.type
        });
        return registryNumber;
    }
}

export default CreateRegistryNumberService;