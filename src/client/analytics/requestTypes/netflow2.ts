import { AxiosResponse } from "axios";

import { INetflow2Response } from "../responseTypes";

export interface IGetNetflow2Args {
	/** Дата в формате YYYY-MM-DD, или "today" */
	date?: "today" | string;
}

export type IGetNetflow2 = (
	args?: IGetNetflow2Args,
) => Promise<AxiosResponse<INetflow2Response>>;
