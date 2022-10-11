import IState from "@modules/shared/states/domain/interfaces/IState";

interface IUpdateCities {
  id?: string;
  state?: IState;
  code?: string;
  name?: string;
}

export default IUpdateCities;
