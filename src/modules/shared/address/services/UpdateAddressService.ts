import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import IAddress from '@modules/shared/address/domain/interfaces/IAddress';

@injectable()
class UpdateAddressService {

    constructor(
        @inject('AddressRepository')
        private addressRepository: IAddressRepository,
    ) {}

    public async update(id: string, paramters: IAddress): Promise<boolean> {
        const data = {}

        if (typeof paramters.id !== 'undefined') {
            Object.assign(data, {id: paramters.id });
        }

        if (typeof paramters.fullAddress !== 'undefined') {
            Object.assign(data, {fullAddress: paramters.fullAddress });
        }

        if (typeof paramters.complement !== 'undefined') {
            Object.assign(data, {complement: paramters.complement });
        }

        if (typeof paramters.district !== 'undefined') {
            Object.assign(data, {district: paramters.district });
        }

        if (typeof paramters.city !== 'undefined') {
            Object.assign(data, {city: paramters.city });
        }

        if (typeof paramters.postalCode !== 'undefined') {
            Object.assign(data, {postalCode: paramters.postalCode });
        }

        if (typeof paramters.geoLocation !== 'undefined') {
            Object.assign(data, {geoLocation: paramters.geoLocation });
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

        await this.addressRepository.update(id, data);

        return true;

    }
}

export default UpdateAddressService;