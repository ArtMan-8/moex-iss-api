import { AxiosInstance } from "axios";

import { IEngineApi } from "./interfaces";
import { TGetEngineDescription } from "./requestTypes/engineDescription";
import { TGetEngines } from "./requestTypes/engines";

export default class EngineApi implements IEngineApi {
	private api: AxiosInstance;

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	public getEngines: TGetEngines = async () => {
		return await this.api.get("/engines");
	};
	public getEngineDescription: TGetEngineDescription = async (args) => {
		return await this.api.get(`/engines/${args.engine}`);
	};
}
