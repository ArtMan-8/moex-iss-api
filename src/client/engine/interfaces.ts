import { TGetEngineDescription } from "./requestTypes/engineDescription";
import { TGetEngines } from "./requestTypes/engines";

export interface IEngineApi {
	/** Получить список торговых систем */
	getEngines: TGetEngines;

	/** Получить описание и режим работы торговой системы */
	getEngineDescription: TGetEngineDescription;
}
