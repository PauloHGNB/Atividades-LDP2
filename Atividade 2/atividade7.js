//produto e pagamento

var prompt = require('prompt-sync')();

let formaPag = parseInt(prompt("Digite 1 para pagamento à vista.\nDigite 2 para pagamento à prazo.\n"));
let preco = parseFloat(prompt("Qual é o valor do produto? "));

switch (formaPag) {
    case 1:
        console.log("O valor a ser pago é de:", (preco * 0.9).toFixed(2), "(10% de desconto)");
        break;
    case 2:
        console.log("O valor a ser pago é de:", (preco).toFixed(2));
        break;
    default:
        console.log("Selecione uma opção válida.");
        break;
}
