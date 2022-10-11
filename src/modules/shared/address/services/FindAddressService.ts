import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IAddress from '@modules/shared/address/domain/interfaces/IAddress';


@injectable()
class FindStateService {

    constructor(
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,
    ) {}

    public async findAll(): Promise<IAddress[] | undefined> {
        const state = await this.addressRepository.findAll();

        return state;
    }

    public async findById(id: string): Promise<IAddress | undefined> {
        const state = await this.addressRepository.findById(id);

        return state;
    }

}

export default FindStateService;