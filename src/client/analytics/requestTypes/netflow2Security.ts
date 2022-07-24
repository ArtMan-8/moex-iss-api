import { TAxiosResponse } from "src/api/interfaces";

import { INetflow2Response } from "../responseTypes";

export interface IGetNetflow2SecurityArgs {
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
}

export type IGetNetflow2Security = (
	security: string,
	args?: IGetNetflow2SecurityArgs,
) => Promise<TAxiosResponse<INetflow2Response>>;
