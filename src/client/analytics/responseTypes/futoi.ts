import { IMetaDataItem, TData } from "src/types/interfaces";

enum IColumns {
	SessId = "sess_id",
	Seqnum = "seqnum",
	Tradedate = "tradedate",
	Tradetime = "tradetime",
	Ticker = "ticker",
	Clgroup = "clgroup",
	Pos = "pos",
	PosLong = "pos_long",
	PosShort = "pos_short",
	PosLongNum = "pos_long_num",
	PosShortNum = "pos_short_num",
	Systime = "systime",
}

enum IColumnsDates {
	From = "from",
	Till = "till",
	Prev = "prev",
	Next = "next",
}

export interface IFutoiResponse {
	futoi: {
		metadata: {
			[key in keyof typeof IColumns]: IMetaDataItem;
		};
		columns: [keyof typeof IColumns];
		data: TData;
	};
	"futoi.dates": {
		metadata: {
			[key in keyof typeof IColumnsDates]: IMetaDataItem;
		};
		columns: [keyof typeof IColumnsDates];
		data: (number | null)[][];
	};
}
