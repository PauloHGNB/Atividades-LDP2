//taxa de natalidade e mortalidade

var prompt = require('prompt-sync')();

console.log("Selecione a opção desejada:");
console.log("1. Taxa de Natalidade");
console.log("2. Taxa de Mortalidade");

numeroTaxa = parseInt(prompt(""));

if (numeroTaxa == 1) {
    nasOuMor = parseInt(prompt("Informe o número de crianças nascidas: "));
    habitantes = parseInt(prompt("Informe agora o número de habitantes: "));
} else if (numeroTaxa == 2) {
    nasOuMor = parseInt(prompt("Informe o número de óbitos: "));
    habitantes = parseInt(prompt("Informe agora o número de habitantes: "));
} else {
    console.log("Tenha mais atenção.");
}

switch (numeroTaxa) {
    case 1:
        console.log("A taxa de natalidade é:", ((nasOuMor * 1000) / habitantes));
        break;
    case 2:
        console.log("A taxa de mortalidade é:", ((nasOuMor * 1000) / habitantes));
    default:
        console.log("Selecione uma opção válida.");
    }