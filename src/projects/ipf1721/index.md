---
title: Доработки сайта ИПФ
date: 2024-10-26T16:47:46.035Z
start_date: 2024-03-07
end_date: 2024-07-29
is_part_time: true
lang: ru
preview: ./cover.png
cover_image: ./cover.png
customer: Петродворцовый Часовой Завод
customer_address: Санкт-Петербург, Россия
live_site:
  - ipf1721.ru
  - ipf1721.com
site_type:
  - интернет-витрина
  - сайт производителя
industry:
  - производство часов
services:
  - фронтенд разработка
  - бэкенд разработка
  - full-stack разработка
tools:
  - Gatsby
  - React
  - TypeScript
  - Styled-system
  - Puppeteer
  - NestJS
  - Node.js
  - Figma
  - Github Actions
  - Docker
  - Caddy
  - Netlify
  - TypeORM
  - PostgreSQL
pull_requests: 21
---

Императорская Петергофская Фабрика (ИПФ) является подразделением Петродворцового Часового Завода (ПЧЗ), и производит эксклюзивные часы ручной работы. Часы декорируются натуральными камнями на выбор заказчика, а корпуса выполняются исключительно из золота. На сайте производителя представлен конфигуратор, который позволяет подобрать различные комбинации камня, корпуса, циферблата, ремня, а также дополнительно заказать запонки и гравировку собственных инициалов на оборотной стороне часов. Завод славится давней историей, и недавно отметил свой 300-летний юбилей.

В этом проекте, совместно с диджитал-агенством <a href="https://vpene.ru" rel="noreferrer nofollow" target="_blank">Pena</a>, я помогал клиенту дорабатывать сайт, написанный на фреймворке Gatsby. Изменения затрагивали как клиентскую, так и серверную части. Таким образом в данном проекте я выступил в роли full-stack разработчика.

Доработки сайта заключались в следующем:

- обновить дизайн сайта по макетам заказчика
- реализовать механизм "плавающей" шапки сайта
- реализовать раздел с запонками в конфигураторе
- обновить шаблон PDF-презентации, генерируемой по запросу пользователя
- реализовать сохранение заказов и подписок в сторонний сервис
- реализовать требования закона 152-ФЗ в части обработки персональных данных
- исправить: данные по UTM-меткам не уходили в Метрику

## Сложности

Некоторые сложности заключались в довольно непростой конфигурации проекта, а также необходимости освоить новые технологии, такие как `NestJS`, `TypeORM`, `PostgreSQL`, `Caddy`, `styled-system`.

## Результаты

В ходе работы над проектом были реализованы требования клиента в обозначенные сроки. Также были изучены новые технологии.

Также клиенту были предложены и реализованы некоторые улучшения, такие как отказ от использования `GatsbyLink` в пользу использования традиционных ссылок ([подробнее](/posts/2024-03-05-gatsby-link-default/)).

<a href="https://ipf1721-ru.ermakovich.ru" rel="nofollow" target="_blank">Дамп сайта (июль 2024)</a>