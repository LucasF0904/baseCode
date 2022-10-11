import IState, {
  shortName,
} from "@modules/shared/states/domain/interfaces/IState";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("state")
class State implements IState {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
		type: 'enum',
		enum: shortName,
	})
  short_name: shortName;

  @Column()
  long_name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
export default State;
