class Table{
    #manager;

    constructor(manager){
        this.#manager = manager;
        const tbody = Gomszab.makeTableWithHeader(['Diák neve', 'Diák átlaga', 'Diák kommentár', 'Diák rossz?']);
        this.#manager.setAddAdminCallback(this.#adminCallback(tbody))
    }

    #adminCallback(tbodyElement){
       return (student) => {
            const tr = document.createElement('tr');
            tbodyElement.appendChild(tr);
            Gomszab.makeCellToRow(tr, student.name);
            Gomszab.makeCellToRow(tr, student.average);
            Gomszab.makeCellToRow(tr, student.comment);
            const bad = student.bad ? 'igen': 'nem';
            Gomszab.makeCellToRow(tr, bad);
        }
    }
}