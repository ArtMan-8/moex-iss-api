import { AxiosResponse } from "axios";

import { IFutoiResponse } from "../responseTypes";

export interface IGetFutoiArgs {
	/** Дата в формате YYYY-MM-DD, или "today" */
	date?: "today" | string;
	/** Последний срез за день, "1" - включить */
	latest?: 0 | 1;
	table_type?: "full" | string;
}

export type TGetFutoi = (
	args?: IGetFutoiArgs,
) => Promise<AxiosResponse<IFutoiResponse>>;
