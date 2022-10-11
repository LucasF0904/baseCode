import { container } from 'tsyringe';
import ICitiesRepository from '@modules/shared/cities/domain/repositories/ICitiesRepository';
import CitiesRepository from '../typeorm/repositories/CitiesRepository';

container.registerSingleton<ICitiesRepository>('CityRepository', CitiesRepository);