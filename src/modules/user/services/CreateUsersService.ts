import { inject, injectable } from "tsyringe";
import IUser from "@modules/user/domain/interfaces/IUser";
import IUsersRepository from "@modules/user/domain/repositories/IUsersRepository";
import IRequestCreateUsers from "@modules/user/domain/interfaces/IRequestCreateUsers";

@injectable()
class CreateUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async create(parameters: IRequestCreateUsers): Promise<IUser> {
    const user = await this.usersRepository.create({
      userName: parameters.userName,
      email: parameters.email,
      password: parameters.password,
      confirmed: parameters.confirmed,
      confirmedRequest: parameters.confirmedRequest,
      active: parameters.active,
    });
    return user;
  }

  public async createByAccount(parameters: IRequestCreateUsers): Promise<IUser> {
    const user = await this.usersRepository.create({
      userName: parameters.userName,
      active: parameters.active,
    });
    return user;
  }
}

export default CreateUsersService;
