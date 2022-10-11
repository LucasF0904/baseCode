import { inject, injectable } from "tsyringe";
import IUsers from "@modules/user/domain/interfaces/IUser";
import IUsersRepository from "@modules/user/domain/repositories/IUsersRepository";

@injectable()
class UpdateUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async update(id: string, paramters: IUsers): Promise<boolean> {
    const data = {};

    if (typeof paramters.id !== "undefined") {
      Object.assign(data, { id: paramters.id });
    }

    if (typeof paramters.address !== "undefined") {
      Object.assign(data, { address: paramters.address });
    }

    if (typeof paramters.person !== "undefined") {
      Object.assign(data, { person: paramters.person });
    }

    if (typeof paramters.email !== "undefined") {
      Object.assign(data, { email: paramters.email });
    }

    if (typeof paramters.password !== "undefined") {
      Object.assign(data, { password: paramters.password });
    }

    if (typeof paramters.phone !== "undefined") {
      Object.assign(data, { phone: paramters.phone });
    }   

    if (typeof paramters.active !== "undefined") {
      Object.assign(data, { active: paramters.active });
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

    await this.usersRepository.update(id, data);

    return true;
  }
}

export default UpdateUsersService;
