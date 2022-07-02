import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	Date = "date",
	Ticker = "ticker",
	P30 = "p30",
	P70 = "p70",
	P100 = "p100",
	Pv30 = "pv30",
	Pv70 = "pv70",
	Pv100 = "pv100",
	Vol = "vol",
	Oi = "oi",
}

export interface INetflow2Response {
	netflow2: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
}
