import {
	TGetEvents,
	TGetEventsDetail,
	TGetHandbooks,
	TGetNews,
	TGetNewsDetail,
	TGetTurnovers,
	TGetTurnoversColumns,
} from "./requestTypes";

export interface IInfoApi {
	/** Получить глобальные справочники ISS */
	getHandbooks: TGetHandbooks;

	/** Получить список мероприятий биржи */
	getEvents: TGetEvents;

	/** Получить подробности мероприятия биржи */
	getEventsDetail: TGetEventsDetail;

	/** Получить список новостей биржи */
	getNews: TGetNews;

	/** Получить подробности новости биржи */
	getNewsDetail: TGetNewsDetail;

	/** Получить сводные обороты по рынкам */
	getTurnovers: TGetTurnovers;

	/** Получить описание полей для запросов оборотов по рынку/торговой системе */
	getTurnoversColumns: TGetTurnoversColumns;
}
