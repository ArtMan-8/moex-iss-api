import {
	TGetSecurities,
	TGetSecurityAggregateTradingResult,
	TGetSecurityGroupCollection,
	TGetSecurityGroupCollectionInfo,
	TGetSecurityGroups,
	TGetSecurityIndexes,
	TGetSecuritySpecification,
	TGetSecurityTypes,
} from "./requestTypes";

export interface ISecurityApi {
	/** Получить список типов (тип) ценных бумаг */
	getSecurityTypes: TGetSecurityTypes;

	/** Получить список групп (группу) ценных бумаг */
	getSecurityGroups: TGetSecurityGroups;

	/** Получить коллекции ценных бумаг входящие в группу */
	getSecurityGroupCollection: TGetSecurityGroupCollection;

	/** Получить список описания инструментов коллекции */
	getSecurityGroupCollectionInfo: TGetSecurityGroupCollectionInfo;

	/*------------------------------------------------*/

	/** Получить список бумаг, торгуемых на MOEX */
	getSecurities: TGetSecurities;

	/** Получить спецификацию бумаги */
	getSecuritySpecification: TGetSecuritySpecification;

	/** Получить список индексов, в которые входит бумага */
	getSecurityIndexes: TGetSecurityIndexes;

	/** Получить агрегированные итоги торгов бумаги за дату по рынкам */
	getSecurityAggregateTradingResult: TGetSecurityAggregateTradingResult;
}
