import { inject, injectable } from 'tsyringe';
import IAddress from '@modules/shared/address/domain/interfaces/IAddress';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IRequestCreateAddress from '../domain/interfaces/IRequestCreateAddress';

@injectable()
class CreateAddressService {
    constructor(
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,
    ){}

    public async create(parameters: IRequestCreateAddress): Promise<IAddress> {
        const address = await this.addressRepository.create({
            fullAddress: parameters.fullAddress,
            complement: parameters.complement,
            district: parameters.district,
            city: parameters.city,
            postalCode: parameters.postalCode,
            geoLocation: parameters.geoLocation,
        });
        return address;
    }
}

export default CreateAddressService;