import { TAxiosResponse } from "src/api/interfaces";

import { ITurnoversResponse } from "../responseTypes";

export interface IGetTurnoversParams {
	/**
	 * Обороты за вечернюю сессию
	 * По умолчанию - 0
	 * */
	is_tonight_session?: 0 | 1;
	/**
	 * Обороты за конкретную дату,
	 * в формате YYYY-MM-DD, или "today"
	 * По умолчанию - today
	 * */
	date?: "today" | string;
}

export type TGetTurnovers = (
	/** query-params */
	params?: IGetTurnoversParams,
) => Promise<TAxiosResponse<ITurnoversResponse>>;
