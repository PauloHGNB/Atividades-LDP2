//salário + 10%

var prompt = require('prompt-sync')();

let nome = prompt("Qual o seu nome? ");
let salario = parseFloat(prompt("Qual o seu salário? "));

if (isNaN(salario)) {
    console.log("Por favor, digite um salário válido.")
} else { 
    console.log("Parabéns", nome, "você teve aumento de 10%! Seu novo salário é", (salario * 1.1).toFixed(3));
}