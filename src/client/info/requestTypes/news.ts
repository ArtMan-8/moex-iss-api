import { TAxiosResponse } from "src/api/interfaces";

import { INewsResponse } from "../responseTypes";

export interface IGetNewsParams {
	/**
	 * Смещение начала
	 * По умолчанию - 0
	 * */
	start?: number;
}

export type TGetNews = (
	/** query-params */
	params?: IGetNewsParams,
) => Promise<TAxiosResponse<INewsResponse>>;
