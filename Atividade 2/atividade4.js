//loja desconto

var prompt = require('prompt-sync')();

let valor = parseFloat(prompt("Qual o valor total de sua compra? "));
console.log("Por favor, selecione uma opção: ")
console.log("1- Cliente comum");
console.log("2- Funcionário");
console.log("3- VIP");
let comprador = parseInt(prompt(""));

switch (comprador)
{
    case 1:
        console.log("Valor total a ser pago: ", valor.toFixed(3));
        break;
    case 2:
        console.log("Valor total a ser pago: ", (valor * 0.9).toFixed(3));
        break;
    case 3:
        console.log("Valor total a ser pago: ", (valor * 0.95).toFixed(3));
        break;
    default:
        console.log("Essa opção não é válida :(");
    }