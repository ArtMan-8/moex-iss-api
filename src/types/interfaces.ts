export interface IMetaDataItem {
	type: string;
	bytes?: number;
	max_size?: number;
}

export type TData = (string | number | null)[][];
