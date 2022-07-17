import { TGetSecurityGroups } from "./requestTypes";

export interface ISecurityApi {
	/** Получить список групп (группу) ценных бумаг*/
	getSecurityGroups: TGetSecurityGroups;
}
