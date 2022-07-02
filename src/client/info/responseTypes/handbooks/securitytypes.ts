import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	TradeEngineId = "trade_engine_id",
	TradeEngineName = "trade_engine_name",
	TradeEngineTitle = "trade_engine_title",
	SecurityTypeName = "security_type_name",
	SecurityTypeTitle = "security_type_title",
	SecurityGroupName = "security_group_name",
}

export interface IHandbooksSecurityTypesResponse {
	metadata: {
		[key in keyof typeof IColumns]: IMetaDataItem;
	};
	columns: [keyof typeof IColumns];
	data: TData;
}
