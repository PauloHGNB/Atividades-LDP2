const prompt = require('prompt-sync')();

let numero;
do {
    numero = prompt('Digite o número para qual você deseja calcular a tabuada: ');
    numero = parseInt(numero);

    if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
    }
} while (isNaN(numero));

console.log(`Tabuada de ${numero}:`);

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}