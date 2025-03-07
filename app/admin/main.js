const formFieldConfiguration = [
    {id: 'studentname', label: 'nev', type: 'text'},
    {id: 'studentaverage', label: 'atlag', type: 'text'},
    {id: 'studentcomment', label: 'Komment', type: 'text'},
    {id: 'studentbad', label: 'bad-e', type: 'checkbox', optional: true},
]

const manager = new Manager();
const formController = new FormController(manager, formFieldConfiguration);