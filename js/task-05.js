const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
};

console.log(refs.outputName)

refs.inputName.addEventListener('input', (event) => {
    if (event.currentTarget.value !== '')
    {refs.outputName.textContent = event.currentTarget.value}
    else {refs.outputName.textContent = 'Anonymous'}
});