import ICountry, { shortName } from '@modules/shared/country/domain/interfaces/ICountry';
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity('country')
class Country implements ICountry {
    @PrimaryGeneratedColumn('uuid')
	id: string;

    @Column({
		type: 'enum',
		enum: shortName,
	})
	short_Name: shortName;

	@Column()
	long_Name: string;	
	
	@Column()
	code: string;
    
    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@DeleteDateColumn()
	deleted_at: Date;
}

export default Country;
