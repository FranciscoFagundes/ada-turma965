// Calcule a soma dos itens do carrinho. aplique uma taxa de 15 reais de frete e imprima o total formatado em reais.

// const carrinho = [
//   {
//     produto: "Camisa branca:",
//     quantidade: 4,
//     valorDaUnidade: 25.50,
//   },
//   {
//     produto: "Calça jeans:",
//     quantidade: 2,
//     valorDaUnidade: 180.25,
//   },
//   {
//     produto: "Jaqueta",
//     quantidade: 1,
//     valorDaUnidade: 299.99,
//   },
//   {
//     produto: "Tênis de Corrida",
//     quantidade: 1,
//     valorDaUnidade: 150.50,
//   },
//   {
//     produto: "Par de meias",
//     quantidade: 3,
//     valorDaUnidade: 15.00,
//   },
//   {
//     produto: "Relógio esportivo",
//     quantidade: 1,
//     valorDaUnidade: 350.00,
//   },
// ]



// let idade = 17;


// if(idade == 18) {
//     console.log('Já pode dirigir mas ainda falta experiência');
// } else if(idade < 18){
//     console.log('Precisa envelhecer um pouco mais');
// } else {
//     console.log("Já pode dirigir");
// }


// let booleano = true;

// if(booleano)
//     console.log("True");
// else
//     console.log("False");

// if (booleano) console.log("true");


//console.log( 10 != "10");

// Truthy e Falsy


// 0, undefined, null, NaN, ""




// let sinal = 'azul';


// switch (sinal) {
//     case 'verde':
//         console.log('pode passar');
//         break;
//     case 'amarelo':
//         console.log('atenção');
//         break;
//     case 'vermelho':
//     case 'vermelho02':
//     case 'vermelho03':
//         console.log('não pode passar');
//         break;
//     default:
//         console.log('sinal com defeito');
//         break;
// }


// let vetor = [0,0,0,0]
// vetor = vetor.map((_,index) => index)
// console.log(vetor)


// let estaChovendo = null;
// let estaCalor = false;


// //console.log(estaChovendo ? 'fico em casa' : estaCalor ? 'vou à praia' : 'vou ao shopping');


// console.log(estaChovendo ?? 'fico em casa' );



let count = 0;

while(count < 10) {
    console.log('Olá mundo');
    count++;
}



let numeroDigitado = "";

do {
    numeroDigitado = prompt("Digite um número de 0 a 10:");
}
while(numeroDigitado > 10 );





