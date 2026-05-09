export interface IMetaDataItem {
	type: string;
	bytes?: number;
	max_size?: number;
}

export type TData = (string | number | null)[][];

export interface IDefaultDataView<EColumn extends string> {
	metadata: {
		[key in EColumn]: IMetaDataItem;
	};
	columns: [EColumn];
	data: TData;
}
