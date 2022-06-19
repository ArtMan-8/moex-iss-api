import { AxiosInstance } from "axios";
import { createAxiosInstance } from "../api/index";

import InfoApi from "./info";
import { IMoexClient, IMoexClientOptions } from "./interfaces";

/**
 * Базовые запросы к MOEX ISS API.
 * @class
 */
export default class MoexClient implements IMoexClient {
	private axios: AxiosInstance;
	public info: InfoApi;

	constructor(config?: IMoexClientOptions) {
		this.axios = createAxiosInstance(config);
		this.info = new InfoApi(this.axios);
	}
}
