import Address from "@modules/shared/address/infra/typeorm/entities/Address";
import ICreateAddress from "../interfaces/ICreateAddress";
import IUpdateAddress from "../interfaces/IUpdateAddress";

interface IAddressRepository {
  create(data: ICreateAddress): Promise<Address>;
  update(id: string, address: IUpdateAddress): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Address[]>;
  findById(id: string): Promise<Address | undefined>;
}
export default IAddressRepository;
