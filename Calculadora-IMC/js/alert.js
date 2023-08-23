export const AlertError={
    element:document.querySelector('.alert-error'),
    open(){
        AlertError.element.classList.add('oppen')
    },
    close(){
        AlertError.element.classList.remove('oppen')
    }
}

