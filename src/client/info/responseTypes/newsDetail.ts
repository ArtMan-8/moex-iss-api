import { IMetaDataItem } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Title = "title",
	PublishedAt = "published_at",
	Body = "body",
}

export interface INewsDetailResponse {
	content: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: (string | number)[][];
	};
}
