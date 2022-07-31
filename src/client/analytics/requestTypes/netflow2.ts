import { TAxiosResponse } from "src/api/interfaces";

import { INetflow2Response } from "../responseTypes";

export interface IGetNetflow2Params {
	/**
	 * Дата в формате YYYY-MM-DD, или "today"
	 * По умолчанию - today
	 * */
	date?: "today" | string;
}

export type IGetNetflow2 = (
	/** query-params */
	params?: IGetNetflow2Params,
) => Promise<TAxiosResponse<INetflow2Response>>;
