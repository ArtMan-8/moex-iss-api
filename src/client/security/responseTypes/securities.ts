import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	SecId = "secid",
	Shortname = "shortname",
	RegNumber = "regnumber",
	Name = "name",
	ISIN = "isin",
	IsTraded = "is_traded",
	EmitentId = "emitent_id",
	EmitentTitle = "emitent_title",
	EmitentInn = "emitent_inn",
	EmitentOkpo = "emitent_okpo",
	GosReg = "gosreg",
	Type = "type",
	Group = "group",
	PrimaryBoardId = "primary_boardid",
	MarketpriceBoardId = "marketprice_boardid",
}

export interface ISecuritiesResponse {
	securities: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
}
