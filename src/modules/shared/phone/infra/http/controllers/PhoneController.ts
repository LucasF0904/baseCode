import CreatePhoneService from '@modules/shared/phone/services/CreatePhoneService';
import DeletePhoneService from '@modules/shared/phone/services/DeletePhoneService';
import FindPhoneService from '@modules/shared/phone/services/FindPhoneService';
import UpdatePhoneService from '@modules/shared/phone/services/UpdatePhoneService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class PhoneController {
    public async create(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(CreatePhoneService);

		const phone = await service.create(request.body);

		const output = await ApiResponse.execute('Phone criada com sucesso!.', phone);

		return response.json(output);
	}

    public async update(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(UpdatePhoneService);

		const phone = await service.update(request.params.id, request.body);

		const output = await ApiResponse.execute('Phone Atualizado. ', phone);

		return response.json(output);
	}
	
    public async delete(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(DeletePhoneService);

		const phone = await service.delete(request.body);

		const output = await ApiResponse.execute('Phone Deletado. ', phone);

		return response.json(output);
	}

    public async findAll(_request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindPhoneService);

		const phone = await service.findAll();

		const output = await ApiResponse.execute('Find All retornado', phone);

		return response.json(output);
	}

    public async findById(request: Request, response: Response): Promise<Response> {
		const service = container.resolve(FindPhoneService);

		const phone = await service.findById(request.params.id);

		const output = await ApiResponse.execute('findById retornado', phone);

		return response.json(output);
	}
}

export default PhoneController;