//variaveis
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
const screen1 =  document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const bntTry = document.querySelector("#btnTry")
const bntAgain = document.querySelector("#btnAgain")


// Eventos
bntTry.addEventListener('click', handleTryClick)
bntAgain.addEventListener('click',handleAgainClick)
document.addEventListener('keydown',PressEnter)



//Funções
function handleTryClick(event){
    event.preventDefault() ////não faça o padrão (O padrao do form é enviar o formulario portanto ele não envia e não atualiza a pagina)
    const inputNumber = document.querySelector("#inputNumber")

    if (inputNumber.value === "") {
            alert("Coloque um número")
            return; // Sai da função sem incrementar xAttempts

    } else if (Number(inputNumber.value) ==  randomNumber) {
       
            toggleScreen()
            document.querySelector(".screen2 h2").innerText = `acertou em ${xAttempts} tentativas` 

    } else if (Number(inputNumber.value) < 0){
            alert(`Coloque um número entre 0 e 10`)

    } else if(Number(inputNumber.value) > 10){
            alert(`Coloque um número entre 0 e 10` )

    }   

    inputNumber.value= ""
    xAttempts++
}

function handleAgainClick(){
   toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    xAttempts= 1
}


 function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
 }

function PressEnter(enter){
    if (enter.key == 'Enter' && screen1.classList.contains('hide')) {
        handleAgainClick()
    }
}



