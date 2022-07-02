import { TAxiosResponse } from "src/api/interfaces";

import { IEventsResponse } from "../responseTypes";

export type TGetEvents = (
	/** смещение начала */
	start?: number,
) => Promise<TAxiosResponse<IEventsResponse>>;
