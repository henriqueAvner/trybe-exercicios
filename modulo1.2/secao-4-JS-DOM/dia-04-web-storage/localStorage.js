localStorage.setItem('filme', 'Inseption');
let recoveryStorage = localStorage.getItem('filme');
console.log(typeof recoveryStorage);


// ----



localStorage.setItem('number', 10);
let recoveryNumber = parseInt(localStorage.getItem('number'));
console.log(typeof recoveryNumber);


//Local storage só armazena em formato de string

//no exemplo, para retornar um "number", utilizamos o comando parseInt

// ----

const favoriteMovie = {

    filme: 'Madagascar'
}

localStorage.setItem('objeto', favoriteMovie);
let recoveryObject = localStorage.getItem('objeto');
console.log(recoveryObject);
//dessa maneira, ele armazena o objeto em formato de objeto, porém, queremos armazenar no formato de string, pois é o padrao do localStorage.


localStorage.setItem('objeto', JSON.stringify(favoriteMovie));
let recoveryObject2 = JSON.parse(localStorage.getItem('objeto'));
console.log(recoveryObject2);
console.log(typeof recoveryObject2); //retorna como string.

// o comando JSON.stringfy armazena o objeto no formato de string no localStorage.

//o JSON.parse na linha 33 também transforma no formato de origem.

// -----

