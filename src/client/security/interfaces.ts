import { TGetSecurityGroups, TGetSecurityTypes } from "./requestTypes";

export interface ISecurityApi {
	/** Получить список групп (группу) ценных бумаг*/
	getSecurityGroups: TGetSecurityGroups;
	/** Получить список типов (тип) ценных бумаг*/
	getSecurityTypes: TGetSecurityTypes;
}
