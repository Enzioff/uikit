declare class Form {
    form: Element;
    formErrors: (HTMLInputElement | HTMLTextAreaElement)[];
    elements: (HTMLInputElement | HTMLTextAreaElement)[];
    apiURL: string;
    sendButton: Element;
    checkItem: HTMLInputElement;
    constructor(form: Element);
    init(): void;
    getData(): FormData;
    sendData(data: FormData): void;
    updateElements(): void;
    updateAgreementStatus(): void;
}
export default Form;
//# sourceMappingURL=form.d.ts.map