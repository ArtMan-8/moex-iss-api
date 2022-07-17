import { IMetaDataItem, TData } from "src/types/interfaces";

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
		columns: [keyof typeof IColumns] | ["ERROR_MESSAGE"];
		data: TData;
	};
}
