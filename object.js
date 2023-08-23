//primeira forma
const pessoa = {
    nome: 'seuNome',
    sobrenome: 'seuSobrenome'
};

//segunda forma com construtor - "Muito trabalho"

const pessoa = new pessoa();
pessoa.nome = 'Fulano';
pessoa.sobrenome = 'de tal';


//Aprimorando 
function pessoa(primeiroNome, sobrenome){
    this.nome = primeiroNome;
    this.sobrenome = sobrenome;
}

const pessoaUm = new pessoa('Maria','de tal');
const pessoaDois = new pessoa('José','de tal');