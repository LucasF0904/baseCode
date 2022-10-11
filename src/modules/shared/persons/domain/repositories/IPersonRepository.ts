import IPerson from '../interfaces/IPersons';
import ICreatePerson from '../interfaces/ICreatePersons';

interface IPersonRepository {
	findById(id: string): Promise<IPerson | undefined>;
	findByDocument(document: string): Promise<IPerson | undefined>;
	findAll(): Promise<IPerson[]>;
	create(data: ICreatePerson): Promise<IPerson>;
	save(person: IPerson): Promise<IPerson>;
	remove(id: string): Promise<void>;
}

export default IPersonRepository;
