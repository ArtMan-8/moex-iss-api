import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Name = "name",
	ShortTitle = "short_title",
	Title = "title",
	IsOrdered = "is_ordered",
	IsSystem = "is_system",
	IsHidden = "is_hidden",
	TrendBy = "trend_by",
	IsSigned = "is_signed",
	HasPercent = "has_percent",
	Type = "type",
	Precision = "precision",
	Alias = "alias",
}

export interface ITurnoversColumnsResponse {
	turnovers: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
}
