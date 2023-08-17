let numberOne = prompt("Digite o primeiro numero :")
let numberTWO = prompt("Digite o segundo numero: ")
numberOne = Number(numberOne)
numberTWO = Number(numberTWO)
const sum = numberOne + numberTWO //const variavel que eu nao vou alterar o valor dela
const sub = numberOne - numberTWO
const mult = numberOne * numberTWO
const div = numberOne / numberTWO
const restdiv = numberOne % numberTWO

alert('A soma dos números é :'+ sum)
alert('A subtraçao dos numeros é: '+ sub)
alert('A multiplicação é :' + mult)
alert('A divisão é :' + div)
alert('O resto da divisao é: ' + restdiv)
