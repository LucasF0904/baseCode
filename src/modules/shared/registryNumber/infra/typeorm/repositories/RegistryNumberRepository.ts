import IRegistryNumberRepository from "@modules/shared/registryNumber/domain/repositories/IRegistryNumberRepository";
import { getRepository, Repository } from "typeorm";
import RegistryNumber from "@modules/shared/registryNumber/infra/typeorm/entities/RegistryNumber";
import IRegistryNumber from "@modules/shared/registryNumber/domain/interfaces/IRegistryNumber";
import ICreateRegistryNumber from "@modules/shared/registryNumber/domain/interfaces/ICreateRegistryNumber";
import IUpdateRegistryNumber from "@modules/shared/registryNumber/domain/interfaces/IUpdateRegistryNumber";

class RegistryNumberRepository implements IRegistryNumberRepository {
  private ormRepository: Repository<RegistryNumber>;

  constructor() {
    this.ormRepository = getRepository(RegistryNumber);
  }

  public async create(
    parameters: ICreateRegistryNumber
  ): Promise<RegistryNumber> {
    const registryNumber = this.ormRepository.create({
      id: parameters.id,
      regNumber: parameters.regNumber,
      type: parameters.type,
      created_at: parameters.created_at,
      updated_at: parameters.updated_at,
      deleted_at: parameters.deleted_at,
    });
    await this.ormRepository.save(registryNumber);

    return registryNumber;
  }
  public async update(
    id: string,
    registryNumber: IUpdateRegistryNumber
  ): Promise<boolean> {
    await this.ormRepository.update(id, registryNumber);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<RegistryNumber[]> {
    const registryNumber = this.ormRepository.find();

    return registryNumber;
  }

  public async findById(id: string): Promise<IRegistryNumber | undefined> {
    const registryNumber = this.ormRepository.findOne(id);

    return registryNumber;
  }
}

export default RegistryNumberRepository;
