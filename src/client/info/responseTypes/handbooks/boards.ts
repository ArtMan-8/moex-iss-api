import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	BoardGroupId = "board_group_id",
	EngineId = "engine_id",
	MarketId = "market_id",
	BoardId = "boardid",
	BoardTitle = "board_title",
	IsTraded = "is_traded",
	HasCandles = "has_candles",
	IsPrimary = "is_primary",
}

export interface IHandbooksBoardsResponse {
	metadata: {
		[key in keyof typeof IColumns]: IMetaDataItem;
	};
	columns: [keyof typeof IColumns];
	data: TData;
}
