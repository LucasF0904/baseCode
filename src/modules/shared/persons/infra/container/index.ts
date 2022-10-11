import { container } from 'tsyringe';
import PersonRepository from '@modules/shared/persons/infra/typeorm/repositories/PersonRepository';
import IPersonRepository from '@modules/shared/persons/domain/repositories/IPersonRepository';

container.registerSingleton<IPersonRepository>('PersonRepository', PersonRepository);
