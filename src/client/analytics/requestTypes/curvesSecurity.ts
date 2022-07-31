import { TAxiosResponse } from "src/api/interfaces";

import { ICurvesResponse } from "../responseTypes";

export type TCurvesSecurity =
	| "CBR"
	| "central"
	| "CHF_CHF"
	| "CHF_EUR"
	| "CHF_FRA"
	| "CHF_IRS"
	| "CHF_LIBOR"
	| "CHF_RUB"
	| "CHF_SARON"
	| "CHF_SARON_OIS"
	| "CHF_USD"
	| "CNY_FRA"
	| "CNY_IRS"
	| "EUR_CHF"
	| "EUR_ESTR"
	| "EUR_ESTR_OIS"
	| "EUR_EUR"
	| "EUR_EURIBOR"
	| "EUR_FRA"
	| "EUR_IRS"
	| "EUR_RUB"
	| "EUR_USD"
	| "EUR_USD_XCCY3L"
	| "fixing"
	| "RUB_CHF"
	| "RUB_EUR"
	| "RUB_FRA"
	| "RUB_IRS3M"
	| "RUB_KEYRATE"
	| "RUB_KEYRATE_IRS"
	| "RUB_MOSPRIME"
	| "RUB_OIS"
	| "RUB_OISFX"
	| "RUB_RUB"
	| "RUB_RUONIA"
	| "RUB_RUSFAR"
	| "RUB_RUSFAR_3M"
	| "RUB_RUSFAR_OIS"
	| "RUB_RUSFAR3M_FRA"
	| "RUB_RUSFAR3M_IRS"
	| "RUB_USD"
	| "RUB_XCCY3L"
	| "swap_pp"
	| "USD_CHF"
	| "USD_EUR"
	| "USD_FRA"
	| "USD_IRS3L"
	| "USD_LIBOR"
	| "USD_RUB"
	| "USD_SOFR"
	| "USD_SOFR_OIS"
	| "USD_USD";

export interface IGetCurvesSecurityParams {
	/**
	 * Дата в формате YYYY-MM-DD начиная с которой отдаются данные.
	 * Обратите внимание, что для данного запроса нет постраничной навигации.
	 * вам необходимо будет изменять параметр &from на дату следующую после полученных вами данных.
	 * Количество отдаваемых записей в одном блоке ограничено 1000.
	 */
	from?: string;
	/**
	 * Дата в формате YYYY-MM-DD которой будет заканчиваться интервал.
	 * Данный параметр должен быть больше или равен параметру from.
	 */
	till?: string;
}

export interface IGetCurvesSecurityArgs {
	/** secid */
	security: TCurvesSecurity | string;
	/** query-perams */
	params?: IGetCurvesSecurityParams;
}

export type TGetCurvesSecurity = (
	args: IGetCurvesSecurityArgs,
) => Promise<TAxiosResponse<ICurvesResponse>>;
