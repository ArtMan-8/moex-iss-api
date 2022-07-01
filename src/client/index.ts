import { AxiosInstance } from "axios";

import { createAxiosInstance } from "../api";
import InfoApi from "./info";
import { IMoexClient, IMoexClientConstructor, IMoexConfig } from "./interfaces";

class MoexClient implements IMoexClient {
	private axios: AxiosInstance;
	public info: InfoApi;

	constructor(config?: IMoexConfig) {
		this.axios = createAxiosInstance(config);
		this.info = new InfoApi(this.axios);
	}

	public request = async (url: string) => {
		return await this.axios.get(url.replace("/iss", ""));
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
