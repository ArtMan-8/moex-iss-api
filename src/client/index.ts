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

	public request = async (
		req: string | { url: string; params: URLSearchParams },
	) => {
		if (typeof req === "string")
			return await this.api.get(req.replace("/iss", ""));

		for (const [k, v] of this.api.defaults.params ?? {})
			if (!req.params.has(k)) req.params.append(k, v);

		return await this.api.get(req.url.replace("/iss", ""), {
			params: req.params,
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
