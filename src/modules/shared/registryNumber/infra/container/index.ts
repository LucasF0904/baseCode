import { container } from 'tsyringe';
import RegistryNumberRepository from '@modules/shared/registryNumber/infra/typeorm/repositories/RegistryNumberRepository';
import IRegistryNumberRepository from '@modules/shared/registryNumber/domain/repositories/IRegistryNumberRepository';

container.registerSingleton<IRegistryNumberRepository>('RegistryNumberRepository', RegistryNumberRepository);