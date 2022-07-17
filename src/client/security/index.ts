import { AxiosInstance } from "axios";

import { ISecurityApi } from "./interfaces";
import { TGetSecurityGroups } from "./requestTypes";

export default class SecurityApi implements ISecurityApi {
	private api: AxiosInstance;

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	public getSecurityGroups: TGetSecurityGroups = async (options = {}) => {
		const { security, args } = options;

		const params = {
			hide_inactive: args?.hide_inactive || 0,
			trade_engine: args?.trade_engine,
		};

		const path = security
			? `/securitygroups/${security}`
			: "/securitygroups";

		return await this.api.get(path, {
			params,
		});
	};
}
