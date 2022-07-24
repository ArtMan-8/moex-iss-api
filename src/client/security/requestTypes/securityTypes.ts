import { TAxiosResponse } from "src/api/interfaces";

import { ISecurityTypesResponse } from "../responseTypes";

export enum ESecurityTypes {
	/** Валютный фиксинг */
	CurrencyIndex = "currency_index",
	/** Акция обыкновенная */
	CommonShare = "common_share",
	/** Акция привилегированная */
	PreferredShare = "preferred_share",
	/** Депозитарная расписка */
	DepositaryReceipt = "depositary_receipt",
	/** Валюта */
	Currency = "currency",
	/** Бивалютная корзина */
	CurrencyBasket = "currency_basket",
	/** Фьючерс */
	Futures = "futures",
	/** Индекс ГЦБ */
	StateIndex = "state_index",
	/** Стандартный контракт АО НТБ */
	CommodityFutures = "commodity_futures",
	/** Аукцион товарной интервенции */
	CommodityIntervention = "commodity_intervention",
	/** ОФЗ */
	OfzBond = "ofz_bond",
	/** Государственная облигация */
	StateBond = "state_bond",
	/** Облигация центрального банка */
	CbBond = "cb_bond",
	/** Региональная облигация */
	SubfederalBond = "subfederal_bond",
	/** Опцион */
	Option = "option",
	/** Муниципальная облигация */
	MunicipalBond = "municipal_bond",
	/** Опцион на акции */
	OptionOnShares = "option_on_shares",
	/** Корпоративная облигация */
	CorporateBond = "corporate_bond",
	/** Биржевая облигация */
	ExchangeBond = "exchange_bond",
	/** Облигация МФО */
	IfiBond = "ifi_bond",
	/** Еврооблигации */
	EuroBond = "euro_bond",
	/** Пай открытого ПИФа */
	PublicPpif = "public_ppif",
	/** Пай интервального ПИФа */
	IntervalPpif = "interval_ppif",
	/** Индекс РТС */
	RtsIndex = "rts_index",
	/** Пай закрытого ПИФа */
	PrivatePpif = "private_ppif",
	/** Ипотечный сертификат */
	StockMortgage = "stock_mortgage",
	/** ETF */
	EtfPpif = "etf_ppif",
	/** Индекс фондового рынка */
	StockIndex = "stock_index",
	/** Пай биржевого ПИФа */
	ExchangePpif = "exchange_ppif",
	/** Товарный индикатор */
	StockIndexCi = "stock_index_ci",
	/** Индекс акций */
	StockIndexEq = "stock_index_eq",
	/** iNAV смешанный */
	StockIndexIm = "stock_index_im",
	/** Индекс облигаций */
	StockIndexFi = "stock_index_fi",
	/** iNAV акций */
	StockIndexIe = "stock_index_ie",
	/** Индекс составной */
	StockIndexMx = "stock_index_mx",
	/** iNAV облигаций */
	StockIndexIf = "stock_index_if",
	/** Индекс НТБ */
	StockIndexNamex = "stock_index_namex",
	/** Металл золото */
	GoldMetal = "gold_metal",
	/** Металл серебро */
	SilverMetal = "silver_metal",
	/** Валютный фьючерс */
	CurrencyFutures = "currency_futures",
	/** Валютный фиксинг */
	CurrencyFixing = "currency_fixing",
	/** Средневзвешенный курс */
	CurrencyWap = "currency_wap",
	/** Депозит с ЦК */
	StockDeposit = "stock_deposit",
	/** Коммерческая облигация */
	NonExchangeBond = "non_exchange_bond",
	/** Кредит */
	StockCredit = "stock_credit",
	/** Корзина РЕПО */
	StockRepoBasket = "stock_repo_basket",
	/** Сахар */
	AgroSugar = "agro_sugar",
}

export type TGetSecurityTypes = (
	/** Группа ценных бумаг */
	securitytype?: ESecurityTypes,
) => Promise<TAxiosResponse<ISecurityTypesResponse>>;
