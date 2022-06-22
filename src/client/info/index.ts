import { AxiosInstance } from "axios";

import {
	IInfoApi,
	TGetEvents,
	TGetEventsDetail,
	TGetHandbooks,
	TGetNews,
	TGetNewsDetail,
	TGetTurnovers,
	TGetTurnoversColumns,
} from "./interfaces";

export default class InfoApi implements IInfoApi {
	private axios: AxiosInstance;

	constructor(axios: AxiosInstance) {
		this.axios = axios;
	}

	getHandbooks: TGetHandbooks = async () => {
		return await this.axios.get(`/index`);
	};

	getEvents: TGetEvents = async (start?: number) => {
		return await this.axios.get("/events", {
			params: { start },
		});
	};

	getEventsDetail: TGetEventsDetail = async (eventId: number) => {
		return await this.axios.get(`/events/${eventId}`);
	};

	getNews: TGetNews = async (start?: number) => {
		return await this.axios.get("/sitenews", {
			params: { start },
		});
	};

	getNewsDetail: TGetNewsDetail = async (newsId: number) => {
		return await this.axios.get(`/sitenews/${newsId}`);
	};

	getTurnovers: TGetTurnovers = async (args) => {
		const params = {
			is_tonight_session: args?.isToNight || 0,
			data: args?.data || "today",
		};

		return await this.axios.get(`/turnovers`, {
			params,
		});
	};

	getTurnoversColumns: TGetTurnoversColumns = async () => {
		return await this.axios.get(`/turnovers/columns`);
	};
}
