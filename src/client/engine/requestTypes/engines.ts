import { TAxiosResponse } from "src/api/interfaces";

import { IEnginesResponse } from "../responseTypes";

export type TGetEngines = () => Promise<TAxiosResponse<IEnginesResponse>>;
