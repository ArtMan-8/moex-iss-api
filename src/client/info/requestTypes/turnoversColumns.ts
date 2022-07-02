import { AxiosResponse } from "axios";

import { ITurnoversColumnsResponse } from "../responseTypes";

export type TGetTurnoversColumns = () => Promise<
	AxiosResponse<ITurnoversColumnsResponse>
>;
