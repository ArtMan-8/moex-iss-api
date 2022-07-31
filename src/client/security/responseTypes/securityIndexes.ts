import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	SecId = "SECID",
	Shortname = "SHORTNAME",
	From = "FROM",
	Till = "TILL",
}

export interface ISecurityIndexesResponse {
	indices: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
}
