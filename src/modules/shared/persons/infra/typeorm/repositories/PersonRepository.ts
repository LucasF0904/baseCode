import { getRepository, Repository } from 'typeorm';
import IPerson from '@modules/shared/persons/domain/interfaces/IPersons';
import ICreatePerson from '@modules/shared/persons/domain/interfaces/ICreatePersons';
import IPersonRepository from '@modules/shared/persons/domain/repositories/IPersonRepository';
import Person from '../entities/Person';

class PersonRepository implements IPersonRepository {
	private ormRepository: Repository<Person>;

	constructor() {
		this.ormRepository = getRepository(Person);
	}

	public async findById(id: string): Promise<IPerson | undefined> {
		const person = this.ormRepository.findOne(id);

		return person;
	}

	public async findByDocument(document: string): Promise<IPerson | undefined> {
		const person = this.ormRepository.findOne({
			where: {
				document,
			},
		});

		return person;
	}

	public async create(parameters: ICreatePerson): Promise<IPerson> {
		const newPerson = this.ormRepository.create({
			name: parameters.name,
			birthdate: parameters.birthdate,
			gender: parameters.gender,
			cpf: parameters.cpf,
			passport: parameters.passport,
		});

		await this.ormRepository.save(newPerson);

		return newPerson;
	}

	public async save(person: IPerson): Promise<IPerson> {
		await this.ormRepository.save(person);

		return person;
	}

	public async remove(id: string): Promise<void> {
		await this.ormRepository.delete(id);
	}

	public async findAll(): Promise<IPerson[]> {
		const person = this.ormRepository.find();

		return person;
	}
}

export default PersonRepository;
