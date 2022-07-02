# MOEX ISS API CLient for JS

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?labelColor=262626)](http://commitizen.github.io/cz-cli/) [![TypeScript](https://img.shields.io/badge/</>-TypeScript-3178c6?labelColor=262626)](https://www.typescriptlang.org/)

Клиент для запросов к MOEX ISS.<br />

-   [Подробности по запросам на офф.сайте](https://iss.moex.com/iss/reference/)
-   [Руководство разработчика на офф.сайте](https://fs.moex.com/files/6523)

## Установка

```
npm install --save moex-iss-api-client
```

### Пример использования

```
import { createMoexCLient } from "moex-iss-api-client";

const moexClient = createMoexCLient();
const response = await moexClient.info.getHandbooks();

// Получение данных
const data = response.data;

// Проверка на получение ошибки, и получение её текста.
const errorMessage = response.issError;
```

При создании клиента, опционально можно передать конфиг

```
const config = {
	/** Язык ответа, по-умолчанию "ru" */
	dataLanguage?: "ru" | "en";
	/** Формат ответа, по-умолчанию "json" */
	dataFormat?: "json" | "csv" | "html" | "xml";
}

const moexClient = createMoexCLient(config);
```

## Реализовано

Группы запросов

-   **analytics**, аналитические запросы: futoi, netflow2, ставки
-   **info**, информационные запросы: мероприятия, новости, справочники
-   **request**, произволльные запросы, согласно [справочника ISS](https://iss.moex.com/iss/reference/)

Типизация и текстовые подсказки есть.

[Подробнее про планы по реализации основных запросов и то, что уже реализовано](https://github.com/ArtMan-8/moex-iss-api/issues/4)

#### [MIT licensed](./LICENSE)
