import { inject, injectable } from 'tsyringe';
import IUser from '@modules/user/domain/interfaces/IUser';
import IUsersRepository from '@modules/user/domain/repositories/IUsersRepository';

@injectable()
class FindUsersService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async findAll(): Promise<IUser[] | undefined> {
        const state = await this.usersRepository.findAll();

        return state;
    }

    public async findById(id: string): Promise<IUser | undefined> {
        const state = await this.usersRepository.findById(id);

        return state;
    }
}

export default FindUsersService;