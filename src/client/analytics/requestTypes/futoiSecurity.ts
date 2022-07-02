import { AxiosResponse } from "axios";

export interface IGetFutoiSecurityArgs {
	/**
	 * Дата в формате YYYY-MM-DD начиная с которой отдаются данные.
	 * Обратите внимание, что для данного запроса нет постраничной навигации. вам необходимо будет изменять параметр &from на дату следующую после полученных вами данных.
	 * Количество отдаваемых записей в одном блоке ограничено 1000.
	 */
	from: string;
	/**
	 * Дата в формате YYYY-MM-DD которой будет заканчиваться интервал.
	 * Данный параметр должен быть больше или равен параметру from.
	 */
	till: string;
	/** Последний срез за день, "1" - включить */
	latest?: "0" | "1";
}

export type TGetFutoiSecurity = (
	security: string,
	args?: IGetFutoiSecurityArgs,
) => Promise<AxiosResponse<any>>;
