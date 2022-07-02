import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	TradeEngineId = "trade_engine_id",
	TradeEngineName = "trade_engine_name",
	TradeEngineTitle = "trade_engine_title",
	MarketName = "market_name",
	MarketTitle = "market_title",
	MarketId = "market_id",
	Marketplace = "marketplace",
	IsOTC = "is_otc",
}

export interface IHandbooksMarketsResponse {
	metadata: {
		[key in keyof typeof IColumns]: IMetaDataItem;
	};
	columns: [keyof typeof IColumns];
	data: TData;
}
