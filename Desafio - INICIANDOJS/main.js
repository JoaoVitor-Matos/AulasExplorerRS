//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");
//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const NumberOne = prompt("Escreva o primeiro número")
const NumberTwo = prompt ("Escreva o segundo número")
const ResultOne = Number(NumberOne) + Number(NumberTwo)
alert (`A soma dos números é ${ResultOne}`)
/*3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
💡 Para saber o tipo de dado você pode usar o operador `typeof`    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".*/
let StringOuNumber = prompt("String ou numero?")
if (!isNaN(StringOuNumber)) {
  alert("É um número");
} else {
  alert("É uma string");
}
/*Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".*/
var booleanoOunao = prompt("Digite um valor:");
if ( booleanoOunao === "true" ||  booleanoOunao === "false") {
  alert("É um booleano");
} else {
  alert("Não é um booleano");
}
//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const NumberSu = prompt("Escreva o primeiro numero para fazer a subtração")
const NumberTwoSU = prompt("Escreva o segundo numero para fazer a subtração")
const resultTwo = Number(NumberSu) - Number(NumberTwoSU)
alert (`A subtração dos números é ${resultTwo}`)
//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const NumberMulti = prompt ("Escreva o primeiro numero para fazer a multiplicação")
const NumberMultiTwo = prompt("Escreva o segundo numero para fazer a multiplicação")
const resultThree = Number(NumberMulti)*Number(NumberMultiTwo)
alert (`A multiplicação dos números é ${resultThree}`)
//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const NumberDiv = prompt ("Escreva o primeiro numero para fazer a divisão")
const NumberDivTwo = prompt("Escreva o segundo numero para fazer a divisão")
const resultfour = Number(NumberDiv)/Number(NumberDivTwo)
alert(`A divisão dos numeros é ${resultfour}`)
/*Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/
const EvenOrOdd = prompt("Escreva um numero para adivinhar se e par ou impar")
Number(EvenOrOdd)
if (EvenOrOdd%2 === 0) {
    alert("O número é par")
}else{
    alert("Número é impar")
}