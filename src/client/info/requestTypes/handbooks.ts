import { AxiosResponse } from "axios";

import { IHandbooksResponse } from "../responseTypes";

export type TGetHandbooks = () => Promise<AxiosResponse<IHandbooksResponse>>;
