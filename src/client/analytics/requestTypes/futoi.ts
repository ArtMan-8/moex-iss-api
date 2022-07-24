import { TAxiosResponse } from "src/api/interfaces";

import { IFutoiResponse } from "../responseTypes";

export interface IGetFutoiArgs {
	/**
	 * Дата в формате YYYY-MM-DD, или "today"
	 * По умолчанию - today
	 * */
	date?: "today" | string;
	/**
	 * Последний срез за день, "1" - включить
	 * По умолчанию - 0
	 * */
	latest?: 0 | 1;
	/**
	 * По умолчанию - full
	 */
	table_type?: "full" | string;
}

export type TGetFutoi = (
	args?: IGetFutoiArgs,
) => Promise<TAxiosResponse<IFutoiResponse>>;
