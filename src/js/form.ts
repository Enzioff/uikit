import axios from "axios";

class Form {
    form;
    formErrors: (HTMLInputElement | HTMLTextAreaElement)[];
    elements;
    apiURL;
    sendButton;
    checkItem: HTMLInputElement;
    
    constructor(form: Element) {
        this.form = form;
        this.apiURL = this.form.getAttribute('action');
        this.elements = [
            ...Array.from(this.form.querySelectorAll('input')),
            ...Array.from(this.form.querySelectorAll('textarea'))
        ];
        this.sendButton = this.form.querySelector('button[type="submit"]');
        this.formErrors = [];
        this.checkItem = this.form.querySelector('[data-form-check]');
        
        this.init()
    }
    
    init() {
        if (this.checkItem) {
            this.updateAgreementStatus();
            this.checkItem.addEventListener('change', this.updateAgreementStatus.bind(this));
        }
        
        if (this.sendButton) {
            this.sendButton.addEventListener('click', (evt) => {
                evt.preventDefault();
                
                this.sendData(this.getData());
            });
        }
    }
    
    getData() {
        const formData = new FormData();
        
        this.updateElements()
        
        this.elements.forEach((el) => {
            if (el.hasAttribute('required') && el.value.length < 3) {
                el.classList.add('error');
                this.formErrors = [...this.formErrors, el]
            }
            
            if (el.type !== 'checkbox') {
                formData.append(el.name, el.value);
            }
        })
        
        return formData;
    }
    
    sendData(data: FormData) {
        if (this.formErrors.length > 0) return;
        
        axios.post(this.apiURL, data)
            .then(response => response.data)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    
    updateElements() {
        this.formErrors = [];
        
        this.elements.forEach((el) => {
            el.classList.remove('error');
        })
    }
    
    updateAgreementStatus() {
        if (!this.checkItem || !this.sendButton) return;
        
        if (this.checkItem.checked) {
            this.sendButton.removeAttribute('disabled');
        } else {
            this.sendButton.setAttribute('disabled', '');
        }
    }
}

export default Form;
