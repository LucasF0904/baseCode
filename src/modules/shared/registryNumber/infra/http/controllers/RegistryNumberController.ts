import CreateRegistryNumberService from '@modules/shared/registryNumber/services/CreateRegistryNumberService';
import DeleteRegistryNumberService from '@modules/shared/registryNumber/services/DeleteRegistryNumberService';
import FindRegistryNumberService from '@modules/shared/registryNumber/services/FindRegistryNumberService';
import UpdateRegistryNumberService from '@modules/shared/registryNumber/services/UpdateRegistryNumberService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class RegistryNumberController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateRegistryNumberService);

		const registryNumber = await service.create(request.body);

		const output = await ApiResponse.execute('RegistryNumber criada com sucesso!.', registryNumber);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateRegistryNumberService);

		const registryNumber = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('RegistryNumber Atualizado. ', registryNumber);

		return response.json(output);
	}

    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteRegistryNumberService);

		const registryNumber = await service.delete(request.body);

		const output = await ApiResponse.execute('RegistryNumber Deletado. ', registryNumber);

		return response.json(output);
	}

    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindRegistryNumberService);

		const registryNumber = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', registryNumber);

		return response.json(output);
	}

    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindRegistryNumberService);

		const registryNumber = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById retornado', registryNumber);

		return response.json(output);
	}
}

export default RegistryNumberController;