import { IMetaDataItem, TData } from "src/types/interfaces";

enum IDescriptionColumns {
	Name = "name",
	Title = "title",
	Value = "value",
	Type = "type",
	SortOrder = "sort_order",
	IsHidden = "is_hidden",
	Precision = "precision",
}

enum IBoardsColumns {
	SecId = "secid",
	BoardId = "boardid",
	Title = "title",
	BoardGroupId = "board_group_id",
	MarketId = "market_id",
	Market = "market",
	EngineId = "engine_id",
	Engine = "engine",
	IsTraded = "is_traded",
	Decimals = "decimals",
	HistoryFrom = "history_from",
	HistoryTill = "history_till",
	ListedFrom = "listed_from",
	ListedTill = "listed_till",
	IsPrimary = "is_primary",
	CurrencyId = "currencyid",
}

export interface ISecuritySpecificationResponse {
	description: {
		metadata: {
			[key in keyof typeof IDescriptionColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IDescriptionColumns];
		data: TData;
	};
	boards: {
		metadata: {
			[key in keyof typeof IBoardsColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IBoardsColumns];
		data: TData;
	};
}
