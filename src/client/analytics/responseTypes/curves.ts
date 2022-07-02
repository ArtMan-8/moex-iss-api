import { IMetaDataItem } from "src/types/interfaces";

enum IColumns {
	TradeDate = "tradedate",
	TradeTime = "tradetime",
	Group = "group",
	SecId = "secid",
	Term = "term",
	Value = "value",
	SysTime = "systime",
}

export interface ICurvesResponse {
	curves: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: (string | number)[][];
	};
}

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
