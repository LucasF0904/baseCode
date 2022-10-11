import IPhoneRepository from "@modules/shared/phone/domain/repositories/IPhoneRepository";
import { getRepository, Repository } from "typeorm";
import Phone from "@modules/shared/phone/infra/typeorm/entities/Phone";
import IPhone from "@modules/shared/phone/domain/interfaces/IPhone";
import ICreatePhone from "@modules/shared/phone/domain/interfaces/ICreatePhone";
import IUpdatePhone from "@modules/shared/phone/domain/interfaces/IUpdatePhone";

class PhoneRepository implements IPhoneRepository {
  private ormRepository: Repository<Phone>;

  constructor() {
    this.ormRepository = getRepository(Phone);
  }

  public async create(parameters: ICreatePhone): Promise<Phone> {
    const phone = this.ormRepository.create({
      id: parameters.id,
      number: parameters.number,
      type: parameters.type,
      created_at: parameters.created_at,
      updated_at: parameters.updated_at,
      deleted_at: parameters.deleted_at,
    });
    await this.ormRepository.save(phone);

    return phone;
  }
  public async update(id: string, phone: IUpdatePhone): Promise<boolean> {
    await this.ormRepository.update(id, phone);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<Phone[]> {
    const phone = this.ormRepository.find();

    return phone;
  }

  public async findById(id: string): Promise<IPhone | undefined> {
    const phone = this.ormRepository.findOne(id);

    return phone;
  }
}

export default PhoneRepository;
