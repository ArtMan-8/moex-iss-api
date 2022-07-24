import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Id = "id",
	Name = "name",
	Title = "title",
}

enum IBoardColumns {
	Id = "id",
	Name = "name",
	Title = "title",
	IsTraded = "is_traded",
	Category = "category",
}

// TODO: типизировать или нет,
// ооочень много типов

export interface ISecurityGroupCollectionResponse {
	collections: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
	boardgroups?: {
		metadata: {
			[key in keyof typeof IBoardColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IBoardColumns];
		data: TData;
	};
}
