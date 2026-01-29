class Menu {
    menu;
    menuCloseBtn;
    burger;
    
    constructor(menu: Element, burger: Element) {
        this.menu = menu;
        this.menuCloseBtn = this.menu.querySelector('[data-menu-close]');
        this.burger = burger;
        
        this.init();
    }
    
    init() {
        if (!this.burger) return;
        this.burger.addEventListener("click", this.openMenu.bind(this));
        
        if (!this.menuCloseBtn) return;
        this.menuCloseBtn.addEventListener("click", this.closeMenu.bind(this));
    }
    
    openMenu():void {
        this.menu.classList.toggle('active');
        this.burger.classList.toggle('active');
    }
    
    closeMenu():void {
        this.menu.classList.remove('active');
        this.burger.classList.remove('active');
    }
}

export default Menu;
