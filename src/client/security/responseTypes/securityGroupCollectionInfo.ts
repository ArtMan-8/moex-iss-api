import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumnsCursor {
	Index = "INDEX",
	Total = "TOTAL",
	Pagesize = "PAGESIZE",
}

// TODO: типизировать или нет,
// ооочень много типов
export interface ISecurityGroupCollectionInfoResponse {
	securities: {
		metadata: {
			[key: string]: IMetaDataItem;
		};
		columns: string[];
		data: TData;
	};
	"securities.cursor": {
		metadata: {
			[key in keyof typeof IColumnsCursor]: IMetaDataItem;
		};
		columns: [keyof typeof IColumnsCursor];
		data: number[][];
	};
}
