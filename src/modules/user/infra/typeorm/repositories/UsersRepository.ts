import ICreateUser from "@modules/user/domain/interfaces/ICreateUsers";
import IUpdateUser from "@modules/user/domain/interfaces/IUpdateUser";
import IUser from "@modules/user/domain/interfaces/IUser";
import IUsersRepository from "@modules/user/domain/repositories/IUsersRepository";
import User from "@modules/user/infra/typeorm/entities/User";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(parameters: ICreateUser): Promise<User> {
    const user = this.ormRepository.create({
      id: parameters.id,
      address: parameters.address,
      person: parameters.person,
      email: parameters.email,
      password: parameters.password,
      phone: parameters.phone,
      active: parameters.active,
      created_at: parameters.created_at,
      updated_at: parameters.updated_at,
      deleted_at: parameters.deleted_at,
    });
    await this.ormRepository.save(user);

    return user;
  }

  public async update(id: string, user: IUpdateUser): Promise<boolean> {
    await this.ormRepository.update(id, user);

    return true;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findAll(): Promise<User[]> {
    const users = this.ormRepository.find();

    return users;
  }

  public async findById(id: string): Promise<IUser | undefined> {
    const user = this.ormRepository.findOne(id);

    return user;
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
		const user = this.ormRepository.findOne({
			where: {
				email,
			},
		});

		if (!user) {
			return user;
		}

		return user;
	}
}

export default UsersRepository;
