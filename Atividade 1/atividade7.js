//pagamento a prazo 3 ou 5 parcelas

var prompt = require('prompt-sync')();

let preco = parseFloat(prompt("Qual é o preço à vista do produto? "));
let parcelas = parseInt(prompt("Deseja realizar o pagamento em 3 (aumento de 10% do preço total) ou 5 (aumento de 20% do preço total) parcelas? "));

if (parcelas !== 3 && parcelas !== 5) { 
    console.log("Insira um dos dois valores de parcelamento disponíveis.");
} else if (parcelas == 3) {
    preco = preco * 1.1;
    console.log("O valor total passou a ser de", preco.toFixed(2), "e cada parcela tem o valor de", (preco / 3).toFixed(2));
} else {
    preco = preco * 1.2;
    console.log("O valor total passou a ser de", preco.toFixed(2), "e cada parcela tem o valor de", (preco / 5).toFixed(2));
}