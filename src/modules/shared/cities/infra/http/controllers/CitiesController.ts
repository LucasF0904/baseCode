import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCitiesService from '../../../services/CreateCitiesService';
import DeleteCitiesService from '../../../services/DeleteCitiesService';
import FindCitiesService from '../../../services/FindCitiesService';
import UpdateCitiesService from '../../../services/UpdateCitiesService';

class CityController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreateCitiesService);

		const city = await service.create(request.body);

		const output = await ApiResponse.execute('City criada com sucesso!.', city);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdateCitiesService);

		const city = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('City Atualizado. ', city);

		return response.json(output);
	}
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeleteCitiesService);

		const city = await service.delete(request.body);

		const output = await ApiResponse.execute('City Deletado. ', city);

		return response.json(output);
	}
    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCitiesService);

		const city = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', city);

		return response.json(output);
	}
    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCitiesService);

		const city = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById retornado', city);

		return response.json(output);
	}
    public async findByName(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCitiesService);

		const city = await service.findByName(request.body);

		const output = await ApiResponse.execute('findByName retornado', city);

		return response.json(output);
	}
    public async findByCode(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindCitiesService);

		const city = await service.findByCode(request.body);

		const output = await ApiResponse.execute('findByCode retornado', city);

		return response.json(output);
	}
}

export default CityController;