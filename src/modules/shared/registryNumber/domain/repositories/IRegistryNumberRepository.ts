import IRegistryNumber from "@modules/shared/registryNumber/domain/interfaces/IRegistryNumber";
import RegistryNumber from "@modules/shared/registryNumber/infra/typeorm/entities/RegistryNumber";
import ICreateRegistryNumber from "../interfaces/ICreateRegistryNumber";
import IUpdateRegistryNumber from "../interfaces/IUpdateRegistryNumber";

interface IRegistryNumberRepository {
  create(data: ICreateRegistryNumber): Promise<RegistryNumber>;
  update(id: string, registryNumber: IUpdateRegistryNumber): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<RegistryNumber[]>;
  findById(id: string): Promise<IRegistryNumber | undefined>;
}

export default IRegistryNumberRepository;
