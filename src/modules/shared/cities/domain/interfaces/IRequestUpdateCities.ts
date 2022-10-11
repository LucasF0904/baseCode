import IState from "@modules/shared/states/domain/interfaces/IState";

interface IRequestUpdateCities {
  id?: string;
  state?: IState;
  code?: string;
  name?: string;
}

export default IRequestUpdateCities;
