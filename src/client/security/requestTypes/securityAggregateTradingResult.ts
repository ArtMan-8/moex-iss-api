import { TAxiosResponse } from "src/api/interfaces";

import { ISecurityAggregateTradingResultResponse } from "../responseTypes";

export interface IGetSecurityAggregateTradingResultParams {
	/**
	 * Дата за которую необходимо отобразить данные, в формате YYYY-MM-DD, или "today"
	 * По умолчанию - last
	 * */
	date?: "last" | string;
}

export interface IGetSecurityAggregateTradingResultArgs {
	/** Тикер бумаги */
	security: string;
	/** query-params */
	params?: IGetSecurityAggregateTradingResultParams;
}

export type TGetSecurityAggregateTradingResult = (
	args: IGetSecurityAggregateTradingResultArgs,
) => Promise<TAxiosResponse<ISecurityAggregateTradingResultResponse>>;
