let numberOne = prompt("Escreva o o primeiro numero")
let numberTwo = prompt("Escreva o o segundo numero")
const soma = Number(numberOne) + Number(numberTwo)
const subtracao = Number(numberOne) - Number(numberTwo)
const multiplicacao = Number(numberOne) * Number(numberTwo)
let divisao = Number(numberOne) / Number(numberTwo)
const resto = Number(numberOne) % Number(numberTwo)

alert(`A soma dos dois números é ${soma}`)
alert(`A subtração dos dois números é ${subtracao}`)
alert(`A multilicação dos dois números é ${multiplicacao}`)
if (divisao % 2 != 0) {
    divisao = divisao.toFixed(2)
    alert(`A divisão dos dois números é ${divisao}`)
}else{
    alert(`A divisão dos dois números é ${divisao}`)
}
alert(`A resto dos dois números é ${resto}`)

if (soma%2 === 0) {
    alert("A soma desses dois numeros é par")
}else{
    alert("A soma desses dois numeros é impar")
}
if(numberOne === numberTwo){
alert("São iguais ")
}else{
    alert("São diferentes")
}