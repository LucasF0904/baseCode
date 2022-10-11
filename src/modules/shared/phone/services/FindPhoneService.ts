import { inject, injectable } from 'tsyringe';
import IPhonesRepository from '@modules/shared/phone/domain/repositories/IPhoneRepository';
import IPhone from '@modules/shared/phone/domain/interfaces/IPhone';

@injectable()
class FindPhoneService {

    constructor(
        @inject('PhoneRepository')
        private phoneRepository: IPhonesRepository,
    ) {}

    public async findAll(): Promise<IPhone[] | undefined> {
        const phone = await this.phoneRepository.findAll();

        return phone;
    }

    public async findById(id: string): Promise<IPhone | undefined> {
        const phone = await this.phoneRepository.findById(id);

        return phone;
    }
}

export default FindPhoneService;