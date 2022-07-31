import { TAxiosResponse } from "src/api/interfaces";

import { IEventsResponse } from "../responseTypes";

export interface IGetEventsParams {
	/**
	 * Смещение начала
	 * По умолчанию - 0
	 * */
	start?: number;
}

export type TGetEvents = (
	/** query-params */
	params?: IGetEventsParams,
) => Promise<TAxiosResponse<IEventsResponse>>;
