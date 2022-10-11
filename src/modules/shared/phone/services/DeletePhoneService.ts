import { inject, injectable } from 'tsyringe';
import IPhonesRepository from '@modules/shared/phone/domain/repositories/IPhoneRepository';


@injectable()
class DeletePhoneService {
	constructor(
		@inject('PhoneRepository')
		private phoneRepository: IPhonesRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.phoneRepository.delete(id);
	}
}

export default DeletePhoneService;
