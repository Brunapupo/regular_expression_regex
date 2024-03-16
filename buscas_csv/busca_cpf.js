const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, 'utf-8')

//764.682.144-67
const patternCPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g
const matchCPF = banco.match(patternCPF)
console.log('matchCPF', matchCPF);

