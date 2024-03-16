const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

//avisa o JavaScript com duas barras que ele vai trabalhar com regex
const regex = /Anna/

//codigo que trás o alvo e o math
const matchRegex = banco.match(regex)
console.log('matchRegex', matchRegex);