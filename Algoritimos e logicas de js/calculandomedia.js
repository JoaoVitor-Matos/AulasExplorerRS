let nome = prompt("Qual é seu nome ?")
let ResultOne = prompt("Qual sua primeira nota 1?")
let ResultTwo = prompt("Qual sua primeira nota 2 ?")
let ResultThree = prompt("Qual sua primeira nota 3?")

let media = (Number(ResultOne)+ Number(ResultTwo) + Number(ResultThree))/ 3
media = media.toFixed(2)
if (media>=6) {
alert(" Você passou " +nome + " Sua media foi "+ media) //tofixed determina quantas casas decimais eu quero qeu apareça
}else{
    alert("Você não passou " + nome + " boa sorte na recurecu sua media foi: " + media)
}