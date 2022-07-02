import { TAxiosResponse } from "src/api/interfaces";

import { ITurnoversResponse } from "../responseTypes";

export interface IGetTurnoversArgs {
	/** обороты за вечернюю сессию */
	isToNight?: 0 | 1;
	/** обороты за конкретную дату, в формате YYYY-MM-DD, или "today" */
	date?: "today" | string;
}

export type TGetTurnovers = (
	args?: IGetTurnoversArgs,
) => Promise<TAxiosResponse<ITurnoversResponse>>;
