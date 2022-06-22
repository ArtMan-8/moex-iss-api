import { IMetaDataItem } from "src/types/interfaces";

enum IColumns {
	Name = "NAME",
	Id = "ID",
	ValToday = "VALTODAY",
	ValTodayUSD = "VALTODAY_USD",
	NumTrades = "NUMTRADES",
	UpDateTime = "UPDATETIME",
	Title = "TITLE",
}

export interface ITurnoversResponse {
	turnovers: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: (string | number | null)[][];
	};
	turnoversprevdate: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: (string | number | null)[][];
	};
}
