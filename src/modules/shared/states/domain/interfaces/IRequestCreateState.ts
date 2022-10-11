import { shortName } from "./IState";

interface IRequestCreateState {
	short_name?: shortName;
	long_name?: string;
}

export default IRequestCreateState;