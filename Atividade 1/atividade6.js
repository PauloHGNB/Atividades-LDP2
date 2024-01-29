//dois numeros iguais: soma; diferentes: multiplicação

var prompt = require('prompt-sync')();

let valorA = parseFloat(prompt("Digite um número: "));
let valorB = parseFloat(prompt("Digite o segundo número: "));
let valorC;

if (valorA == valorB) {
    valorC = valorA + valorB;
    console.log("A soma de", valorA.toFixed(2), "e", valorB.toFixed(2), "é", valorC.toFixed(2));
} else { 
    valorC = valorA * valorB;
    console.log("A multiplicação de", valorA.toFixed(2), "e", valorB.toFixed(2), "é", valorC.toFixed(2));
}