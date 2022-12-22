let animal = "cachorro";

let animais = ['cachorro', 'gato', 'papagaio', 'vaca', 'gambá'];

let coisas = ['cadeira', 2 , false, {}];


// console.log(animais[1]);

// console.log(coisas[2]);

// console.log(coisas[0]);


// console.log('Tamanho do array animais: ', animais.length);

// console.log(animais); 

// animais.push('onça');

// console.log('Tamanho do array animais depois do push: ', animais.length);

// console.log(animais);

// animais.unshift('macaco');

// console.table(animais);

// console.log(animais.at(-1));

// console.log(animais.indexOf('vaca'));

// console.log(animais.lastIndexOf('vaca'));

// console.log(animais.includes('cachorro'));

// let mensagem = 'Olá mundo!';

// console.log(mensagem[1]);

// console.log(mensagem.includes('mundo!'));

// function busca(elemento, index, object) {
//     console.log(elemento);
//     console.log(index);
//     console.log(object);

//     if(elemento == 'gambá') {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(animais.find( busca ));

// console.log(animais.filter(element => element.length > 8));

// console.log(animais);

// console.log(animais.pop());

// console.log(animais);

// console.log(animais.shift());

// console.log(animais);

//let animais01 = animais.splice(1, 1);

// console.log("Elementos cortados do array original:", animais01);

// console.log("Novo array", animais);
// console.log("Novo array", animais.length);


// let carros = new Array(10);

// carros.fill(null);

// carros[1] = "chevette";

// console.log(carros);


// let carros02 = carros.map(c => {
//     console.log(c);
//     if (!c) {
//         console.log("entrou no if");
//         return 'fusca';
//     } else {
//         console.log("entrou no else");
//         return c;
//     }
// }
// );


// console.log(carros02);



// carros.fill('fusca');

//console.log(carros);


// console.log(animais);

// animais.splice(2,0, 'cobra');

// console.log(animais);

// let novaArray = animais.concat(coisas);

// console.log(novaArray);


// console.log(animais);

// console.log(animais.reverse());

// console.log(animais);

// console.log(animais.sort());

// let numeros = [ 7, 6, 1, 11, 110, 23, 2, 24];

// console.log(numeros.sort((a,b) => a - b));

// console.log(numeros);



// const francisco = {"nome": "Francisco"};

// francisco.endereco = "Vila do Chaves";

// const numero = [10];

// numero.push(francisco);

// console.log(numero);



let tabela = [
    [1,2,3],
    [4,5,6, 6.5],
    [7,8,9]
];

for( let i = 0; i < tabela.length; i++) {
    for(let j = 0; j < tabela[i].length; j++){
        if(!tabela[j][i]) continue
        console.log(tabela[j][i]);
    }
}


// tabela.forEach(linha => linha.forEach( elemento => console.log(elemento)));











































