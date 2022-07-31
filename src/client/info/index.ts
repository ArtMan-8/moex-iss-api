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

	public getEvents: TGetEvents = async (params) => {
		return await this.api.get("/events", {
			params,
		});
	};

	public getEventsDetail: TGetEventsDetail = async ({ eventId }) => {
		return await this.api.get(`/events/${eventId}`);
	};

	public getNews: TGetNews = async (params) => {
		return await this.api.get("/sitenews", {
			params,
		});
	};

	public getNewsDetail: TGetNewsDetail = async ({ newsId }) => {
		return await this.api.get(`/sitenews/${newsId}`);
	};

	public getTurnovers: TGetTurnovers = async (params) => {
		return await this.api.get(`/turnovers`, {
			params,
		});
	};

	public getTurnoversColumns: TGetTurnoversColumns = async () => {
		return await this.api.get(`/turnovers/columns`);
	};
}
