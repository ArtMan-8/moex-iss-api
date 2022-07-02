import { TAxiosResponse } from "src/api/interfaces";

import { ICurvesResponse, TCurvesSecurity } from "../responseTypes";

export interface IGetCurvesSecurityArgs {
	/**
	 * Дата в формате YYYY-MM-DD начиная с которой отдаются данные.
	 * Обратите внимание, что для данного запроса нет постраничной навигации. вам необходимо будет изменять параметр &from на дату следующую после полученных вами данных.
	 * Количество отдаваемых записей в одном блоке ограничено 1000.
	 */
	from?: string;
	/**
	 * Дата в формате YYYY-MM-DD которой будет заканчиваться интервал.
	 * Данный параметр должен быть больше или равен параметру from.
	 */
	till?: string;
}

export type TGetCurvesSecurity = (
	security: TCurvesSecurity | string,
	args?: IGetCurvesSecurityArgs,
) => Promise<TAxiosResponse<ICurvesResponse>>;
