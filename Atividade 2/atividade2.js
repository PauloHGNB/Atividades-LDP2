//calculadora switch

var prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Agora, o segundo número: "));

console.log("Selecione a opção que deseja:");
console.log("1. Soma");
console.log("2. Subtração");
console.log("3. Multiplicação");
console.log("4. Divisão");
let opcao = parseInt(prompt(""));

switch(opcao)
{
    case 1:
        console.log("A soma de", num1, "e", num2, "é", (num1 + num2).toFixed(2));
        break;
    case 2:
        console.log("A subtração de", num1, "e", num2, "é", (num1 - num2).toFixed(2));
        break;
    case 3:
        console.log("A multiplicação de", num1, "e", num2, "é", (num1 * num2).toFixed(2));
        break;
    case 4:
        console.log("A divisão de", num1, "e", num2, "é", (num1 / num2).toFixed(2));
        break;
    default:
        console.log("Opção inválida :(");
}