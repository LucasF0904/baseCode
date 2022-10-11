import { inject, injectable } from 'tsyringe';
import IPhone from '@modules/shared/phone/domain/interfaces/IPhone';
import IPhonesRepository from '@modules/shared/phone/domain/repositories/IPhoneRepository';
import IRequestCreatePhone from '../domain/interfaces/IRequestCreatePhone';

@injectable()
class CreatePhoneService {
    constructor(
        @inject('PhonesRepository')
        private phonesRepository: IPhonesRepository,
    ){}

    public async create(parameters: IRequestCreatePhone): Promise<IPhone> {
        const phone = await this.phonesRepository.create({
            number: parameters.number,
            type: parameters.type,
        });
        return phone;
    }
}

export default CreatePhoneService;