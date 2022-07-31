# Получение информации о торгуемых инструментах

типы, группы, коллекции ценных бумаг, и их спецификация

<hr />

### Получить список типов (тип) ценных бумаг

[/iss/securitytypes](http://iss.moex.com/iss/reference/132)<br />
[/iss/securitytypes/[securitytype]](http://iss.moex.com/iss/reference/133)

```
const args = {
	/** Группа ценных бумаг */
	securitytype: ESecurityTypes;
}

moexClient.security.getSecurityTypes(args?)
```

### Получить список групп (группу) ценных бумаг

[/iss/securitygroups](http://iss.moex.com/iss/reference/127)<br />
[/iss/securitygroups/[securitygroup]](http://iss.moex.com/iss/reference/128)

```
const params = {
	/** Скрыть неактивные группы */
	hide_inactive?: 0 | 1;
	/** Рынок торгов */
	trade_engine?: EEngines;
}

const args = {
	/** Группа ценных бумаг */
	securitygroup: ESecurityGroups;
	/** query-params */
	params?: params;
}

moexClient.security.getSecurityGroups(args?)
```

### Получить коллекции ценных бумаг входящие в группу

[/iss/securitygroups/[securitygroup]/collections](http://iss.moex.com/iss/reference/129)<br />
[/iss/securitygroups/[securitygroup]/collections/[collection]](http://iss.moex.com/iss/reference/130)

```
const args = {
	securitygroup: ESecurityGroups;
	collection?: string;
}

moexClient.security.getSecurityGroupCollection(args)
```

### [Получить список описания инструментов коллекции](http://iss.moex.com/iss/reference/131)

```
const params = {
	/** Поле, по которому сортируется ответ */
	sort_order?: string;
	/** Порядок сортировки */
	sort_order_desc?: "asc" | "desc";
	/** Номер строки, с которой возвращаются данные */
	start?: number;
}

const args = {
	/** Группа ценных бумаг */
	securitygroup: ESecurityGroups;
	/** Коллекция ценных бумаг входящие в группу */
	collection: string;
	/** query-params */
	params?: params;
}

moexClient.security.getSecurityGroupCollectionInfo(args)
```

<hr />

### [Получить список бумаг, торгуемых на MOEX](http://iss.moex.com/iss/reference/5)

```
const params = {
	/** Поиск инструмента */
	q?: string;
	/** Рынок торгов */
	engine?: EEngines;
	/** Торгуется бумага, или нет */
	is_trading?: 0 | 1;
	/** Рынок */
	market?: string;
	/** Количество выводимых инструментов */
	limit?: number;
	/** Номер строки, с которой возвращаются данные */
	start?: number;
	/** Группировать выводимый результат по полю. */
	group_by?: "type" | "group";
	/** Фильтровать по типам group или type	*/
	group_by_filter?: ESecurityTypes | ESecurityGroups;
}

moexClient.security.getSecurities(params?)
```

### [Получить спецификацию бумаги](http://iss.moex.com/iss/reference/13)

```
const params = {
	/** Номер строки, с которой возвращаются данные */
	start?: number;
}

const args = {
	/** secid */
	security: string;
	/** query-params */
	params?: params;
}

moexClient.security.getSecuritySpecification(args)
```

### [Получить список индексов, в которые входит бумага](http://iss.moex.com/iss/reference/160)

```
const params = {
	/** Получить индексы в базе которого бумага находится прямо сейчас */
	only_actual?: number;
}

const args = {
	/** Тикер бумаги */
	security: string;
	/** query-params */
	params?: params;
}

moexClient.security.getSecurityIndexes(args)
```

### [Получить агрегированные итоги торгов бумаги за дату по рынкам](http://iss.moex.com/iss/reference/214)

```
const params = {
	/** Дата за которую необходимо отобразить данные, в формате YYYY-MM-DD */
	date?: "last" | string;
}

const args = {
	/** Тикер бумаги */
	security: string;
	/** query-params */
	params?: params;
}

moexClient.security.getSecurityAggregateTradingResult(args)
```
