//peso ideal

var prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Por favor, informe o seu peso (em kg): "));
let sexo = prompt("Você é do sexo masculino (M) ou feminino (F)? ");

switch(sexo)
{
    case 'M':
        console.log("Seu peso ideal é: ", ((peso - 100) * 0.9).toFixed(2));
        break;
    case 'F':
        console.log("Seu peso ideal é: ", ((peso - 100) * 0.85).toFixed(2));
        break;
    default:
        console.log("Opção não válida.");
    }