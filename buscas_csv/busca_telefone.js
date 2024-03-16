const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

//pega todos os digitos em sequência, nele todo.
const regexTelefone = /\d+/g
//Pega os números com parenteses (\d+\)
const regexTelefoneRefinado = /\(\d+\)/g
//Pega o espaço \s e grupos de digitos \d+-
const regexTelefoneEspaco = /\(\d+\)\s\d+-\d+/g


console.log('________________________Meta-char ou Metacaracteres________________________');
const matchTelefone = banco.match(regexTelefone)
console.log('Telefone:', matchTelefone)
const matchTelefoneRefinado = banco.match(regexTelefoneRefinado)
console.log('Telefone com parenteses:',matchTelefoneRefinado)
const matchTelefoneEspaco = banco.match(regexTelefoneEspaco)
console.log('Telefone com parenteses e espaços:', matchTelefoneEspaco)


