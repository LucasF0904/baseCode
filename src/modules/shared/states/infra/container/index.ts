import { container } from 'tsyringe';
import StateRepository from '@modules/shared/states/infra/typeorm/repositories/StatesRepository';
import IStateRepository from '@modules/shared/states/domain/repositories/IStateRepository';

container.registerSingleton<IStateRepository>('StateRepository', StateRepository);