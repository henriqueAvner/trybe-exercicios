localStorage.setItem ('name', 'Avner'); //salvando item no local storage;

let username = localStorage.getItem('name'); // salvando a chave name na variavel;

localStorage.removeItem('name'); // removendo a chave name do localStorage;

// -----

sessionStorage.setItem('darkmode', 'true'); //sessionStorage possui os mesmos comandos que o localStorage.

//Entretando, ao fechar a aba do navegador, diferente do localStorage, a chave e o valor são apagadas.


//função para deletar TODO O STORAGE:

localStorage.clear() // ela limpa tudo de localStorage;
sessionStorage.clear() // limpa tudo em localStorage;