import { AxiosResponse } from "axios";

import { INewsDetailResponse } from "../responseTypes";

export type TGetNewsDetail = (
	/** номер новости */
	newsId: number,
) => Promise<AxiosResponse<INewsDetailResponse>>;
