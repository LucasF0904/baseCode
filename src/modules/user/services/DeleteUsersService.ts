import { inject, injectable } from 'tsyringe';
import IUsersRepository from '@modules/user/domain/repositories/IUsersRepository';

@injectable()
class DeleteUsersService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ){}

    public async delete(id: string): Promise<void> {
		await this.usersRepository.delete(id);
	}}

export default DeleteUsersService;