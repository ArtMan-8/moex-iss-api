import { TAxiosResponse } from "src/api/interfaces";

import { ISecuritySpecificationResponse } from "../responseTypes";

export interface IGetSecuritySpecificationParams {
	/**
	 * Номер строки (отсчет с нуля), с которой следует начать порцию возвращаемых данных.
	 * Получение ответа без данных означает, что указанное значение превышает число строк, возвращаемых запросом.
	 * По умолчанию - 0
	 */
	start?: number;
}

export interface IGetSecuritySpecificationArgs {
	/** secid */
	security: string;
	/** query-params */
	params?: IGetSecuritySpecificationParams;
}

export type TGetSecuritySpecification = (
	args: IGetSecuritySpecificationArgs,
) => Promise<TAxiosResponse<ISecuritySpecificationResponse>>;
