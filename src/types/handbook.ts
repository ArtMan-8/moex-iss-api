export enum EEngines {
	/** Фондовый рынок и рынок депозитов */
	Stock = "stock",
	/** Рынок ГЦБ (размещение) */
	State = "state",
	/** Валютный рынок */
	Currency = "currency",
	/** Срочный рынок */
	Futures = "futures",
	/** Товарный рынок */
	Commodity = "commodity",
	/** Товарные интервенции */
	Interventions = "interventions",
	/** ОТС-система */
	Offboard = "offboard",
	/** Агро */
	Agro = "agro",
	/** OTC Система */
	OTC = "otc",
}

export interface IStockMarkets {
	/** Индексы фондового рынка */
	index: string;
	/** Рынок акций */
	shares: string;
	/** Рынок облигаций */
	bonds: string;
	/** Режим переговорных сделок */
	ndm: string;
	/** ОТС */
	otc: string;
	/** РЕПО с ЦК */
	cco: string;
	/** Депозиты с ЦК */
	deposit: string;
	/** Рынок сделок РЕПО */
	repo: string;
	/** Квал. инвесторы */
	qnv: string;
	/** Мультивалютный рынок смешанных активов */
	mamc: string;
	/** Иностранные ц.б. */
	foreignshares: string;
	/** Иностранные ц.б. РПС */
	foreignndm: string;
	/** MOEX Board */
	moexboard: string;
	/** РЕПО с ЦК с КСУ */
	gcc: string;
	/** Рынок кредитов */
	credit: string;
	/** Standard */
	standard: string;
	/** Classica */
	classica: string;
}

export interface IStateMarkets {
	/** Индексы ГКО/ОФЗ */
	index: string;
	/** Облигации ГЦБ */
	bonds: string;
	/** Междилерское РЕПО */
	repo: string;
	/** Внесистемные сделки */
	ndm: string;
}

export interface ICurrencyMarkets {
	/** Биржевые сделки с ЦК */
	selt: string;
	/** Поставочные фьючерсы */
	futures: string;
	/** Валютный фиксинг */
	index: string;
	/** Внебиржевой */
	otc: string;
}

export interface IFuturesMarkets {
	/** Срочные инструменты */
	main: string;
	/** ФОРТС */
	forts: string;
	/** Опционы ФОРТС */
	options: string;
	/** Фьючерсы IQS */
	fortsiqs: string;
	/** Опционы IQS */
	optionsiqs: string;
}

export interface ICommodityMarkets {
	/** Секция стандартных контрактов АО НТБ */
	futures: string;
}

export interface IInterventionsMarkets {
	/** Интервенции по зерну */
	grain: string;
}

export interface IOffboardMarkets {
	/** Облигации */
	bonds: string;
}

export interface IAgroMarkets {
	/** Торги сахаром */
	sugar: string;
}

export interface IOtcMarkets {
	/** Облигации */
	bonds: string;
	/** Облигации c ЦК */
	ndm: string;
}

export enum EMarkets {}

export interface IMarkets {
	/** Фондовый рынок и рынок депозитов */
	[EEngines.Stock]: IStockMarkets;
	/** Рынок ГЦБ (размещение) */
	[EEngines.State]: IStateMarkets;
	/** Валютный рынок */
	[EEngines.Currency]: ICurrencyMarkets;
	/** Срочный рынок */
	[EEngines.Futures]: IFuturesMarkets;
	/** Товарный рынок */
	[EEngines.Commodity]: ICommodityMarkets;
	/** Товарные интервенции */
	[EEngines.Interventions]: IInterventionsMarkets;
	/** ОТС-система */
	[EEngines.Offboard]: IOffboardMarkets;
	/** Агро */
	[EEngines.Agro]: IAgroMarkets;
	/** OTC Система */
	[EEngines.OTC]: IOtcMarkets;
}

export type MapEnginesToMarkets<T extends keyof IMarkets> = IMarkets[T];
