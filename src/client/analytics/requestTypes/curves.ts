import { AxiosResponse } from "axios";

import { ICurvesResponse } from "../responseTypes";

export interface IGetCurvesArgs {
	/** Дата в формате YYYY-MM-DD, или "today" */
	date?: "today" | string;
	time?: "string";
}

export type TGetCurves = (
	args?: IGetCurvesArgs,
) => Promise<AxiosResponse<ICurvesResponse>>;
