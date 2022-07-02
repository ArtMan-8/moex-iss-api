import { AxiosInstance } from "axios";

import { createAxiosInstance } from "../api";
import AnalyticsApi from "./analytics";
import InfoApi from "./info";
import { IMoexClient, IMoexClientConstructor, IMoexConfig } from "./interfaces";

class MoexClient implements IMoexClient {
	private api: AxiosInstance;
	public info: InfoApi;
	public analytics: AnalyticsApi;

	constructor(config?: IMoexConfig) {
		this.api = createAxiosInstance(config);
		this.info = new InfoApi(this.api);
		this.analytics = new AnalyticsApi(this.api);
	}

	public request = async (url: string) => {
		return await this.api.get(url.replace("/iss", ""));
	};
}

/*-----------------------------------------------------------------*/

function newMoexClient(
	moexClientConstructor: IMoexClientConstructor,
	config?: IMoexConfig,
): IMoexClient {
	return new moexClientConstructor(config);
}

const createMoexCLient =
	(moexClient: IMoexClientConstructor) => (config?: IMoexConfig) =>
		newMoexClient(moexClient, config);

/**
 * Базовые запросы к MOEX ISS API.
 * {@link http://iss.moex.com/iss/reference/ MOEX ISS}
 */
export default createMoexCLient(MoexClient);
