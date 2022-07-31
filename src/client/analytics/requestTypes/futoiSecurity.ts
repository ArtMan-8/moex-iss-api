import { TAxiosResponse } from "src/api/interfaces";

import { IFutoiResponse } from "../responseTypes";

export interface IGetFutoiSecurityParams {
	/**
	 * Дата в формате YYYY-MM-DD начиная с которой отдаются данные.
	 * Обратите внимание, что для данного запроса нет постраничной навигации.
	 * Вам необходимо будет изменять параметр &from на дату следующую после полученных вами данных.
	 * Количество отдаваемых записей в одном блоке ограничено 1000.
	 */
	from?: string;
	/**
	 * Дата в формате YYYY-MM-DD которой будет заканчиваться интервал.
	 * Данный параметр должен быть больше или равен параметру from.
	 */
	till?: string;
	/**
	 * Последний срез за день, "1" - включить
	 * По умолчанию - 0
	 * */
	latest?: 0 | 1;
}

export interface IGetFutoiSecurityArgs {
	security: string;
	/** query-params */
	params?: IGetFutoiSecurityParams;
}

export type TGetFutoiSecurity = (
	args: IGetFutoiSecurityArgs,
) => Promise<TAxiosResponse<IFutoiResponse>>;
