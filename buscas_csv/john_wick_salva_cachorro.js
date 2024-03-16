const fs = require('fs')

const texto = "John Wick, salve o cachorro!";
const substring = "cachorro";
const resultado = texto.match(substring);

console.log(resultado); // ["cachorro"]