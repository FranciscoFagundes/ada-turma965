const animais01 = ['cachorro', 'gato', 'macaco', 'onça'];

const animais02 = [...animais01, 'leão', 'cobra', 'gambá'];


// console.log("Animais 01", animais01);

// console.log("Animais 02", animais02);

// const numeros01 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// const numeros02 = [
//     ...numeros01,
//     [10,11,12],
//     [13,14,15],
//     [16,17,18]
// ]

// console.log(numeros02);

// const [a, b, c ,d] = animais01;

// console.log(a);
// console.log(b);


const [primeiro, segundo, ...resto] = animais01;

console.log(primeiro);
console.log(segundo);
console.log(resto);

