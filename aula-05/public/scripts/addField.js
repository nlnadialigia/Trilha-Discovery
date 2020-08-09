// Procurar o botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneFields)

//Executar a ação
function cloneFields(){
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar o campo a ser limpo
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo, limpar
    fields.forEach(function (field) {
        field.value=""
    })

    //Coloar na página
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}

