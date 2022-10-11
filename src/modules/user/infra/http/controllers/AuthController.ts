import AuthLoginService from '@modules/user/services/AuthLoginService';
import ApiResponse from '@shared/http/response/ApiResponse';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToPlain } from 'class-transformer';
import RefreshTokenService from '@modules/user/services/RefreshTokenService';


class AuthController {
	public async login(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		const service = container.resolve(AuthLoginService);

		const auth = await service.execute({ email, password });

		const user = instanceToPlain(auth);

		const output = await ApiResponse.execute('Login realizado com sucesso!.', user);

		return response.json(output);
	}

	public async refreshToken(request: Request, response: Response): Promise<Response> {
		const { id } = request.body.user;

		const service = container.resolve(RefreshTokenService);

		const auth = await service.execute(id);

		const user = instanceToPlain(auth);

		delete user.user;

		const output = await ApiResponse.execute('Login realizado com sucesso!.', user);

		return response.json(output);
	}
}

export default AuthController;
