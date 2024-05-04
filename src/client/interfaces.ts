import { TAxiosResponse } from "src/api/interfaces";

import AnalyticsApi from "./analytics";
import InfoApi from "./info";
import SecurityApi from "./security";

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
	dataLanguage?: EResponseDataLanguage;
	/** Формат ответа */
	dataFormat?: EResponseDataFormat;
}

export type TResponse = (
	url: string,
	params?: Record<string, any>,
) => Promise<TAxiosResponse>;

/** Базовые запросы к MOEX ISS API */
export interface IMoexClient {
	/** Получить новости/мероприятия и прочую информации */
	info: InfoApi;
	/** Аналитические запросы: futoi, netflow2 */
	analytics: AnalyticsApi;
	/** Получить информацию по торгуемым инструментам */
	security: SecurityApi;
	/** Произвольный запрос, согласно справочника
	 * {@link http://iss.moex.com/iss/reference/ MOEX ISS}
	 */
	request: TResponse;
}

export interface IMoexClientConstructor {
	new (config?: IMoexConfig): IMoexClient;
}
