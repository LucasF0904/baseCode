import { container } from 'tsyringe';
import IUsersRepository from '@modules/user/domain/repositories/IUsersRepository';
import UsersRepository from '@modules/user/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);