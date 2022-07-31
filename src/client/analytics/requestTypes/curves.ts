import { TAxiosResponse } from "src/api/interfaces";

import { ICurvesResponse } from "../responseTypes";

export interface IGetCurvesParams {
	/**
	 * Дата в формате YYYY-MM-DD, или "today"
	 * По умолчанию - today
	 * */
	date?: "today" | string;
	time?: "string";
}

export type TGetCurves = (
	/** query-params */
	params?: IGetCurvesParams,
) => Promise<TAxiosResponse<ICurvesResponse>>;
