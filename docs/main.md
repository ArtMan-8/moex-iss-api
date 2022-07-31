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
