# DNT-AP

Легковесная UI/UX библиотека для frontend разработки с TypeScript и SCSS.

## Установка

```bash
npm install dnt-ap
```

## Быстрый старт

### Импорт JavaScript компонентов

```javascript
// ES Modules
import { App, Form, Menu, init } from 'dnt-ap';

// Или автоматическая инициализация
import { init } from 'dnt-ap';
init();
```

```javascript
// CommonJS
const { App, Form, Menu, init } = require('dnt-ap');
init();
```

### Импорт стилей

#### Вариант 1: Готовый CSS (рекомендуется)

```javascript
// В вашем главном JS файле
import 'dnt-ap/styles';
```

Или в HTML:
```html
<link rel="stylesheet" href="node_modules/dnt-ap/dist/styles.css">
```

#### Вариант 2: SCSS (для кастомизации)

```scss
// В вашем SCSS файле
@use "dnt-ap/styles/scss" as *;

// Или импорт отдельных компонентов
@use "dnt-ap/styles/scss/ui/button" as *;
@use "dnt-ap/styles/scss/ui/input" as *;
```

## Использование компонентов

### Автоматическая инициализация

Библиотека автоматически найдет и инициализирует компоненты на странице:

```html
<!-- Меню -->
<button data-burger>☰</button>
<nav data-menu>
  <button data-menu-close>✕</button>
  <!-- содержимое меню -->
</nav>

<!-- Форма -->
<form data-form action="/api/submit">
  <input name="name" required>
  <textarea name="message" required></textarea>
  <input type="checkbox" data-form-check>
  <button type="submit">Отправить</button>
</form>
```

```javascript
import { init } from 'dnt-ap';
init(); // Автоматически найдет все компоненты
```

### Ручная инициализация

```javascript
import { App, Form, Menu } from 'dnt-ap';

// Инициализация всего приложения
const app = new App();

// Или отдельные компоненты
const menuElement = document.querySelector('[data-menu]');
const burgerElement = document.querySelector('[data-burger]');
const menu = new Menu(menuElement, burgerElement);

const formElement = document.querySelector('[data-form]');
const form = new Form(formElement);
```

## Компоненты

### Menu

Управление мобильным меню с бургер-кнопкой.

**HTML:**
```html
<button data-burger>Меню</button>
<nav data-menu>
  <button data-menu-close>Закрыть</button>
  <!-- навигация -->
</nav>
```

**JavaScript:**
```javascript
import { Menu } from 'dnt-ap';

const menu = new Menu(menuElement, burgerElement);
menu.openMenu();
menu.closeMenu();
```

### Form

Валидация и отправка форм с поддержкой согласия.

**HTML:**
```html
<form data-form action="/api/submit">
  <input name="email" type="email" required>
  <textarea name="message" required></textarea>
  <input type="checkbox" data-form-check>
  <button type="submit">Отправить</button>
</form>
```

**Особенности:**
- Автоматическая валидация обязательных полей (минимум 3 символа)
- Блокировка отправки без согласия (чекбокс `data-form-check`)
- Отправка через Axios на URL из атрибута `action`

### App

Главный класс, который автоматически инициализирует все компоненты на странице.

```javascript
import { App } from 'dnt-ap';

const app = new App(); // Найдет и инициализирует все компоненты
```

## Кастомизация стилей

### CSS переменные

Библиотека использует CSS переменные для легкой кастомизации:

```css
:root {
  --dnt-ap-c-background: #FFFFFF;
  --dnt-ap-c-black: #000000;
  --dnt-ap-container-width: 1240px;
  --dnt-ap-button-bg: #D9D9D9;
  /* и другие... */
}
```

### SCSS переменные и миксины

```scss
@use "dnt-ap/styles/scss" as *;

// Переопределение переменных
$font-main: 'Roboto', sans-serif;
$size-mobile: 768px;

// Использование миксинов
.my-component {
  @include response($size-mobile) {
    // стили для мобильных
  }
}
```

## Зависимости

Библиотека требует:
- **axios** - для отправки форм (должен быть установлен в вашем проекте)

```bash
npm install axios
```

## TypeScript

Библиотека полностью типизирована и включает TypeScript декларации:

```typescript
import { App, Form, Menu } from 'dnt-ap';

const app: App = new App();
```

## Браузерная поддержка

- Современные браузеры (Chrome, Firefox, Safari, Edge)
- IE11+ (с полифиллами при необходимости)

## Лицензия

MIT

## Репозиторий

https://github.com/Enzioff/uikit
