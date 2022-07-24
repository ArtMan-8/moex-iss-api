import { TAxiosResponse } from "src/api/interfaces";

import { INewsResponse } from "../responseTypes";

export type TGetNews = (
	/**
	 * Смещение начала
	 * По умолчанию - 0
	 * */
	start?: number,
) => Promise<TAxiosResponse<INewsResponse>>;
