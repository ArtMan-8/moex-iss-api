import { AxiosResponse } from "axios";

import {
	IEventsDetailResponse,
	IEventsResponse,
	IHandbooksResponse,
	INewsDetailResponse,
	INewsResponse,
	ITurnoversColumnsResponse,
	ITurnoversResponse,
} from "./responseTypes";

export type TGetHandbooks = () => Promise<AxiosResponse<IHandbooksResponse>>;

export type TGetEvents = (
	start?: number,
) => Promise<AxiosResponse<IEventsResponse>>;

export type TGetEventsDetail = (
	eventId: number,
) => Promise<AxiosResponse<IEventsDetailResponse>>;

export type TGetNews = (
	start?: number,
) => Promise<AxiosResponse<INewsResponse>>;

export type TGetNewsDetail = (
	newsId: number,
) => Promise<AxiosResponse<INewsDetailResponse>>;

export type TGetTurnovers = (args?: {
	/** обороты за вечернюю сессию */
	isToNight?: 0 | 1;
	/** обороты за конкретную дату, в формате YYYY-MM-DD, или "today" */
	date?: "today" | string;
}) => Promise<AxiosResponse<ITurnoversResponse>>;

export type TGetTurnoversColumns = () => Promise<
	AxiosResponse<ITurnoversColumnsResponse>
>;

export interface IInfoApi {
	/** Получить глобальные справочники ISS */
	getHandbooks: TGetHandbooks;

	/**
	 * Получить список мероприятий биржи
	 * @param {number} start смещение начала
	 */
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
