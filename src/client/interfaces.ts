import { TAxiosResponse } from "src/api/interfaces";

import AnalyticsApi from "./analytics";
import InfoApi from "./info";

export enum EResponseDataFormat {
	json = "json",
	csv = "csv",
	html = "html",
	xml = "xml",
}

export enum EResponseDataLanguage {
	ru = "ru",
	en = "en",
}

export interface IMoexConfig {
	/** Язык ответа */
	dataLanguage?: keyof typeof EResponseDataLanguage;
	/** Формат ответа */
	dataFormat?: keyof typeof EResponseDataFormat;
}

export type TResponse = (url: string) => Promise<TAxiosResponse>;

/** Базовые запросы к MOEX ISS API */
export interface IMoexClient {
	/** Получение различной информации */
	info: InfoApi;
	/** Аналитические запросы: futoi, netflow2 */
	analytics: AnalyticsApi;
	/** Произвольный запрос, согласно справочника
	 * {@link http://iss.moex.com/iss/reference/ MOEX ISS}
	 */
	request: TResponse;
}

export interface IMoexClientConstructor {
	new (config?: IMoexConfig): IMoexClient;
}
