import Menu from "./menu";
import Form from "./form";

class App {
    constructor() {
        this.init()
    }
    
    init() {
        this.createMenu();
        this.createForm();
    }
    
    createMenu() {
        const menu = document.querySelector('[data-menu]');
        const burger = document.querySelector('[data-burger]');
        
        if (!menu || !burger) return;
        
        new Menu(menu, burger)
    }
    
    createForm() {
        const forms = document.querySelectorAll('[data-form]');
        
        if (!forms) return;
        
        forms.forEach(form => {
            new Form(form);
        })
    }
}

export default App;
