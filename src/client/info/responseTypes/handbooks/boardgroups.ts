import { IMetaDataItem } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	TradeEngineId = "trade_engine_id",
	TradeEngineName = "trade_engine_name",
	TradeEngineTitle = "trade_engine_title",
	MarketId = "market_id",
	MarketName = "market_name",
	Name = "name",
	Title = "title",
	IsDefault = "is_default",
	BoardGroupId = "board_group_id",
	IsTraded = "is_traded",
	IsOrderDriven = "is_order_driven",
	Category = "category",
}

export interface IHandbooksBoardGroupsResponse {
	metadata: {
		[key in keyof typeof IColumns]: IMetaDataItem;
	};
	columns: [keyof typeof IColumns];
	data: (string | number | null)[][];
}
