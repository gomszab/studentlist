class FormController{
    #manager;
    #formFieldArray;

    constructor(manager, formFieldarray){
        this.#manager = manager;
        this.#formFieldArray = []
        
        const form = document.createElement('form');
        document.body.appendChild(form);

        for(const config of formFieldarray){
            const formField = new FormField(config.id, config.label, config.type, config.optional);
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getDivElement());
        }
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Hozzáadás';
        form.appendChild(submitButton);
        form.addEventListener('submit', this.#submitCallback());
    }

    #submitCallback(){
        return (e)=>{
            e.preventDefault();
            if(this.#validateFields()){
                const value = this.#getValueObject();
                const student = new Student(value.studentname, value.studentaverage, value.studentcomment, value.studentbad);
                this.#manager.add(student);
                e.target.reset();
            }
        }
    }

    #validateFields(){
        let valid = true;
        for(const formField of this.#formFieldArray){
            formField.error = '';
            if(!formField.optional){
                if(formField.value === ''){
                    formField.error = 'A mező kitöltése kötelező';
                    valid = false;
                }
            }
        }
        return valid;
    }

    #getValueObject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        return result;
    }

}

class FormField{
    #id;
    #type;
    #optional;
    #inputElement;
    #labelElement;
    #errorField;

    get id(){
        return this.#id;
    }

    get optional(){
        return this.#optional;
    }

    get value(){
        if(this.#type==='checkbox'){
            return this.#inputElement.checked;
        }
        return this.#inputElement.value;
    }

    set error(value){
        this.#errorField.textContent=value;
    }

    constructor(id, labelContent, type, optional=false){
        this.#id = id;
        this.#type = type;
        this.#optional = optional;
        this.#labelElement = Gomszab.makeLabel(id, labelContent);
        this.#inputElement = Gomszab.makeInput(id, type);
        this.#errorField = Gomszab.makeErrorField();
    }

    getDivElement(){
        const div = Gomszab.makeDiv([this.#labelElement, this.#inputElement, this.#errorField]);
        return div;
    }
}