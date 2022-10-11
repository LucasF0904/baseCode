import IUser from "@modules/user/domain/interfaces/IUser";
import Person from '@modules/shared/persons/infra/typeorm/entities/Person';
import Address from '@modules/shared/address/infra/typeorm/entities/Address';
import Phone from '@modules/shared/phone/infra/typeorm/entities/Phone';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
	ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Address, address => address.id)
	@JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
	address?: Address;

  @ManyToOne(() => Person, person => person.id)
	@JoinColumn({ name: 'person_id', referencedColumnName: 'id' })
	@Column({ name: 'person_id' })
	person: Person;
  
  @Column()
  email: string;

  @Column()
  password: string;


  @ManyToOne(() => Phone, phone => phone.id)
	@JoinColumn({ name: 'phone_id', referencedColumnName: 'id' })
	@Column({ name: 'phone_id' })
	phone?: Phone | undefined;

  @Column()
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default User;
