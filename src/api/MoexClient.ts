import axios from "axios";
import { API_BASE_URL } from "./constants";

axios.create({
	baseURL: API_BASE_URL,
	responseType: "json",
});

/**
 * @class MoexClient
 * @description Базовые запросы к MOEX ISS API
 */
export default class MoexClient {
	/** Получить глобальные справочники ISS */
	async getHandbooks() {
		return await axios.get(`${API_BASE_URL}.json`);
	}
}
