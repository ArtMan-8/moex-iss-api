import { AxiosInstance } from "axios";

import { createAxiosInstance } from "../api";
import AnalyticsApi from "./analytics";
import InfoApi from "./info";
import { IMoexClient, IMoexClientConstructor, IMoexConfig } from "./interfaces";
import SecurityApi from "./security";

class MoexClient implements IMoexClient {
	private api: AxiosInstance;
	public info: InfoApi;
	public analytics: AnalyticsApi;
	public security: SecurityApi;

	constructor(config?: IMoexConfig) {
		this.api = createAxiosInstance(config);
		this.info = new InfoApi(this.api);
		this.analytics = new AnalyticsApi(this.api);
		this.security = new SecurityApi(this.api);
	}

	public request = async (url: string, params?: Record<string, any>) => {
		if (url.length == 0) throw new Error("url cannot be empty");

		if (params)
			for (const [k, v] of Object.entries(this.api.defaults.params ?? {}))
				if (!params[k]) params[k] = v;

		return await this.api.get(url, {
			params: params,
			data: {
				do_not_mutate_request:
					url.indexOf("?") > -1 || url.indexOf(".") > -1,
			},
		});
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
