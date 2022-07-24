import { TAxiosResponse } from "src/api/interfaces";

import { ICurvesResponse } from "../responseTypes";

export interface IGetCurvesArgs {
	/**
	 * Дата в формате YYYY-MM-DD, или "today"
	 * По умолчанию - today
	 * */
	date?: "today" | string;
	time?: "string";
}

export type TGetCurves = (
	args?: IGetCurvesArgs,
) => Promise<TAxiosResponse<ICurvesResponse>>;
