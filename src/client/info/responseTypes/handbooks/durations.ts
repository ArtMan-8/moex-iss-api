import { IMetaDataItem } from "src/types/interfaces";

enum IColumns {
	Interval = "interval",
	Duration = "duration",
	Days = "days",
	Title = "title",
	Hint = "hint",
}

export interface IHandbooksDurationsResponse {
	metadata: {
		[key in keyof typeof IColumns]: IMetaDataItem;
	};
	columns: [keyof typeof IColumns];
	data: (string | number | null)[][];
}
