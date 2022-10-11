import { shortName } from "./ICountry";

interface IRequestUpdateCountry {
  id?: string;
  short_name?: shortName;
  long_name?: string;
  code?: string;
}

export default IRequestUpdateCountry;
