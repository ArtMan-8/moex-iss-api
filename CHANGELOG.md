# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.4.2](https://github.com/ArtMan-8/moex-iss-api/compare/v0.4.1...v0.4.2) (2024-07-13)


### Bug Fixes

* итерирование по объекту надо делать через Object.entries ([0305e51](https://github.com/ArtMan-8/moex-iss-api/commit/0305e515f29fec9c67f40f872d881618e26ed835))

### [0.4.1](https://github.com/ArtMan-8/moex-iss-api/compare/v0.4.0...v0.4.1) (2024-06-17)


### New Features

* **request:** добавил возможность передачи параметров в request ([4760014](https://github.com/ArtMan-8/moex-iss-api/commit/4760014d00a4a54da7816abc7aeff6d5f6806490)), closes [#35](https://github.com/ArtMan-8/moex-iss-api/issues/35)
* **request:** добавить возможность указания формата запроса клиентом ([9d504f5](https://github.com/ArtMan-8/moex-iss-api/commit/9d504f561b900eeeb6647feb62778af2ea21994a))

## [0.4.0](https://github.com/ArtMan-8/moex-iss-api/compare/v0.2.1...v0.4.0) (2022-07-31)


### New Features

* **analitics:** добавить запросы к аналитике futoi ([3117a69](https://github.com/ArtMan-8/moex-iss-api/commit/3117a696b50fb24f3f48f03e6050d6f222d993cb)), closes [#10](https://github.com/ArtMan-8/moex-iss-api/issues/10)
* **analitics:** добавить запросы к аналитике netflow2 ([b739ceb](https://github.com/ArtMan-8/moex-iss-api/commit/b739ceb828f313f6837d39d072cd2d6abfc02470)), closes [#11](https://github.com/ArtMan-8/moex-iss-api/issues/11)
* **analitics:** добавить запросы к будущим ставкам ценообразования ([5ab413b](https://github.com/ArtMan-8/moex-iss-api/commit/5ab413beca0b3d0d4d05c5145413f56db7bcf047)), closes [#9](https://github.com/ArtMan-8/moex-iss-api/issues/9)
* **api:** добавить обработку сообщения ошибки от ISS ([92e616f](https://github.com/ArtMan-8/moex-iss-api/commit/92e616f28e4ab4a0e70f6ca6483b9f6916c4234d))
* **client:** реализовать произвольные запросы, согласно справочника MOEX ISS ([4fc031c](https://github.com/ArtMan-8/moex-iss-api/commit/4fc031cc3c47e08c527815ca86cf3647aca33e13))
* **security:** добавить запросы для получения агрегированных итогов торгов, за дату по рынкам ([e57f5fe](https://github.com/ArtMan-8/moex-iss-api/commit/e57f5fe3dc220e60a6870fe168759ee336199519)), closes [#26](https://github.com/ArtMan-8/moex-iss-api/issues/26)
* **security:** добавить запросы для получения групп/группы ценных бумаг ([13315b8](https://github.com/ArtMan-8/moex-iss-api/commit/13315b8b91501138e764fb14e5960dc891cb8ca6)), closes [#14](https://github.com/ArtMan-8/moex-iss-api/issues/14) [#15](https://github.com/ArtMan-8/moex-iss-api/issues/15)
* **security:** добавить запросы для получения коллекции ценных бумаг, входящие в группу ([d060e53](https://github.com/ArtMan-8/moex-iss-api/commit/d060e533a86191e84a9fac88b5c0d610565bbad9)), closes [#19](https://github.com/ArtMan-8/moex-iss-api/issues/19)
* **security:** добавить запросы для получения описания инструментов, входящих в коллекцию ([bf10afc](https://github.com/ArtMan-8/moex-iss-api/commit/bf10afc045b0a0587539e7557728dcc8500849f5)), closes [#21](https://github.com/ArtMan-8/moex-iss-api/issues/21)
* **security:** добавить запросы для получения спецификации бумаги ([58f472d](https://github.com/ArtMan-8/moex-iss-api/commit/58f472da801b7ba043648849e5207b2dd777616f)), closes [#24](https://github.com/ArtMan-8/moex-iss-api/issues/24)
* **security:** добавить запросы для получения списка индексов, в которые входит бумага ([822ca62](https://github.com/ArtMan-8/moex-iss-api/commit/822ca629aca01c9ee4e05730dc1db1ebddd7afa8)), closes [#25](https://github.com/ArtMan-8/moex-iss-api/issues/25)
* **security:** добавить запросы для получения списка торгуемых бумаг на MOEX ([3a3da30](https://github.com/ArtMan-8/moex-iss-api/commit/3a3da30f5a071096e67dba55025fa110afc2f0ca)), closes [#23](https://github.com/ArtMan-8/moex-iss-api/issues/23)
* **security:** добавить запросы для получения типов/типа ценных бумаг ([3276a41](https://github.com/ArtMan-8/moex-iss-api/commit/3276a41236135cf879c0d5fdfd2a9a88df6768a7)), closes [#16](https://github.com/ArtMan-8/moex-iss-api/issues/16) [#17](https://github.com/ArtMan-8/moex-iss-api/issues/17)


### Documentation

* **docs:** добавить документацию по запросам - request, analitics, info, security ([479e353](https://github.com/ArtMan-8/moex-iss-api/commit/479e353d6a2e1dd7dd4bd14b26c069f317e36235)), closes [#28](https://github.com/ArtMan-8/moex-iss-api/issues/28)
* **readme:** обновить описание проекта ([67c273d](https://github.com/ArtMan-8/moex-iss-api/commit/67c273d6495f18752647aa6b2601080b0b8910e9))
* **readme:** обновить readme ([99a8271](https://github.com/ArtMan-8/moex-iss-api/commit/99a827199572d55581f02d51f2726f848f7c7b1a))

## [0.3.0](https://github.com/ArtMan-8/moex-iss-api/compare/v0.2.1...v0.3.0) (2022-07-02)


### New Features

* **analitics:** добавить запросы к аналитике futoi ([3117a69](https://github.com/ArtMan-8/moex-iss-api/commit/3117a696b50fb24f3f48f03e6050d6f222d993cb)), closes [#10](https://github.com/ArtMan-8/moex-iss-api/issues/10)
* **analitics:** добавить запросы к аналитике netflow2 ([b739ceb](https://github.com/ArtMan-8/moex-iss-api/commit/b739ceb828f313f6837d39d072cd2d6abfc02470)), closes [#11](https://github.com/ArtMan-8/moex-iss-api/issues/11)
* **analitics:** добавить запросы к будущим ставкам ценообразования ([5ab413b](https://github.com/ArtMan-8/moex-iss-api/commit/5ab413beca0b3d0d4d05c5145413f56db7bcf047)), closes [#9](https://github.com/ArtMan-8/moex-iss-api/issues/9)
* **api:** добавить обработку сообщения ошибки от ISS ([92e616f](https://github.com/ArtMan-8/moex-iss-api/commit/92e616f28e4ab4a0e70f6ca6483b9f6916c4234d))
* **client:** реализовать произвольные запросы, согласно справочника MOEX ISS ([4fc031c](https://github.com/ArtMan-8/moex-iss-api/commit/4fc031cc3c47e08c527815ca86cf3647aca33e13))


### Documentation

* **readme:** обновить описание проекта ([67c273d](https://github.com/ArtMan-8/moex-iss-api/commit/67c273d6495f18752647aa6b2601080b0b8910e9))

### [0.2.1](https://github.com/ArtMan-8/moex-iss-api/compare/v0.2.0...v0.2.1) (2022-06-26)

## 0.2.0 (2022-06-25)


### New Features

* добавить типы ([40ccafb](https://github.com/ArtMan-8/moex-iss-api/commit/40ccafbaba890b00cac4e6e3c93ae95449f005cc))
* настроить проект ([6131c22](https://github.com/ArtMan-8/moex-iss-api/commit/6131c22d4208085064359e878d4ef3f0ce3219ad))
* **moexclient:** добавить новые запросы (resolve [#5](https://github.com/ArtMan-8/moex-iss-api/issues/5), resolve [#6](https://github.com/ArtMan-8/moex-iss-api/issues/6), resolve [#7](https://github.com/ArtMan-8/moex-iss-api/issues/7)) ([f99e527](https://github.com/ArtMan-8/moex-iss-api/commit/f99e527bd618147274672bdf67ff91cabc40f7dd))
* **moexclient:** добавить первый запрос - глобальные справочники ([93497aa](https://github.com/ArtMan-8/moex-iss-api/commit/93497aaff5463f299df85223e2d52d9d0da9eba2))


### Documentation

* **readme:** обновить readme ([a85e90c](https://github.com/ArtMan-8/moex-iss-api/commit/a85e90c58ebe8e52970e2a3cf424fc9b883574bc))
