import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Title = "title",
	From = "from",
	Till = "till",
	Body = "body",
	Organizer = "organizer",
	Place = "place",
}

export interface IEventsDetailResponse {
	content: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
}
