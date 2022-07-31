import { TAxiosResponse } from "src/api/interfaces";
import { EEngines } from "src/types/handbook";

import { ISecuritiesResponse } from "../responseTypes";
import { ESecurityGroups } from "./securityGroups";
import { ESecurityTypes } from "./securityTypes";

export type TGetSecuritiesParamsGroupBy =
	| {
			/** Группировать выводимый результат по полю. */
			group_by?: "type";
			/**
			 * Фильтровать по типам group или type.
			 * Зависит от значения фильтра group_by
			 */
			group_by_filter?: ESecurityTypes;
	  }
	| {
			/** Группировать выводимый результат по полю. */
			group_by?: "group";
			/**
			 * Фильтровать по типам group или type.
			 * Зависит от значения фильтра group_by
			 */
			group_by_filter?: ESecurityGroups;
	  };

export interface IGetSecuritiesParams {
	/**
	 * Поиск инструмента по части Кода, Названию, ISIN, Идентификатору Эмитента, Номеру гос.регистрации.
	 * Слова длиной менее трёх букв игнорируются. Если параметром передано два слова через пробел. То каждое должно быть длиной не менее трёх букв.
	 */
	q?: string;
	/** Рынок торгов */
	engine?: EEngines;
	/**
	 * Торгуется бумага, или нет
	 * По умолчанию - 1
	 */
	is_trading?: 0 | 1;
	/** Рынок */
	market?: string;
	/**
	 * Количество выводимых инструментов
	 * По умолчанию - 100
	 */
	limit?: number;
	/**
	 * Номер строки (отсчет с нуля), с которой следует начать порцию возвращаемых данных.
	 * Получение ответа без данных означает, что указанное значение превышает число строк, возвращаемых запросом.
	 * По умолчанию - 0
	 */
	start?: number;
}

export type TGetSecurities = (
	/** query-params */
	params?: IGetSecuritiesParams & TGetSecuritiesParamsGroupBy,
) => Promise<TAxiosResponse<ISecuritiesResponse>>;
