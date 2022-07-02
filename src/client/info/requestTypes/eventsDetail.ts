import { TAxiosResponse } from "src/api/interfaces";

import { IEventsDetailResponse } from "../responseTypes";

export type TGetEventsDetail = (
	/** номер события */
	eventId: number,
) => Promise<TAxiosResponse<IEventsDetailResponse>>;
