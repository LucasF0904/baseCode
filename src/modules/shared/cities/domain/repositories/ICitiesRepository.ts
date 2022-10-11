import ICity from "@modules/shared/cities/domain/interfaces/ICity";
import City from "@modules/shared/cities/infra/typeorm/entities/City";
import ICreateCities from "../interfaces/ICreateCities";
import IUpdateCities from "../interfaces/IUpdateCities";

interface ICitiesRepository {
  create(data: ICreateCities): Promise<City>;
  update(id: string, City: IUpdateCities): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<City[]>;
  findById(id: string): Promise<ICity | undefined>;
  findByName(name: string): Promise<ICity | undefined>;
  findByCode(code: string): Promise<ICity | undefined>;
}
export default ICitiesRepository;
