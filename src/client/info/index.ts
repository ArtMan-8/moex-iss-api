import { AxiosInstance } from "axios";
import { IGetTurnoversArgs, IInfoApi } from "./interfaces";

export default class InfoApi implements IInfoApi {
	private axios: AxiosInstance;

	constructor(axios: AxiosInstance) {
		this.axios = axios;
	}

	async getHandbooks() {
		return await this.axios.get(`/index`);
	}

	async getEvents(start?: number) {
		return await this.axios.get("/events", {
			params: { start },
		});
	}

	async getEventsDetail(eventId: number) {
		return await this.axios.get(`/events/${eventId}`);
	}

	async getNews(start?: number) {
		return await this.axios.get("/sitenews", {
			params: { start },
		});
	}

	async getNewsDetail(newsId: number) {
		return await this.axios.get(`/sitenews/${newsId}`);
	}

	async getTurnovers(args?: IGetTurnoversArgs) {
		const params = {
			is_tonight_session: args?.isToNight || 0,
			data: args?.data || "today",
		};

		return await this.axios.get(`/turnovers`, {
			params,
		});
	}

	async getTurnoversColumns() {
		return await this.axios.get(`/turnovers/columns`);
	}
}
