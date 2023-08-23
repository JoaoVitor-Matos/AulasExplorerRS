import { modal } from './modal.js'
import {AlertError} from "./alert.js"
import {notNumber,IMC } from "./utils.js"
// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector ('#weight')
const inputHeight = document.querySelector ('#height')

//const modalWrapper = document.querySelector('.model-Wrpapper ')
//const modalMessage = document.querySelector('.Modal .title span')
//const ModalBtnClose = document.querySelector('.Modal button.Close')


form.onsubmit = function (event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notNumber(weight) || notNumber(height) //se os números colocados são números ou não 
    if (showAlertError) {
        AlertError.open()// mostrar o alerta de error caso não for um número 

        return;
    }
    AlertError.close()
    const result = IMC (weight,height)
    displauResultMessage(result)
}
function displauResultMessage(result){
    const message = `Seu IMC é de ${result}`
    modal.message.innerText = message
    modal.oppen()
}

inputHeight.oninput=()=> AlertError.close()//fechar a caixa de alerta ao digitar alguma coisa
inputWeight.oninput=()=> AlertError.close()