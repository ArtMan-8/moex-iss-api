import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Tag = "tag",
	Title = "title",
	PublishedAt = "published_at",
	ModifiedAt = "modified_at",
}

enum IColumnsCursor {
	Index = "INDEX",
	Total = "TOTAL",
	Pagesize = "PAGESIZE",
}

export interface INewsResponse {
	sitenews: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
	"sitenews.cursor": {
		metadata: {
			[key in keyof typeof IColumnsCursor]: IMetaDataItem;
		};
		columns: [keyof typeof IColumnsCursor];
		data: number[][];
	};
}
