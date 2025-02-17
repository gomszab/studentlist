class Area{
    #div;

    get div(){
        return this.#div;
    }

    constructor(className){
        const container = this.#getContainer();
        this.#div = document.createElement('div');
        this.#div.className = className;
        container.appendChild(this.#div);
    }

    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div');
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }
}

class StudentArea extends Area{

    constructor(className){
        super(className);
    }
}

class DetailsArea extends Area{
    constructor(className){
        super(className);
    }
}