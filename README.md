# MOEX ISS API CLient for JS

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?labelColor=262626)](http://commitizen.github.io/cz-cli/) [![TypeScript](https://img.shields.io/badge/</>-TypeScript-3178c6?labelColor=262626)](https://www.typescriptlang.org/)

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
import { createMoexCLient } from "moex-iss-api-client";
// или
const createMoexCLient = require("moex-iss-api-client");


const moexClient = createMoexCLient();

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
