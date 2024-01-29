//média aritmética

var prompt = require('prompt-sync')();

let primeiraNota = parseFloat(prompt("Digite sua primeira nota: "));
let segundaNota = parseFloat(prompt("Digite agora sua segunda nota: "));
let terceiraNota = parseFloat(prompt("Por fim, sua terceira nota: "));

console.log("Sua média é:", ((primeiraNota + segundaNota + terceiraNota)/3).toFixed(2));