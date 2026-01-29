// Главная точка входа библиотеки
import App from '../js/app';
import Form from '../js/form';
import Menu from '../js/menu';

export { App, Form, Menu };

// Инициализация по умолчанию (опционально)
export function init() {
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        new App();
      });
    } else {
      // DOM уже загружен
      new App();
    }
  }
}

// Default export для обратной совместимости
export default {
  App,
  Form,
  Menu,
  init
};

