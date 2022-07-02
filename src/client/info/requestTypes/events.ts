import { AxiosResponse } from "axios";

import { IEventsResponse } from "../responseTypes";

export type TGetEvents = (
	/** смещение начала */
	start?: number,
) => Promise<AxiosResponse<IEventsResponse>>;
