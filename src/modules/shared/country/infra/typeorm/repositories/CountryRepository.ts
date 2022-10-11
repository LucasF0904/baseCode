import ICountryRepository from "@modules/shared/country/domain/repositories/ICountryRepository";
import { shortName } from "@modules/shared/country/domain/interfaces/ICountry";
import { getRepository, Repository } from "typeorm";
import Country from "@modules/shared/country/infra/typeorm/entities/Country";
import ICountry from "@modules/shared/country/domain/interfaces/ICountry";
import ICreateCountry from "@modules/shared/country/domain/interfaces/ICreateCountry";
import IUpdateCountry from "@modules/shared/country/domain/interfaces/IUpdateCountry";

class CountryRepository implements ICountryRepository {
  private ormRepository: Repository<Country>;

  constructor() {
    this.ormRepository = getRepository(Country);
  }

  public async create(parameters: ICreateCountry): Promise<Country> {
    const country = this.ormRepository.create({
      id: parameters.id,
      short_Name: parameters.short_name,
      long_Name: parameters.long_name,
      created_at: parameters.created_at,
      updated_at: parameters.updated_at,
      deleted_at: parameters.deleted_at,
    });
    await this.ormRepository.save(country);

    return country;
  }
  public async update(id: string, country: IUpdateCountry): Promise<boolean> {
    await this.ormRepository.update(id, country);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<Country[]> {
    const country = this.ormRepository.find();

    return country;
  }

  public async findById(id: string): Promise<ICountry | undefined> {
    const country = this.ormRepository.findOne(id);

    return country;
  }

  public async findByCode(code: string): Promise<ICountry | undefined> {
    const country = this.ormRepository.findOne(code);

    return country;
  }

  public async findByShortName(
    shortname: shortName
  ): Promise<ICountry | undefined> {
    const country = this.ormRepository.findOne(shortname);

    return country;
  }
  public async findByLongName(longName: string): Promise<ICountry | undefined> {
    const country = this.ormRepository.findOne(longName);

    return country;
  }
}

export default CountryRepository;
