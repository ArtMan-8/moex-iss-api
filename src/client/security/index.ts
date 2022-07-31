import { AxiosInstance } from "axios";

import { ISecurityApi } from "./interfaces";
import {
	TGetSecurities,
	TGetSecurityGroupCollection,
	TGetSecurityGroupCollectionInfo,
	TGetSecurityGroups,
	TGetSecuritySpecification,
	TGetSecurityTypes,
} from "./requestTypes";

export default class SecurityApi implements ISecurityApi {
	private api: AxiosInstance;

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	public getSecurityTypes: TGetSecurityTypes = async (args) => {
		const path = args?.securitytype
			? `/securitytypes/${args.securitytype}`
			: "/securitytypes";

		return await this.api.get(path);
	};

	public getSecurityGroups: TGetSecurityGroups = async (args) => {
		const path = args?.securitygroup
			? `/securitygroups/${args.securitygroup}`
			: "/securitygroups";

		return await this.api.get(path, {
			params: args?.params,
		});
	};

	public getSecurityGroupCollection: TGetSecurityGroupCollection = async ({
		securitygroup,
		collection,
	}) => {
		const path = collection
			? `/securitygroups/${securitygroup}/collections/${collection}`
			: `/securitygroups/${securitygroup}/collections`;

		return await this.api.get(path);
	};

	public getSecurityGroupCollectionInfo: TGetSecurityGroupCollectionInfo =
		async ({ securitygroup, collection, params }) => {
			const path = `/securitygroups/${securitygroup}/collections/${collection}/securities`;

			return await this.api.get(path, {
				params,
			});
		};

	/*----------------------------------------*/

	public getSecurities: TGetSecurities = async (params) => {
		return await this.api.get("/securities", {
			params,
		});
	};

	public getSecuritySpecification: TGetSecuritySpecification = async ({
		security,
		params,
	}) => {
		return await this.api.get(`/securities/${security}`, {
			params,
		});
	};
}
