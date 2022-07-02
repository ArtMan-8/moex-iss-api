import { AxiosInstance } from "axios";

import { IAnalyticsApi } from "./interfaces";
import {
	IGetFutoiArgs,
	IGetFutoiSecurityArgs,
	TGetFutoi,
	TGetFutoiSecurity,
} from "./requestTypes";

export default class AnalyticsApi implements IAnalyticsApi {
	private axios: AxiosInstance;

	constructor(axios: AxiosInstance) {
		this.axios = axios;
	}

	public getFutoi: TGetFutoi = async (args) => {
		const params: IGetFutoiArgs = {
			date: args?.date || "today",
			latest: args?.latest || "0",
			table_type: args?.table_type || "full",
		};

		return await this.axios.get("/analyticalproducts/futoi/securities", {
			params,
		});
	};

	public geTGetFutoiSecurity: TGetFutoiSecurity = async (security, args) => {
		const params: IGetFutoiSecurityArgs = {
			from: args?.from || "",
			till: args?.till || "",
			latest: args?.latest || "0",
		};

		return await this.axios.get(
			`/analyticalproducts/futoi/securities/${security}`,
			{
				params,
			},
		);
	};
}
