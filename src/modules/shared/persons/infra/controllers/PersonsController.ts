import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePersonsService from '../../services/CreatePersonsService';
import UpdatePersonService from '../../services/UpdatePersonService';
import DeletePersonService from '../../services/DeletePersonService';
import FindPersonsService from '../../services/FindPersonsService';

// import readFileToString from '../../../utils/readFile';

class PersonsController {
	public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreatePersonsService);

		const user = await service.execute(request.body);

		const output = await ApiResponse.execute('Person criada com sucesso!.', user);

		return response.json(output);
	}

	public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindPersonsService);

		const user = await service.findById(request.body);

		const output = await ApiResponse.execute('Person Retornado. ', user);

		return response.json(output);
	}

	public async updateById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdatePersonService);

		const user = await service.updateById(request.body);

		const output = await ApiResponse.execute('Person Atualizado. ', user);

		return response.json(output);
	}

	public async deleteById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeletePersonService);

		const user = await service.deleteById(request.body);

		const output = await ApiResponse.execute('Person Deletado. ', user);

		return response.json(output);
	}

	public async findAll(response: Response): Promise<Response> {
		const service = container.resolve(FindPersonsService);

		const user = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', user);

		return response.json(output);
	}
}

export default PersonsController;
