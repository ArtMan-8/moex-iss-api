import {
	TGetSecurityGroupCollection,
	TGetSecurityGroups,
	TGetSecurityTypes,
} from "./requestTypes";

export interface ISecurityApi {
	/** Получить список групп (группу) ценных бумаг*/
	getSecurityGroups: TGetSecurityGroups;
	/** Получить коллекции ценных бумаг входящие в группу */
	getSecurityGroupCollection: TGetSecurityGroupCollection;
	/** Получить список типов (тип) ценных бумаг*/
	getSecurityTypes: TGetSecurityTypes;
}
