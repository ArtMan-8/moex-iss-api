import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Tag = "tag",
	Title = "title",
	From = "from",
	ModifiedAt = "modified_at",
}

enum IColumnsCursor {
	Index = "INDEX",
	Total = "TOTAL",
	Pagesize = "PAGESIZE",
}

export interface IEventsResponse {
	events: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
	"events.cursor": {
		metadata: {
			[key in keyof typeof IColumnsCursor]: IMetaDataItem;
		};
		columns: [keyof typeof IColumnsCursor];
		data: number[][];
	};
}
