import { AxiosResponse } from "axios";

export type TAxiosResponse<T = any, D = any> = AxiosResponse<T, D> & {
	issError?: string | null;
};
