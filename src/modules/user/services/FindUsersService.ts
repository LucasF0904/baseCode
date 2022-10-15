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
        const user = await this.usersRepository.findAll();

        return user;
    }

    public async findById(id: string): Promise<IUser | undefined> {
        const user = await this.usersRepository.findById(id);

        return user;
    }
}

export default FindUsersService;