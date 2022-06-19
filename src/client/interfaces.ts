import { IAxiosConfig } from "src/api";
import InfoApi from "./info";

export interface IMoexClientOptions extends IAxiosConfig {
	[key: string]: any;
}

/** Базовые запросы к MOEX ISS API */
export interface IMoexClient {
	/** Получение различной информации */
	info: InfoApi;
}
