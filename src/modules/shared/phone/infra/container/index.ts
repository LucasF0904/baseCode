import { container } from 'tsyringe';
import PhoneRepository from '@modules/shared/phone/infra/typeorm/repositories/PhoneRepository';
import IPhoneRepository from '@modules/shared/phone/domain/repositories/IPhoneRepository';

container.registerSingleton<IPhoneRepository>('PhoneRepository', PhoneRepository);