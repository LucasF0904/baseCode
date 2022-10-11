import Person from '@modules/shared/persons/infra/typeorm/entities/Person';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import Phone from '@modules/shared/phone/infra/typeorm/entities/Phone';

interface IUser {
  id: string;
  address?: Address;
  person?: Person;
  email: string;
  password: string;
  phone?: Phone;
  active: boolean;
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export default IUser;
