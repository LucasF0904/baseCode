import IUsers from "@modules/user/domain/interfaces/IUser";
import User from "@modules/user/infra/typeorm/entities/User";
import ICreateUsers from "@modules/user/domain/interfaces/ICreateUsers";
import IUpdateUser from "../interfaces/IUpdateUser";

interface IUsersRepository {
  create(data: ICreateUsers): Promise<User>;  
  update(id: string, user: IUpdateUser): Promise<boolean>;
  delete(id: string): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<IUsers | undefined>;
  findByEmail(email: string): Promise<IUsers | undefined>;
}

export default IUsersRepository;
