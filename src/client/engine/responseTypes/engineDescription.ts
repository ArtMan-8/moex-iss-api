import { IDefaultDataView } from "src/types/interfaces";

export enum EEngineColumns {
	Name = "NAME",
	Title = "title",
	Short_title = "short_title",
}

export enum ETimetableColumns {
	Week_day = "week_day",
	Is_work_day = "is_work_day",
	Start_time = "start_time",
	Stop_time = "stop_time",
}
export enum EDailytableColumns {
	Date = "date",
	Is_work_day = "is_work_day",
	Start_time = "start_time",
	Stop_time = "stop_time",
}

export interface IEngineDecriptionResponse {
	engine: IDefaultDataView<EEngineColumns>;
	timetable: IDefaultDataView<ETimetableColumns>;
	dailytable: IDefaultDataView<EDailytableColumns>;
}
