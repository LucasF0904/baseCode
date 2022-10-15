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
      address: parameters.address,
      person: parameters.person,
      email: parameters.email,
      password: parameters.password,
      phone: parameters.phone,
      active: parameters.active,
    });
    return user;
  }
}

export default CreateUsersService;
