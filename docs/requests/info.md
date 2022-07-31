# Информационные запросы

мероприятия, новости, справочники

<hr />

### [Получить глобальные справочники](http://iss.moex.com/iss/reference/28)

```
moexClient.info.getHandbooks()
```

### [Получить список мероприятий](http://iss.moex.com/iss/reference/193)

```
const params = {
	/** смещение от начала */
	start?: number;
}

moexClient.info.getEvents(params)
```

### [Получить подробности мероприятия биржи](http://iss.moex.com/iss/reference/194)

```
const args = {
	/** Номер мероприятия */
	eventId: number;
}

moexClient.info.getEventsDetail(args)
```

### [Получить список новостей биржи](http://iss.moex.com/iss/reference/191)

```
const params = {
	/** смещение от начала */
	start?: number;
}

moexClient.info.getNews(params)
```

### [Получить подробности новости биржи](http://iss.moex.com/iss/reference/192)

```
const args = {
	/** номер новости */
	newsId: number;
}

moexClient.info.getNewsDetail(args)
```

### [Получить сводные обороты по рынкам](http://iss.moex.com/iss/reference/24)

```
const params = {
	/** Обороты за вечернюю сессию */
	is_tonight_session?: 0 | 1;
	/** Обороты за конкретную дату */
	date?: "today" | string;
}

moexClient.info.getTurnovers(params)
```

### [Получить описание полей для запросов оборотов по рынку/торговой системе](http://iss.moex.com/iss/reference/100)

```
moexClient.info.getTurnoversColumns()
```
