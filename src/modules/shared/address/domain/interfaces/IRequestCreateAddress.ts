import ICity from "@modules/shared/cities/domain/interfaces/ICity";

interface IRequestCreateAddress {
	fullAddress?: string;
	complement?: string;
	district?: string;
	city?: ICity;
	postalCode?: string;
	geoLocation?: string;
}

export default IRequestCreateAddress;