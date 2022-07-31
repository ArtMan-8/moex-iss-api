import { TAxiosResponse } from "src/api/interfaces";

import { ISecurityGroupCollectionInfoResponse } from "../responseTypes";
import { ESecurityGroups } from "./securityGroups";

export interface IGetSecurityGroupCollectionInfoParams {
	/**
	 * Поле, по которому сортируется ответ.
	 * По умолчанию - secid
	 * */
	sort_order?: string;
	/**
	 * Порядок сортировки. Доступные значения Пусто и 'DESC'.
	 * По умолчанию - asc
	 * */
	sort_order_desc?: "asc" | "desc";
	/**
	 * Номер строки (отсчет с нуля), с которой следует начать порцию возвращаемых данных.
	 * Получение ответа без данных означает, что указанное значение превышает число строк, возвращаемых запросом.
	 * По умолчанию - 0
	 */
	start?: number;
}

export interface IGetSecurityGroupCollectionInfoArgs {
	/** Группа ценных бумаг */
	securitygroup: ESecurityGroups;
	/** Коллекция ценных бумаг входящие в группу */
	collection: string;
	/** query-params */
	args?: IGetSecurityGroupCollectionInfoParams;
}

export type TGetSecurityGroupCollectionInfo = (
	args: IGetSecurityGroupCollectionInfoArgs,
) => Promise<TAxiosResponse<ISecurityGroupCollectionInfoResponse>>;
