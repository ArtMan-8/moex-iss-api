# MOEX ISS API CLient for JS

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?labelColor=262626)](http://commitizen.github.io/cz-cli/) [![TypeScript](https://img.shields.io/badge/</>-TypeScript-3178c6?labelColor=262626)](https://www.typescriptlang.org/) [![npmjs](https://img.shields.io/badge/moex_iss_api_client-npmjs-cb0000?labelColor=262626)](https://www.npmjs.com/package/moex-iss-api-client)

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

// Проверка на получение ошибки, и получение её текста.
const errorMessage = response.issError;

// Получение данных
const data = response.data;
```

## [Подробная документация](./docs/main.md)

[Планы по реализации основных запросов и то, что уже реализовано](https://github.com/ArtMan-8/moex-iss-api/issues/4)

<hr />

#### [MIT licensed](./LICENSE)
