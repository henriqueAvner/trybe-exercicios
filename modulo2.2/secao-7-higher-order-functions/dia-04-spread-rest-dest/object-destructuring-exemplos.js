//Object Desctructuring:

const perfilAvner = {
    nome: "avner",
    altura: 1.83,
    idade: 24,
    cor: "preto",
    ocupação: "dev"
};

const {nome, altura: height, idade: age, cor, ocupação} = perfilAvner;
console.log(nome);
console.log(height);
console.log(age);

// suponha que eu ja possua uma variavel 'nome' no sistema, eu posso renomeá-la dentro da minha alteração;

const {nome: perfil} = perfilAvner; //lembrando que posso fazer isso DENTRO da minha declaração acima, como no exemplo de altura e idade.
console.log(perfil);