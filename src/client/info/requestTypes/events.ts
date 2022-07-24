import { TAxiosResponse } from "src/api/interfaces";

import { IEventsResponse } from "../responseTypes";

export type TGetEvents = (
	/**
	 * Смещение начала
	 * По умолчанию - 0
	 * */
	start?: number,
) => Promise<TAxiosResponse<IEventsResponse>>;
