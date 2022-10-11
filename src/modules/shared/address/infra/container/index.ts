import { container } from 'tsyringe';
import IAddressRepository from '@modules/shared/address/domain/repositories/IAddressRepository';
import AddressRepository from '../typeorm/repositories/AddressRepository';

container.registerSingleton<IAddressRepository>('AddressRepository', AddressRepository);