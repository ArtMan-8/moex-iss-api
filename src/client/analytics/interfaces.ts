import {
	IGetNetflow2,
	IGetNetflow2Security,
	TGetFutoi,
	TGetFutoiSecurity,
} from "./requestTypes";

export interface IAnalyticsApi {
	getFutoi: TGetFutoi;
	geTGetFutoiSecurity: TGetFutoiSecurity;
	getNetflow2: IGetNetflow2;
	getNetflow2Security: IGetNetflow2Security;
}
