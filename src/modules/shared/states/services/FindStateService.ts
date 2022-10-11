import { inject, injectable } from 'tsyringe';
import IStatesRepository from '@modules/shared/states/domain/repositories/IStateRepository';
import IState, { shortName } from '@modules/shared/states/domain/interfaces/IState';

@injectable()
class FindStateService {

    constructor(
        @inject('StateRepository')
        private stateRepository: IStatesRepository,
    ) {}

    public async findAll(): Promise<IState[] | undefined> {
        const state = await this.stateRepository.findAll();

        return state;
    }

    public async findById(id: string): Promise<IState | undefined> {
        const state = await this.stateRepository.findById(id);

        return state;
    }
    public async findByShortName(shortName: shortName): Promise<IState | undefined> {
        const state = await this.stateRepository.findByShortName(shortName);

        return state;
    }
    public async findByLongName(longName: string): Promise<IState | undefined> {
        const state = await this.stateRepository.findByLongName(longName);

        return state;
    }
}

export default FindStateService;