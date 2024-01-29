//maior de idade?

var prompt = require('prompt-sync')();

let idade = parseInt(prompt("Qual é a sua idade? "));

if (idade >= 18) {
    console.log("Que pena! Você já é maior de idade!");
} else { 
    console.log("Parabéns! Você ainda não é maior de idade!");
}