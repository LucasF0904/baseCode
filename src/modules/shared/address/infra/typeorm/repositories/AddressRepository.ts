import { getRepository, Repository } from "typeorm";
import Address from "@modules/shared/address/infra/typeorm/entities/Address";
import IAddressRepository from "@modules/shared/address/domain/repositories/IAddressRepository";
import IAddress from "@modules/shared/address/domain/interfaces/IAddress";
import ICreateAddress from "@modules/shared/address/domain/interfaces/ICreateAddress";
import IUpdateAddress from "@modules/shared/address/domain/interfaces/IUpdateAddress";

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(parameters: ICreateAddress): Promise<Address> {
    const address = this.ormRepository.create({
      fullAddress: parameters.fullAddress,
      complement: parameters.complement,
      district: parameters.district,
      city: parameters.city,
      postalCode: parameters.postalCode,
      geoLocation: parameters.geoLocation,
      created_at: parameters.created_at,
      updated_at: parameters.updated_at,
      deleted_at: parameters.deleted_at,
    });
    await this.ormRepository.save(address);

    return address;
  }
  public async update(id: string, address: IUpdateAddress): Promise<boolean> {
    await this.ormRepository.update(id, address);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<Address[]> {
    const addresss = this.ormRepository.find();

    return addresss;
  }

  public async findById(id: string): Promise<IAddress | undefined> {
    const address = this.ormRepository.findOne(id);

    return address;
  }
}
export default AddressRepository;
