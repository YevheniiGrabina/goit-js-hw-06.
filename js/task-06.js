const refs = {
    passInput: document.querySelector('#validation-input'),
}
refs.passInput.addEventListener('blur', changeBorderColor)
refs.passInput.addEventListener('input', () => {
    console.log(refs.passInput.value.length)
})
function changeBorderColor() {    
    refs.passInput.classList.remove('valid');
    refs.passInput.classList.add('invalid');
    if (refs.passInput.value.length == refs.passInput.dataset.length) {    
        refs.passInput.classList.remove('invalid');
        refs.passInput.classList.add('valid');
    }
};