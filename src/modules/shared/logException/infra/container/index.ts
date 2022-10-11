import { container } from 'tsyringe';
import ILogExceptionRepository from '@modules/shared/logException/domain/interfaces/repositories/ILogExceptionRepository';
import LogExceptionRepository from '@modules/shared/logException/infra/typeorm/repositories/LogExceptionRepository';

container.registerSingleton<ILogExceptionRepository>('LogExceptionRepository', LogExceptionRepository);
