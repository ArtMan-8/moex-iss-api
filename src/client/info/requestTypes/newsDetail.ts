import { TAxiosResponse } from "src/api/interfaces";

import { INewsDetailResponse } from "../responseTypes";

export interface IGetNewsDetailArgs {
	/** номер новости */
	newsId: number;
}

export type TGetNewsDetail = (
	/** query-params */
	args: IGetNewsDetailArgs,
) => Promise<TAxiosResponse<INewsDetailResponse>>;
