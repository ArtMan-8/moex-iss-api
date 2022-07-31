import { TAxiosResponse } from "src/api/interfaces";

import { ISecurityIndexesResponse } from "../responseTypes";

export interface IGetSecurityIndexesParams {
	/**
	 * Получить индексы в базе которого бумага находится прямо сейчас.
	 * По умолчанию - 0
	 * */
	only_actual?: number;
}

export interface IGetSecurityIndexesArgs {
	/** Тикер бумаги */
	security: string;
	/** query-params */
	params?: IGetSecurityIndexesParams;
}

export type TGetSecurityIndexes = (
	args: IGetSecurityIndexesArgs,
) => Promise<TAxiosResponse<ISecurityIndexesResponse>>;
