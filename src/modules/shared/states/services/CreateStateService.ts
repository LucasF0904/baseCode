import { inject, injectable } from 'tsyringe';
import IState from '@modules/shared/states/domain/interfaces/IState';
import IStatesRepository from '@modules/shared/states/domain/repositories/IStateRepository';
import IRequestCreateState from '../domain/interfaces/IRequestCreateState';

@injectable()
class CreateStateService {
    constructor(
        @inject('StatesRepository')
        private statesRepository: IStatesRepository,
    ){}

    public async create(parameters: IRequestCreateState): Promise<IState> {
        const state = await this.statesRepository.create({
            short_name: parameters.short_name,
            long_name: parameters.long_name,
        });
        return state;
    }
}

export default CreateStateService;