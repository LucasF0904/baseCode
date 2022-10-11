import Person from '@modules/shared/persons/infra/typeorm/entities/Person';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import Phone from '@modules/shared/phone/infra/typeorm/entities/Phone';

interface IRequestUpdateAccount {
  id?: string;
  address?: Address;
  person?: Person;  
  email?: string;
  password?: string;
  phone?: Phone;
  active?: boolean;
}

export default IRequestUpdateAccount;
