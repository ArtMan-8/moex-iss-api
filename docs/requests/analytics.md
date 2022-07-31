# Аналитические запросы

futoi, netflow2, ставки

<hr />

### [Получить futoi](http://iss.moex.com/iss/reference/807)

```
const params = {
	/** Дата в формате YYYY-MM-DD */
	date?: "today" | string;
	/** Последний срез за день, "1" - включить */
	latest?: 0 | 1;
	/** По умолчанию - full */
	table_type?: "full" | string;
}

moexClient.analytics.getFutoi(params)
```

### [Получить конкретные futoi](http://iss.moex.com/iss/reference/809)

```
const params = {
	/** Дата в формате YYYY-MM-DD начиная с которой отдаются данные */
	from?: string;
	/** Дата в формате YYYY-MM-DD которой будет заканчиваться интервал */
	till?: string;
	/** Последний срез за день, "1" - включить */
	latest?: 0 | 1;
}

const args = {
	security: string;
	/** query-params */
	params?: params;
}

moexClient.analytics.geTGetFutoiSecurity(args)
```

### [Получить netflow2](http://iss.moex.com/iss/reference/767)

```
const params = {
	/** Дата в формате YYYY-MM-DD */
	date?: "today" | string;
}

moexClient.analytics.getNetflow2(params)
```

### [Получить конкретные netflow2](http://iss.moex.com/iss/reference/769)

```
const params = {
	/** Дата в формате YYYY-MM-DD начиная с которой отдаются данные */
	from?: string;
	/** Дата в формате YYYY-MM-DD которой будет заканчиваться интервал */
	till?: string;
}

const args = {
	security: string;
	/** query-params */
	params? params;
}

moexClient.analytics.getNetflow2Security(args)
```

### [Получить будущие ставки](http://iss.moex.com/iss/reference/859)

```
const params = {
	/** Дата в формате YYYY-MM-DD */
	date?: "today" | string;
	time?: "string";
}

moexClient.analytics.getCurves(params)
```

### [Получить будущие ставки по конкретному инструменту](http://iss.moex.com/iss/reference/861)

```
const params = {
	/** Дата в формате YYYY-MM-DD начиная с которой отдаются данные */
	from?: string;
	/** Дата в формате YYYY-MM-DD которой будет заканчиваться интервал */
	till?: string;
}

const args = {
	security: string;
	/** query-params */
	params?: params;
}

moexClient.analytics.getCurvesSecurity(args)
```
