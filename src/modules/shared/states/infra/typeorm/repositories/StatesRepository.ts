import IStatesRepository from "@modules/shared/states/domain/repositories/IStateRepository";
import { shortName } from "@modules/shared/states/domain/interfaces/IState";
import { getRepository, Repository } from "typeorm";
import State from "@modules/shared/states/infra/typeorm/entities/State";
import IState from "@modules/shared/states/domain/interfaces/IState";
import ICreateState from "@modules/shared/states/domain/interfaces/ICreateState";
import IUpdateState from "@modules/shared/states/domain/interfaces/IUpdateState";

class StatesRepository implements IStatesRepository {
  private ormRepository: Repository<State>;

  constructor() {
    this.ormRepository = getRepository(State);
  }

  public async create(parameters: ICreateState): Promise<State> {
    const state = this.ormRepository.create({
      id: parameters.id,
      short_name: parameters.short_name,
      long_name: parameters.long_name,
      created_at: parameters.created_at,
      updated_at: parameters.updated_at,
      deleted_at: parameters.deleted_at,
    });
    await this.ormRepository.save(state);

    return state;
  }
  public async update(id: string, state: IUpdateState): Promise<boolean> {
    await this.ormRepository.update(id, state);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<State[]> {
    const states = this.ormRepository.find();

    return states;
  }

  public async findById(id: string): Promise<IState | undefined> {
    const state = this.ormRepository.findOne(id);

    return state;
  }

  public async findByShortName(
    shortname: shortName
  ): Promise<IState | undefined> {
    const state = this.ormRepository.findOne(shortname);

    return state;
  }
  public async findByLongName(longName: string): Promise<IState | undefined> {
    const state = this.ormRepository.findOne(longName);

    return state;
  }
}

export default StatesRepository;
