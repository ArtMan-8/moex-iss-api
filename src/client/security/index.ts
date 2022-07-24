import { AxiosInstance } from "axios";

import { ISecurityApi } from "./interfaces";
import {
	IGetSecuritiesInfoParams,
	TGetSecuritiesInfo,
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
		collection,
	) => {
		const path = collection
			? `/securitygroups/${securitygroup}/collections/${collection}`
			: `/securitygroups/${securitygroup}/collections`;

		return await this.api.get(path);
	};

	public getSecurityTypes: TGetSecurityTypes = async (securitytype) => {
		const path = securitytype
			? `/securitytypes/${securitytype}`
			: "/securitytypes";

		return await this.api.get(path);
	};

	public getSecuritiesInfo: TGetSecuritiesInfo = async ({
		securitygroup,
		collection,
		args,
	}) => {
		const path = `/securitygroups/${securitygroup}/collections/${collection}/securities`;

		const params: IGetSecuritiesInfoParams = {
			sort_order: args?.sort_order || "secid",
			sort_order_desc: args?.sort_order_desc || "asc",
			start: args?.start || 0,
		};

		return await this.api.get(path, {
			params,
		});
	};
}
