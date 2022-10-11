import { shortName } from "./ICountry";

interface IUpdateCountry {
  id?: string;
  short_name?: shortName;
  long_name?: string;
  code?: string;
}

export default IUpdateCountry;
