const botaoAdicionar = document.querySelector('#adicionar')
const adicionadoSalario = document.querySelector('#salarioAdicionado')
const inputSalario = document.querySelector('#salary')

botaoAdicionar.addEventListener('click', function(){
    adicionado()
})
//
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        adicionado()
    }
})


function adicionado() {
    if (inputSalario.value.length < 4) return;
    adicionadoSalario.classList.add('show')
}