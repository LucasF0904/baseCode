import IPhone from "@modules/shared/phone/domain/interfaces/IPhone";
import Phone from "@modules/shared/phone/infra/typeorm/entities/Phone";
import ICreatePhone from "../interfaces/ICreatePhone";
import IUpdatePhone from "../interfaces/IUpdatePhone";

interface IPhonesRepository {
  create(data: ICreatePhone): Promise<Phone>;
  update(id: string, phone: IUpdatePhone): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Phone[]>;
  findById(id: string): Promise<IPhone | undefined>;
}

export default IPhonesRepository;
