import { inject, injectable } from "tsyringe";
import ICountryRepository from "@modules/shared/country/domain/repositories/ICountryRepository";
import ICountry from "@modules/shared/country/domain/interfaces/ICountry";

@injectable()
class UpdateCountryService {
  constructor(
    @inject("CountryRepository")
    private countryRepository: ICountryRepository
  ) {}

  public async update(id: string, paramters: ICountry): Promise<boolean> {
    const data = {};

    if (typeof paramters.id !== "undefined") {
      Object.assign(data, { id: paramters.id });
    }

    if (typeof paramters.code !== "undefined") {
      Object.assign(data, { code: paramters.code });
    }

    if (typeof paramters.short_name !== "undefined") {
      Object.assign(data, { shortName: paramters.short_name });
    }

    if (typeof paramters.long_name !== "undefined") {
      Object.assign(data, { long_name: paramters.long_name });
    }

    if (typeof paramters.created_at !== "undefined") {
      Object.assign(data, { created_at: paramters.created_at });
    }

    if (typeof paramters.updated_at !== "undefined") {
      Object.assign(data, { updated_at: paramters.updated_at });
    }

    if (typeof paramters.deleted_at !== "undefined") {
      Object.assign(data, { deleted_at: paramters.deleted_at });
    }

    if (Object.keys(data).length === 0) {
      return false;
    }

    await this.countryRepository.update(id, data);

    return true;
  }
}

export default UpdateCountryService;
