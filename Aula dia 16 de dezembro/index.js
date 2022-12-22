const animais = ["cachorro", "gato", "papagaio", "gambá"];


animais.forEach(elemento => console.log(elemento));

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((elemento) => {
    console.log(elemento + 1)
}
);



const funcionarios = ['Fabiano', 'Marcos', 'Gambá'];

const matriculas = ['f3145656', 'f5644563', 'f4325647'];


// for(let i = 0; i < funcionarios.length; i++){
//     console.log('Funcionário: ' + funcionarios[i] + ' Matrícula: ' + matriculas[i]);
// }

// let funcionario = {
//     nome: "Francisco",
//     matricula: "F3333333",
//     dependencia: "Rerop-Recife",
//     endereco: "Rua das Condongas, 666",
// }

// console.log(funcionario);

// console.log(funcionario.nome);

// console.log(funcionario['nome']);


class Funcionario {
    nome;
    matricula;
    dependencia;
    endereco;

    constructor(nomeRecebido, matriculaRecebida, dependenciaRecebida, enderecoRecebido) {
        this.nome = nomeRecebido;
        this.matricula = matriculaRecebida;
        this.dependencia = dependenciaRecebida;
        this.endereco = enderecoRecebido;
    }
}

let funcionario = new Funcionario("Francisco", "F3333333", "Rerop-Recife", "Rua das Condogas");



class FuncionarioContratado extends Funcionario {
    tipoDeContrato;
    tempoDeContrato;
    constructor(nomeRecebido, matriculaRecebida, dependenciaRecebida, enderecoRecebido, tipoDeContratoRecebido, tempoDeContratoRecebido) {
        super(nomeRecebido, matriculaRecebida, dependenciaRecebida, enderecoRecebido);
        this.tipoDeContrato = tipoDeContratoRecebido;
        this.tempoDeContrato = tempoDeContratoRecebido
    }
}


let funcionarioContratado = new FuncionarioContratado("Francisco", "F3333333", "Rerop-Recife", "trimestral", "3 meses");

// console.log(funcionarioContratado);

// function FuncionarioFunc(nome, matricula, dependencia, endereco) {
//     this.nome = nome;
//     this.matricula = matricula;
//     this.dependencia = dependencia;
//     this.endereco = endereco;
// }

// const func = new FuncionarioFunc("João", 12, "dependencia", "endereço");
// console.log(func);






