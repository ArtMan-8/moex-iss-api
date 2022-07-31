import { TAxiosResponse } from "src/api/interfaces";

import { IEventsDetailResponse } from "../responseTypes";

export interface IGetEventsDetailArgs {
	/** Номер мероприятия */
	eventId: number;
}

export type TGetEventsDetail = (
	args: IGetEventsDetailArgs,
) => Promise<TAxiosResponse<IEventsDetailResponse>>;
