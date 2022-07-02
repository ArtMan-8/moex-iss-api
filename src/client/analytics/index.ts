import { AxiosInstance } from "axios";

import { IAnalyticsApi } from "./interfaces";
import {
	IGetCurvesArgs,
	IGetCurvesSecurityArgs,
	IGetFutoiArgs,
	IGetFutoiSecurityArgs,
	IGetNetflow2,
	IGetNetflow2Args,
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

	public getFutoi: TGetFutoi = async (args) => {
		const params: IGetFutoiArgs = {
			date: args?.date || "today",
			latest: args?.latest || "0",
			table_type: args?.table_type || "full",
		};

		return await this.api.get("/analyticalproducts/futoi/securities", {
			params,
		});
	};

	public geTGetFutoiSecurity: TGetFutoiSecurity = async (security, args) => {
		const params: IGetFutoiSecurityArgs = {
			from: args?.from,
			till: args?.till,
			latest: args?.latest || "0",
		};

		return await this.api.get(
			`/analyticalproducts/futoi/securities/${security}`,
			{
				params,
			},
		);
	};

	public getNetflow2: IGetNetflow2 = async (args) => {
		const params: IGetNetflow2Args = {
			date: args?.date || "today",
		};

		return await this.api.get("/analyticalproducts/netflow2/securities", {
			params,
		});
	};

	public getNetflow2Security: IGetNetflow2Security = async (
		security,
		args,
	) => {
		const params: IGetNetflow2SecurityArgs = {
			from: args?.from,
			till: args?.till,
		};

		return await this.api.get(
			`/analyticalproducts/netflow2/securities/${security}`,
			{
				params,
			},
		);
	};

	public getCurves: TGetCurves = async (args) => {
		const params: IGetCurvesArgs = {
			date: args?.date || "today",
			time: args?.time,
		};

		return await this.api.get("/analyticalproducts/curves/securities", {
			params,
		});
	};

	public getCurvesSecurity: TGetCurvesSecurity = async (security, args) => {
		const params: IGetCurvesSecurityArgs = {
			from: args?.from,
			till: args?.till,
		};

		return await this.api.get(
			`/analyticalproducts/curves/securities/${security}`,
			{
				params,
			},
		);
	};
}
