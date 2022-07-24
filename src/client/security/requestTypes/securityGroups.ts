import { TAxiosResponse } from "src/api/interfaces";
import { EEngines } from "src/types/handbook";

import { ISecurityGroupsResponse } from "../responseTypes";

export enum ESecurityGroups {
	/** Индексы */
	StockIndex = "stock_index",
	/** Акции */
	StockShares = "stock_shares",
	/** Облигации */
	StockBonds = "stock_bonds",
	/** Валюта */
	CurrencySelt = "currency_selt",
	/** Фьючерсы */
	FuturesForts = "futures_forts",
	/** Опционы */
	FuturesOptions = "futures_options",
	/** Депозитарные расписки */
	StockDr = "stock_dr",
	/** Иностранные ценные бумаги */
	StockForeignShares = "stock_foreign_shares",
	/** Еврооблигации */
	StockEurobond = "stock_eurobond",
	/** Паи ПИФов */
	StockPpif = "stock_ppif",
	/** Биржевые фонды */
	StockEtf = "stock_etf",
	/** Драгоценные металлы */
	CurrencyMetal = "currency_metal",
	/** Квалифицированные инвесторы */
	StockQnv = "stock_qnv",
	/** Клиринговые сертификаты участия */
	StockGcc = "stock_gcc",
	/** Депозиты с ЦК */
	StockDeposit = "stock_deposit",
	/** Валютный фьючерс */
	CurrencyFutures = "currency_futures",
	/** Валютный фиксинг */
	CurrencyIndices = "currency_indices",
	/** Ипотечный сертификат */
	StockMortgage = "stock_mortgage",
}

export interface IGetSecurityGroupsArgs {
	/**
	 * Скрыть неактивные группы
	 * По умолчанию - 0
	 * */
	hide_inactive?: 0 | 1;
	/** Рынок торгов */
	trade_engine?: EEngines;
}

export interface IGetSecurityGroupsOptions {
	/** Группа ценных бумаг */
	securitygroup?: ESecurityGroups;
	/** query-params */
	args?: IGetSecurityGroupsArgs;
}

export type TGetSecurityGroups = (
	options?: IGetSecurityGroupsOptions,
) => Promise<TAxiosResponse<ISecurityGroupsResponse>>;
