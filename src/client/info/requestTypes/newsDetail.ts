import { TAxiosResponse } from "src/api/interfaces";

import { INewsDetailResponse } from "../responseTypes";

export type TGetNewsDetail = (
	/** номер новости */
	newsId: number,
) => Promise<TAxiosResponse<INewsDetailResponse>>;
