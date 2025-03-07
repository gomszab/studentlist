class Manager{
    #array;
    #selectCallback;
    #addCallback;
    #addAdminCallback;

    constructor(){
        this.#array = [];
        this.#addAdminCallback = () => {}
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    setSelectCallback(callback){
        this.#selectCallback=callback;
    }

    setAddAdminCallback(callback){
        this.#addAdminCallback = callback;
    }

    add(student){
        this.#array.push(student);   
        this.#addAdminCallback(student);
    }

    select(student){
        this.#selectCallback(student);
    }

    render(){
        for(const student of this.#array){
            this.#addCallback(student);
        }
    }
}