import { IMetaDataItem } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Name = "name",
	Title = "title",
	SecurityGroupId = "security_group_id",
}

export interface IHandbooksSecurityCollectionsResponse {
	metadata: {
		[key in keyof typeof IColumns]: IMetaDataItem;
	};
	columns: [keyof typeof IColumns];
	data: (string | number)[][];
}
