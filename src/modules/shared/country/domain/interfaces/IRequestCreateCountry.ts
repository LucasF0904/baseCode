import { shortName } from "./ICountry";

interface IRequestCreateCountry {
	short_name?: shortName;
	long_name?: string;
	code?: string;
}

export default IRequestCreateCountry;