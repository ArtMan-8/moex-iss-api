import { TAxiosResponse } from "src/api/interfaces";

import { ITurnoversColumnsResponse } from "../responseTypes";

export type TGetTurnoversColumns = () => Promise<
	TAxiosResponse<ITurnoversColumnsResponse>
>;
