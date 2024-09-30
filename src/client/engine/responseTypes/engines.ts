import { IMetaDataItem, TData } from "src/types/interfaces";

enum EColumns {
	Id = "id",
	/**
	 * Название торговой системы на английском
	 *  @example
	 * stock | currency | commodity ...
	 */
	Name = "name",
	/**
	 * Название торговой системы на русском
	 * @example
	 * "Фондовый рынок и рынок депозитов" | "Валютный рынок" ...
	 */
	Title = "title",
}
export interface IEnginesResponse {
	/**
	 *@example 
    {
        "metadata": {
            "id": {"type": "int32"},
            "name": {"type": "string", "bytes": 45, "max_size": 0},
            "title": {"type": "string", "bytes": 765, "max_size": 0}
        },
        "columns": ["id", "name", "title"], 
        "data": [
            [1, "stock", "Фондовый рынок и рынок депозитов"],
            [2, "state", "Рынок ГЦБ (размещение)"],
            [3, "currency", "Валютный рынок"],
            ...
        ]
    }
	 */
	engines: {
		metadata: {
			[key in keyof typeof EColumns]: IMetaDataItem;
		};
		columns: [keyof typeof EColumns];
		data: TData;
	};
}
