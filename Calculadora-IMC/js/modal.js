export const modal = {
    wrapper: document.querySelector('.model-Wrpapper '),
    message: document.querySelector('.Modal .title span'),
    buttonClose: document.querySelector('.Modal button.Close'),

    oppen() {
        modal.wrapper.classList.add('oppen')
    },
    close() {
        modal.wrapper.classList.remove('oppen')
    }
}

modal.buttonClose.onclick = () =>{
    modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
   if (event.key === 'Escape') {
        modal.close()
   }
}