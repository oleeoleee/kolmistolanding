# Brand Template Guide

Текущая рабочая версия LADA / КОЛМИ сохранена как базовый шаблон. Основная идея: UI и логика страницы остаются прежними, а брендозависимые данные лежат в одном месте и могут быстро заменяться.

## Где лежит базовый шаблон

- Активный бренд: [frontend/src/content/brand.ts](/Users/main/kolmisto%2014.32.09/kolmistolanding/frontend/src/content/brand.ts)
- Текущий эталонный бренд LADA: [frontend/src/content/brands/lada.ts](/Users/main/kolmisto%2014.32.09/kolmistolanding/frontend/src/content/brands/lada.ts)
- Типы конфигурации: [frontend/src/content/brand-types.ts](/Users/main/kolmisto%2014.32.09/kolmistolanding/frontend/src/content/brand-types.ts)
- Совместимость со старым импортом: [frontend/src/app/site-content.ts](/Users/main/kolmisto%2014.32.09/kolmistolanding/frontend/src/app/site-content.ts)

## Что считается брендозависимым

- логотипы и их файлы
- оптические размеры логотипов в lockup
- название бренда / дилера / города
- SEO title / description
- hero headline и оффер
- короткое mobile hero-описание
- trust-строки под hero
- список услуг
- trust-блок преимуществ
- шаги записи
- телефон
- адрес и короткий адрес
- часы работы
- ссылка на маршрут
- ссылка на политику
- webhook формы
- footer summary
- брендовые цветовые токены
- favicon / og image при необходимости

## Какие поля менять обязательно

В новом бренд-файле обязательно проверьте и заполните:

- `seo`
- `theme`
- `logos.primary`
- `logos.secondary`
- `dealerProfile`
- `hero`
- `form.serviceOptions`
- `trustSection`
- `processSection`
- `quickContact`
- `footer`

## Какие поля можно оставить без изменений

Обычно можно не менять, если сценарий у новой СТО похож:

- `form.contactWindowOptions`
- generic тексты формы
- подписи legal/privacy внутри формы
- тексты кнопок `Позвонить`
- структура секций и порядок блоков

## Как быстро сделать новую версию за 10–20 минут

1. Скопируйте [frontend/src/content/brands/lada.ts](/Users/main/kolmisto%2014.32.09/kolmistolanding/frontend/src/content/brands/lada.ts) в новый файл, например `frontend/src/content/brands/uaz.ts`.
2. Замените в новом файле брендовые данные:
   - SEO
   - логотипы
   - hero-тексты
   - услуги
   - преимущества
   - шаги
   - контакты
   - цвета
   - webhook
3. Положите новые логотипы в `frontend/public/images/logos`.
4. В [frontend/src/content/brand.ts](/Users/main/kolmisto%2014.32.09/kolmistolanding/frontend/src/content/brand.ts) переключите активный импорт на новый бренд.
5. При необходимости замените `frontend/src/app/favicon.ico`.
6. Проверьте страницу локально и запустите `npm run lint && npm run build`.

## Быстрый чек-лист замен

- заменить логотип бренда
- заменить логотип дилера
- проверить оптический размер обоих логотипов
- заменить название бренда
- заменить название дилера
- заменить город
- заменить hero headline
- заменить hero offer / mobile offer
- заменить trust-строки под hero
- заменить список услуг
- заменить trust-блок преимуществ
- заменить шаги записи
- заменить телефон и `tel:`
- заменить адрес и короткий адрес
- заменить часы работы
- заменить ссылку на маршрут
- заменить webhook формы
- заменить footer summary
- заменить SEO title/description
- проверить брендовые цвета
- проверить favicon / og image при наличии

## Где что применяется в интерфейсе

- `layout.tsx`
  - глобальные meta title / description
  - theme color
  - CSS variables для текущего бренда
- `page.tsx`
  - логотипы
  - hero
  - trust-блок
  - шаги
  - контакты
  - footer
- `service-booking-form.tsx`
  - услуги
  - ссылка на политику
  - endpoint формы
- `privacy/page.tsx`
  - брендовая meta-информация
  - brand line / dealer name

## Примечание по цветам

Сложной системы темизации здесь нет. Цвета подаются через CSS variables из активного бренда в `layout.tsx`. Это сделано специально: достаточно заменить значения в `theme`, и весь существующий UI подхватит новый бренд без переписывания классов.
