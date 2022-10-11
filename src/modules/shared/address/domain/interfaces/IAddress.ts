import ICity from '@modules/shared/cities/domain/interfaces/ICity';

interface IAddress {
    id: string;
	fullAddress: string;
	complement: string;
	district: string;
	city: ICity;
	postalCode: string;
	geoLocation: string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date;
}

export default IAddress;