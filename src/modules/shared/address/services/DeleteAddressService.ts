import { inject, injectable } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';

@injectable()
class DeleteAddressService {
	constructor(
		@inject('AddressRepository')
		private addressRepository: IAddressRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.addressRepository.delete(id);
	}
}

export default DeleteAddressService;
