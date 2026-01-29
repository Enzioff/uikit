/**
 * Пример интеграции DNT-AP в проект с Webpack
 */

// 1. Импорт JavaScript компонентов
import { App, Form, Menu, init } from 'dnt-ap';

// 2. Импорт стилей (CSS)
import 'dnt-ap/styles';

// Или импорт SCSS для кастомизации
// import 'dnt-ap/styles/scss';

// 3. Автоматическая инициализация всех компонентов
init();

// Или ручная инициализация отдельных компонентов
/*
const menuElement = document.querySelector('[data-menu]');
const burgerElement = document.querySelector('[data-burger]');
if (menuElement && burgerElement) {
    const menu = new Menu(menuElement, burgerElement);
}

const formElements = document.querySelectorAll('[data-form]');
formElements.forEach(formElement => {
    const form = new Form(formElement);
});
*/

// Или использование главного класса App
/*
const app = new App();
*/

