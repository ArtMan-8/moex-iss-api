# Создание клиента

```
import { createMoexCLient } from "moex-iss-api-client";

const moexClient = createMoexCLient();
const response = await moexClient.info.getHandbooks();

// Проверка на получение ошибки, и получение её текста.
const errorMessage = response.issError;

// Получение данных
const data = response.data;
```

### Опции клиента, при создании

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

<hr />

## Группы запросов

Типизация и текстовые подсказки есть.

-   **[request](./requests/request.md)**, произвольные запросы

-   **[analytics](./requests/analytics.md)**, аналитические запросы: futoi, netflow2, ставки

-   **[info](./requests/info.md)**, информационные запросы: мероприятия, новости, справочники

-   **[security](./requests/security.md)**, получение информации о торгуемых инструментах
