import { TAxiosResponse } from "src/api/interfaces";
import { EEngines } from "src/types/handbook";

import { IEngineDecriptionResponse } from "../responseTypes";

export interface IGetEngineDescriptionArgs {
	/** Торговая система  */
	engine: EEngines;
}
export type TGetEngineDescription = (
	args: IGetEngineDescriptionArgs,
) => Promise<TAxiosResponse<IEngineDecriptionResponse>>;
