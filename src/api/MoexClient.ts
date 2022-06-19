import { AxiosInstance } from "axios";
import { createAxiosInstance } from "./config";
import { IMoexClientOptions } from "./interfaces";

/**
 * @class MoexClient
 * @description Базовые запросы к MOEX ISS API
 */
export default class MoexClient {
	private axios: AxiosInstance;

	constructor(config?: IMoexClientOptions) {
		this.axios = createAxiosInstance(config);
	}

	/** Получить глобальные справочники ISS */
	async getHandbooks() {
		return await this.axios.get(`/index`);
	}

	/*----------------------------------------------------*/
	/** Получить список мероприятий биржи */
	async getEvents(start?: number) {
		return await this.axios.get("/events", {
			params: { start },
		});
	}

	/** Получить подробности мероприятия биржи */
	async getEventDetail(eventId: number) {
		return await this.axios.get(`/events/${eventId}`);
	}

	/*----------------------------------------------------*/
	/** Получить список новостей биржи */
	async getNews(start?: number) {
		return await this.axios.get("/sitenews", {
			params: { start },
		});
	}

	/** Получить подробности новости биржи */
	async getNewsDetail(newsId: number) {
		return await this.axios.get(`/sitenews/${newsId}`);
	}

	/*----------------------------------------------------*/
	/** Получить сводные обороты по рынкам */
	async getTurnovers(args?: {
		/** обороты за вечернюю сессию */
		isToNight?: 0 | 1;
		/** обороты за конкретную дату, YYYY-MM-DD */
		data?: string;
	}) {
		const params = {
			is_tonight_session: args?.isToNight || 0,
			data: args?.data || "today",
		};

		return await this.axios.get(`/turnovers`, {
			params,
		});
	}

	/** Получить описание полей для запросов оборотов по рынку/торговой системе */
	async getTurnoversColumns() {
		return await this.axios.get(`/turnovers/columns`);
	}
}
