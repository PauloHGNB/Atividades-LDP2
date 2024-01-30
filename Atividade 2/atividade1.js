//sistema hotel

var prompt = require('prompt-sync')();

let nome = prompt("Por favor, informe seu nome: ");

console.log("Olá", nome,"seja bem-vindo(a) ao nosso hotel.");
console.log("Por favor selecione a ação que deseja realizar:");
console.log("1. Fazer Check-in");
console.log("2. Chamar serviço de quarto");
console.log("3. Fazer pedido");
console.log("4. Fazer Check-out");
let acao = parseInt(prompt(""));

switch(acao)
{
    case 1:
        console.log("Você selecionou Fazer Check-in.");
        break;
    case 2:
        console.log("Você selecionou Chamar serviço de quarto.");
        break;
    case 3:
        console.log("Você selecionou Fazer pedido.");
        break;
    case 4:
        console.log("Você selecionou Fazer Check-out.");
        break;
    default:
        console.log("Opção inválida.");
}