import { IMetaDataItem } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Name = "name",
	Title = "title",
	IsHidden = "is_hidden",
}

export interface IHandbooksSecurityGroupsResponse {
	metadata: {
		[key in keyof typeof IColumns]: IMetaDataItem;
	};
	columns: [keyof typeof IColumns];
	data: (string | number)[][];
}
