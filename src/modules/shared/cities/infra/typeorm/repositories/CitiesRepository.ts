import { getRepository, Repository } from "typeorm";
import City from "@modules/shared/cities/infra/typeorm/entities/City";
import ICitiesRepository from "@modules/shared/cities/domain/repositories/ICitiesRepository";
import ICity from "@modules/shared/cities/domain/interfaces/ICity";
import ICreateCities from "@modules/shared/cities/domain/interfaces/ICreateCities";
import IUpdateCities from "@modules/shared/cities/domain/interfaces/IUpdateCities";

class CitiesRepository implements ICitiesRepository {
  private ormRepository: Repository<City>;

  constructor() {
    this.ormRepository = getRepository(City);
  }

  public async create(parameters: ICreateCities): Promise<City> {
    const city = this.ormRepository.create({
      id: parameters.id,
      code: parameters.code,
      name: parameters.name,
      state: parameters.state,
      created_at: parameters.created_at,
      updated_at: parameters.updated_at,
      deleted_at: parameters.deleted_at,
    });
    await this.ormRepository.save(city);

    return city;
  }
  public async update(id: string, city: IUpdateCities): Promise<boolean> {
    await this.ormRepository.update(id, city);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<City[]> {
    const citys = this.ormRepository.find();

    return citys;
  }

  public async findById(id: string): Promise<ICity | undefined> {
    const city = this.ormRepository.findOne(id);

    return city;
  }

  public async findByName(name: string): Promise<ICity | undefined> {
    const city = this.ormRepository.findOne(name);

    return city;
  }
  public async findByCode(code: string): Promise<ICity | undefined> {
    const city = this.ormRepository.findOne(code);

    return city;
  }
}
export default CitiesRepository;
