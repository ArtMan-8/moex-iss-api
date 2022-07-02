import { AxiosResponse } from "axios";

import { IEventsDetailResponse } from "../responseTypes";

export type TGetEventsDetail = (
	/** номер события */
	eventId: number,
) => Promise<AxiosResponse<IEventsDetailResponse>>;
