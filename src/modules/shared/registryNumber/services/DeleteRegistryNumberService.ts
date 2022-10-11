import { inject, injectable } from 'tsyringe';
import IRegistryNumberRepository from '@modules/shared/registryNumber/domain/repositories/IRegistryNumberRepository';


@injectable()
class DeleteRegistryNumberService {
	constructor(
		@inject('RegistryNumberRepository')
		private registryNumberRepository: IRegistryNumberRepository,
	) {}

	public async delete(id: string): Promise<void> {
		await this.registryNumberRepository.delete(id);
	}
}

export default DeleteRegistryNumberService;
