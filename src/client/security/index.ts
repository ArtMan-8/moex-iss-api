import { AxiosInstance } from "axios";

import { ISecurityApi } from "./interfaces";
import {
	TGetSecurityGroupCollection,
	TGetSecurityGroups,
	TGetSecurityTypes,
} from "./requestTypes";

export default class SecurityApi implements ISecurityApi {
	private api: AxiosInstance;

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	public getSecurityGroups: TGetSecurityGroups = async (options = {}) => {
		const { securitygroup, args } = options;

		const params = {
			hide_inactive: args?.hide_inactive || 0,
			trade_engine: args?.trade_engine,
		};

		const path = securitygroup
			? `/securitygroups/${securitygroup}`
			: "/securitygroups";

		return await this.api.get(path, {
			params,
		});
	};

	public getSecurityGroupCollection: TGetSecurityGroupCollection = async (
		securitygroup,
	) => {
		const path = `/securitygroups/${securitygroup}/collections`;

		return await this.api.get(path);
	};

	public getSecurityTypes: TGetSecurityTypes = async (securitytype) => {
		const path = securitytype
			? `/securitytypes/${securitytype}`
			: "/securitytypes";

		return await this.api.get(path);
	};
}
