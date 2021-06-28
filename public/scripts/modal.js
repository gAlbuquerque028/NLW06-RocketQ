export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)
    
    // Funcionalidade de atribuir a classe active para a modal
    function open(){
        modalWrapper.classList.add("active")
    }

    // Funcionalidade de remover a classe active da modal
    function close(){
        modalWrapper.classList.remove("active")
    }


    return {
        open,
        close
    }
}