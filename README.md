# MOEX ISS API CLient for JS

<img src="https://img.shields.io/badge/</>-TypeScript-3178c6?style=flat&labelColor=262626">

Клиент для запросов к MOEX ISS.<br />

-   [Подробности по запросам на офф.сайте](https://iss.moex.com/iss/reference/)
-   [Руководство разработчика на офф.сайте](https://fs.moex.com/files/6523)

Планы по реализации основных запросов и, что реализовано находится в [ишью](https://github.com/ArtMan-8/moex-iss-api/issues/4)

## Установка

```
npm install --save moex-iss-api-client
```

### Пример использования

```
import { MoexClient } from "moex-iss-api-client";
// или
const MoexClient = require("moex-iss-api-client");


const moexClient = new MoexClient();

const response = await moexClient.info.getHandbooks();
```

### Реализованы базовые запросы информационные запросы

-   getHandbooks - глобальные справочники ISS
-   getEvents - список мероприятий биржи
-   getEventsDetail - подробности мероприятия биржи
-   getNews - список новостей биржи
-   getNewsDetail - подробности новости биржи
-   getTurnovers - сводные обороты по рынкам
-   getTurnoversColumns - описание полей для запросов оборотов по рынку/торговой системе

#### [MIT licensed](./LICENSE)
