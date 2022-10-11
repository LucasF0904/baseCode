import { inject, injectable } from 'tsyringe';
import IPhonesRepository from '@modules/shared/phone/domain/repositories/IPhoneRepository';
import IPhone from '@modules/shared/phone/domain/interfaces/IPhone';

@injectable()
class UpdatePhoneService {

    constructor(
        @inject('PhoneRepository')
        private phoneRepository: IPhonesRepository,
    ) {}

    public async update(id: string, paramters: IPhone): Promise<boolean> {
        const data = {}

        if (typeof paramters.id !== 'undefined') {
            Object.assign(data, {id: paramters.id });
        }

        if (typeof paramters.number !== 'undefined') {
            Object.assign(data, {number: paramters.number });
        }

        if (typeof paramters.type !== 'undefined') {
            Object.assign(data, {type: paramters.type });
        }

        if (typeof paramters.created_at !== 'undefined') {
            Object.assign(data, {created_at: paramters.created_at });
        }

        if (typeof paramters.updated_at !== 'undefined') {
            Object.assign(data, {updated_at: paramters.updated_at });
        }

        if (typeof paramters.deleted_at !== 'undefined') {
            Object.assign(data, {deleted_at: paramters.deleted_at });
        }

        if (Object.keys(data).length === 0) {
			return false;
		}

        await this.phoneRepository.update(id, data);

        return true;

    }
}

export default UpdatePhoneService;