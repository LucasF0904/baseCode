import { inject, injectable } from 'tsyringe';
import IRegistryNumberRepository from '@modules/shared/registryNumber/domain/repositories/IRegistryNumberRepository';
import IRegistryNumber from '@modules/shared/registryNumber/domain/interfaces/IRegistryNumber';

@injectable()
class FindRegistryNumberService {

    constructor(
        @inject('RegistryNumberRepository')
        private registryNumberRepository: IRegistryNumberRepository,
    ) {}

    public async findAll(): Promise<IRegistryNumber[] | undefined> {
        const registryNumber = await this.registryNumberRepository.findAll();

        return registryNumber;
    }

    public async findById(id: string): Promise<IRegistryNumber | undefined> {
        const registryNumber = await this.registryNumberRepository.findById(id);

        return registryNumber;
    }
}

export default FindRegistryNumberService;