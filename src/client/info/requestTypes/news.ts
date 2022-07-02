import { AxiosResponse } from "axios";

import { INewsResponse } from "../responseTypes";

export type TGetNews = (
	/** смещение начала */
	start?: number,
) => Promise<AxiosResponse<INewsResponse>>;
