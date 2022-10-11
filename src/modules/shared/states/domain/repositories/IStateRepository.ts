import {
  IState,
  shortName,
} from "@modules/shared/states/domain/interfaces/IState";
import State from "@modules/shared/states/infra/typeorm/entities/State";
import ICreateState from "../interfaces/ICreateState";
import IUpdateState from "../interfaces/IUpdateState";

interface IStatesRepository {
  create(data: ICreateState): Promise<State>;
  update(id: string, state: IUpdateState): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<State[]>;
  findById(id: string): Promise<IState | undefined>;
  findByShortName(shortName: shortName): Promise<IState | undefined>;
  findByLongName(longName: string): Promise<IState | undefined>;
}

export default IStatesRepository;
