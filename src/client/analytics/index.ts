import { AxiosInstance } from "axios";

import { IAnalyticsApi } from "./interfaces";
import {
	IGetCurvesParams,
	IGetCurvesSecurityArgs,
	IGetFutoiArgsParams,
	IGetFutoiSecurityArgs,
	IGetNetflow2,
	IGetNetflow2Params,
	IGetNetflow2Security,
	IGetNetflow2SecurityArgs,
	TGetCurves,
	TGetCurvesSecurity,
	TGetFutoi,
	TGetFutoiSecurity,
} from "./requestTypes";

export default class AnalyticsApi implements IAnalyticsApi {
	private api: AxiosInstance;

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	public getFutoi: TGetFutoi = async (params) => {
		return await this.api.get("/analyticalproducts/futoi/securities", {
			params,
		});
	};

	public geTGetFutoiSecurity: TGetFutoiSecurity = async ({
		security,
		params,
	}) => {
		return await this.api.get(
			`/analyticalproducts/futoi/securities/${security}`,
			{
				params,
			},
		);
	};

	public getNetflow2: IGetNetflow2 = async (params) => {
		return await this.api.get("/analyticalproducts/netflow2/securities", {
			params,
		});
	};

	public getNetflow2Security: IGetNetflow2Security = async ({
		security,
		params,
	}) => {
		return await this.api.get(
			`/analyticalproducts/netflow2/securities/${security}`,
			{
				params,
			},
		);
	};

	public getCurves: TGetCurves = async (params) => {
		return await this.api.get("/analyticalproducts/curves/securities", {
			params,
		});
	};

	public getCurvesSecurity: TGetCurvesSecurity = async ({
		security,
		params,
	}) => {
		return await this.api.get(
			`/analyticalproducts/curves/securities/${security}`,
			{
				params,
			},
		);
	};
}
