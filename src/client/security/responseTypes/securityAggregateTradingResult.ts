import { IMetaDataItem, TData } from "src/types/interfaces";

enum IAggregatesColumns {
	MarketName = "market_name",
	MarketTitle = "market_title",
	Engine = "engine",
	Tradedate = "tradedate",
	SecId = "secid",
	Value = "value",
	Volume = "volume",
	NumTrades = "numtrades",
	UpdatedAt = "updated_at",
}

enum IAggregatesDatesColumns {
	From = "from",
	Till = "till",
}

export interface ISecurityAggregateTradingResultResponse {
	aggregates: {
		metadata: {
			[key in keyof typeof IAggregatesColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IAggregatesColumns];
		data: TData;
	};
	"agregates.dates": {
		metadata: {
			[key in keyof typeof IAggregatesDatesColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IAggregatesDatesColumns];
		data: TData;
	};
}
