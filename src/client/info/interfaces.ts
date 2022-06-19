import { AxiosResponse } from "axios";

export interface IGetTurnoversArgs {
	/** обороты за вечернюю сессию */
	isToNight?: 0 | 1;
	/** обороты за конкретную дату, YYYY-MM-DD */
	data?: string;
}

export interface IInfoApi {
	/** Получить глобальные справочники ISS */
	getHandbooks: () => Promise<AxiosResponse>;

	/**
	 * Получить список мероприятий биржи
	 * @param {number} start смещение начала
	 */
	getEvents: (start?: number) => Promise<AxiosResponse>;

	/** Получить подробности мероприятия биржи */
	getEventsDetail: (eventId: number) => Promise<AxiosResponse>;

	/** Получить список новостей биржи */
	getNews: (start?: number) => Promise<AxiosResponse>;

	/** Получить подробности новости биржи */
	getNewsDetail: (newsId: number) => Promise<AxiosResponse>;

	/** Получить сводные обороты по рынкам */
	getTurnovers: (args?: IGetTurnoversArgs) => Promise<AxiosResponse>;

	/** Получить описание полей для запросов оборотов по рынку/торговой системе */
	getTurnoversColumns: () => Promise<AxiosResponse>;
}
