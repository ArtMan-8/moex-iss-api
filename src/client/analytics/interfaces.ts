import {
	IGetNetflow2,
	IGetNetflow2Security,
	TGetCurves,
	TGetCurvesSecurity,
	TGetFutoi,
	TGetFutoiSecurity,
} from "./requestTypes";

export interface IAnalyticsApi {
	/** Получить futoi */
	getFutoi: TGetFutoi;
	/** Получить конкретные futoi */
	geTGetFutoiSecurity: TGetFutoiSecurity;
	/** Получить netflow2 */
	getNetflow2: IGetNetflow2;
	/** Получить конкретные netflow2 */
	getNetflow2Security: IGetNetflow2Security;
	/** Получить будущие ставки для ценообразования нестандартных инструментов (деривативов) */
	getCurves: TGetCurves;
	/** Получить будущие ставки для ценообразования нестандартных инструментов (деривативов), по конкретному инструменту */
	getCurvesSecurity: TGetCurvesSecurity;
}
