//nome e média

var prompt = require('prompt-sync')();

let nome = prompt("Qual é o seu nome? ");
let nota1 = parseFloat(prompt("Digite sua primeira nota: "));
let nota2 = parseFloat(prompt("Digite sua segunda nota: "));
let nota3 = parseFloat(prompt("Digite sua terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 8) {
    console.log("Parabéns", nome, "sua média foi de", media.toFixed(2), "e você foi aprovado");
} else { 
    console.log(nome, "infelizmente você foi reprovado, sua média foi de", media.toFixed(2));
}