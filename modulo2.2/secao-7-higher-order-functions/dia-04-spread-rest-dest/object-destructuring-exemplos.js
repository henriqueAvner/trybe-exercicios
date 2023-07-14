//Object Desctructuring:

const perfilAvner = {
    nome: "avner",
    altura: 1.83,
    idade: 24,
    cor: "preto",
    ocupação: "dev"
};

const {nome, altura: height, idade: age, cor, ocupação} = perfilAvner;

// A partir disso, ao inves de acessar o valor por "perfilAvner.nome", agora eu posso acessar por apenas "nome".

console.log(nome);
console.log(height);
console.log(age);

// suponha que eu ja possua uma variavel 'nome' no sistema, eu posso renomeá-la dentro da minha alteração;

const {nome: perfil} = perfilAvner; //lembrando que posso fazer isso DENTRO da minha declaração acima, como no exemplo de altura e idade.
console.log(perfil);

// Para objetos, dentro de objetos, temos que desetrutura-los dessa maneira:

const perfilAvner2 = {
    perfil:{
        name: 'avner',
        sobrenome: 'henrique',
        altura: 1.83
    },
    decendencia: 'preto',
    localidade:{
        rua: 'zurick',
        bairro:'europa',
        cidade:'contagem'
    }
}

//A desestruturação ocorre da seguinte maneira:

const{
    perfil:{
        name, sobrenome, altura
    },
    decendencia,
    localidade:{
        rua, bairro, cidade
    }
} = perfilAvner2
// Dessa forma, consigo desestruturar meus objetos dentro de objetos.

// além disso, agora eu posso atribuir valores das propriedades a variáveis, que foram antes desestruturadas, por exemplo:

const mydecendation = decendencia;
const endereco = rua;

console.log(endereco);
console.log(mydecendation);