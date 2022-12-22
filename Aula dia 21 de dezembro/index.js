// for in
// for of


const arr = [1,2,3,4,5];


// for(index in arr){
//     console.log(index, arr[index]);
// }

// for(valor of arr){
//     console.log(valor);
// }


//funções

//helloWorld();

function helloWorld() {
    console.log('Hello World!');
}

function greetings(...variavel) {
    console.log(`Hello ${variavel[0]} de ${variavel[1]} / ${variavel[2]}`);
}

function greetings02({nome, cidade, pais} = {}) {
    console.log(`Hello ${nome} de ${cidade} / ${pais}`);
}

//greetings('Francisco', 'Recife', 'Brasil');

//greetings02({nome: 'Francisco', cidade: 'Recife', pais:'Brasil'});



function somar(numero01, numero02="11",numero03) {
    return numero01 + numero02 + numero03;
}



let soma = somar(5,null, 5);

console.log(soma);


const nomes = ['Francisco', 'Fabiano', 'Eduardo'];

const francisco = nomes.find(function(nome){
    return nome == 'Francisco';
});

console.log(francisco);

const somar02 = (numero01, numero02) => numero01 + numero02;


console.log(somar02(10,20));

const nomeDaFuncao = () => {
    console.log("arrow function");
}

function nomeDaFuncao02() {
    console.log("normal function");
}


// Faça uma função calculaBonus que receba como parâmetro o salário de uma pessoa e seu tempo de trabalho e retorna o valor de seu bônus anual de acordo com as seguintes regras:

// menos de 1 ano: 0% do salário
// entre 1 e 4 anos: 5% do salário
// de 4 a 7 anos: 10% do salário
// mais de 7 anos: 15% do salário


// Faça uma função que recebe o capital inicial de uma aplicação, sua taxa mensal de juros (em %), a quantidade de meses que o dinheiro ficará aplicado e retorna o valor total a ser resgatado ao final do período.







