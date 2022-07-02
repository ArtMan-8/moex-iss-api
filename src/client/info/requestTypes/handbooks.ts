import { TAxiosResponse } from "src/api/interfaces";

import { IHandbooksResponse } from "../responseTypes";

export type TGetHandbooks = () => Promise<TAxiosResponse<IHandbooksResponse>>;
