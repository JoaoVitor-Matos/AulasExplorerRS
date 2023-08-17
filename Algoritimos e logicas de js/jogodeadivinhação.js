let result = prompt("Adivinhe o numero que estou pensando? entre 0 e 10")
const numberRadom = Math.round(Math.random()*10)
let attempts = 1
while (Number(result) != numberRadom) {
    result = prompt("it's not the number yet:")
    attempts++
}
if (attempts>1) {
    alert(`Congratulations, you guessed it ${attempts} tries`)
}else{
    alert(`Congratulations, you guessed it ${attempts} trie`)
}
