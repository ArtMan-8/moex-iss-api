import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Name = "name",
	Title = "title",
}

export interface ISecurityTypesResponse {
	securitytypes: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
}
