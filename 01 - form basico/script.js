
function clearError(input) {

    const isRadioOrCheckbox  = input.parentElement.classList.contains("radio") || input.parentElement.classList.contains("checkbox")
    let parent = isRadioOrCheckbox ? input.parentElement.parentElement :input.parentElement
    console.log(parent)
    const errorComponent = parent.querySelector(".error")
    errorComponent.innerHTML = ""
}

function bootApp(params) {
    const inputs = document.querySelectorAll('.to-check')
    
    inputs.forEach(input => {
        input.addEventListener('blur', (event) => {
            clearError(event.target)
        })
    })
}

function basicValidation(inputs) {
    inputs.forEach(input => {
        if(!input.validity.valid)
            input.parentElement.querySelector('.error').innerHTML = '*Campo com erro!'
    })
}


function checkRadio(parent) {
    if(!parent.querySelector('input[name="fav_language"]:checked'))
            parent.querySelector('.error').innerHTML = '*Campo com erro!'
    
}

function checkCheckBox(parent) {
    const boxes = Array.from(parent.querySelectorAll("input[type=checkbox]"))
    const isChecked = boxes.some(item => item.checked)
    if(!isChecked)
        parent.querySelector('.error').innerHTML = '*Campo com erro!'
        
}

document.getElementById("enviar").addEventListener("click", (e) =>{
    // e.preventDefault()
    const inputs = e.target.parentElement.querySelectorAll('.to-check')

    basicValidation(inputs)
    const parentRadio = e.target.parentElement.querySelector('#radio')
    checkRadio(parentRadio)
    const parentCheckbox = e.target.parentElement.querySelector('#checkbox')
    checkCheckBox(parentCheckbox)
    
})


// Configurando botoes do tipo button e input
const container = document.getElementById('button-container')
container.childNodes.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('clicked on ' + e.target.value)
    })
})


bootApp()