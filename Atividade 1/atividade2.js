//soma, subtração, multiplicação, divisão

var prompt = require('prompt-sync')();

let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero2 !== 0 ? numero1/numero2: "Não é possível dividir por zero";

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);