const botaoAdicionar = document.querySelector('#adicionar')
const adicionadoSalario = document.querySelector('#salarioAdicionado')
const inputSalario = document.querySelector('#salary')
const divAdicioneDespesas = document.querySelector('#adicioneDespesas')
const nameOfDespesa = document.querySelector('#NameOfDespesa')
const botaoAdicionarNome = document.querySelector('#adicionarNomeDaDespesa')
const inputNomeDespesa = document.querySelector('#nomeDespesa')
const amountOfDespesa = document.querySelector('#amountOfDespesas')
const botaoAdicionarQuantidade = document.querySelector('#adicionarAmountOfDespesa')
const amountAdded = document.querySelector('#quantidadeDeDespesaAdicionado')

botaoAdicionar.addEventListener('click', function(){
    adicionado()
})


botaoAdicionarQuantidade.addEventListener('click', function(){
    addClassShow(amountAdded)
})

botaoAdicionarNome.addEventListener('click', function(){
    addClassShow(nameOfDespesa)
    addClassShow(amountOfDespesa)
})

/*
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        adicionado()
    }
})*/

botaoAdicionarQuantidade.addEventListener('click', function(){
    addClassShow()
})

function adicionado() {
    if (inputSalario.value.length < 4) return;
    addClassShow(adicionadoSalario)
    addClassShow(divAdicioneDespesas)
}

function addClassShow(e) {
    e.classList.add('show')
}