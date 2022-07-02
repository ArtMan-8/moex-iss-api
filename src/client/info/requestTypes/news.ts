import { TAxiosResponse } from "src/api/interfaces";

import { INewsResponse } from "../responseTypes";

export type TGetNews = (
	/** смещение начала */
	start?: number,
) => Promise<TAxiosResponse<INewsResponse>>;
