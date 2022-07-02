import { AxiosInstance } from "axios";

import { IInfoApi } from "./interfaces";
import {
	TGetEvents,
	TGetEventsDetail,
	TGetHandbooks,
	TGetNews,
	TGetNewsDetail,
	TGetTurnovers,
	TGetTurnoversColumns,
} from "./requestTypes";

export default class InfoApi implements IInfoApi {
	private api: AxiosInstance;

	constructor(api: AxiosInstance) {
		this.api = api;
	}

	public getHandbooks: TGetHandbooks = async () => {
		return await this.api.get(`/index`);
	};

	public getEvents: TGetEvents = async (start?: number) => {
		return await this.api.get("/events", {
			params: { start: start || 0 },
		});
	};

	public getEventsDetail: TGetEventsDetail = async (eventId: number) => {
		return await this.api.get(`/events/${eventId}`);
	};

	public getNews: TGetNews = async (start?: number) => {
		return await this.api.get("/sitenews", {
			params: { start: start || 0 },
		});
	};

	public getNewsDetail: TGetNewsDetail = async (newsId: number) => {
		return await this.api.get(`/sitenews/${newsId}`);
	};

	public getTurnovers: TGetTurnovers = async (args) => {
		const params = {
			is_tonight_session: args?.isToNight || 0,
			date: args?.date || "today",
		};

		return await this.api.get(`/turnovers`, {
			params,
		});
	};

	public getTurnoversColumns: TGetTurnoversColumns = async () => {
		return await this.api.get(`/turnovers/columns`);
	};
}
