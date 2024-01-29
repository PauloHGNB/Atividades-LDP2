//seleção soma, multiplicação, divisão

var prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite agora um segundo número: "));
let codigoSelecao = parseInt(prompt("Digite 1 para somar os números, 2 para multiplicá-los e 3 para dividí-los: "));

if (codigoSelecao == 1) {
    console.log("A soma de", numero1, "e", numero2, "é", (numero1 + numero2).toFixed(1));
} else if (codigoSelecao == 2) {
    console.log("A multiplicação de", numero1, "e", numero2, "é", (numero1 * numero2).toFixed(1));
} else if (codigoSelecao == 3) {
    console.log("A divisão de", numero1, "e", numero2, "é", (numero1 / numero2).toFixed(1));
} else { 
    console.log("Por favor, digite uma opção válida.");
}