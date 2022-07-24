const botaoAdicionar = document.querySelector('#adicionar')
const adicionadoSalario = document.querySelector('#salarioAdicionado')
const inputSalario = document.querySelector('#salary')
const divAdicioneDespesas = document.querySelector('#adicioneDespesas')
const nameOfDespesa = document.querySelector('#NameOfDespesa')
const botaoAdicionarNome = document.querySelector('#adicionarNomeDaDespesa')
const inputNomeDespesa = document.querySelector('#nomeDespesa')
const amountOfDespesa = document.querySelector('#amountOfDespesas')
const inputQtd = document.querySelector('#qtd');
const botaoAdicionarQuantidade = document.querySelector('#adicionarAmountOfDespesa')
const amountAdded = document.querySelector('#quantidadeDeDespesaAdicionado')
const botaoAdicionarvalor = document.querySelector('#adicionarWorthOfDespesa');
const adicioneValor = document.querySelector('#worthOfDespesa')
const inputValorDeDespesaAdded = document.querySelector('#valorDeDespesaAdicionado');
const valor = document.querySelector('#valorDaDespesa');
const lastQuestion = document.querySelector('#lastQuestion');
const sim = document.querySelector('#yes');


sim.addEventListener('click', function() {
    removerShow(lastQuestion);
    removerShow(amountOfDespesa)
    removerShow(adicioneValor)
    inputNomeDespesa.value = '';
    removerShow(nameOfDespesa)

    valor.value = 'R$ ';
    removerShow(inputValorDeDespesaAdded);

    inputQtd.value = '';
    removerShow(amountAdded);

})

botaoAdicionar.addEventListener('click', function(){
    if (inputSalario < 4 ) {
        alert('Informe um valor') 
        return
    }
    adicionado()
})


botaoAdicionarQuantidade.addEventListener('click', function(){
    if (inputQtd.value.length < 1) {
        alert('Informe um valor');
        return
    }
    addClassShow(amountAdded)
    addClassShow(adicioneValor)
})

botaoAdicionarNome.addEventListener('click', function(){
    if (inputNomeDespesa.value.length < 1) {
        alert('Informe algum nome');
        return
    }
    addClassShow(nameOfDespesa)
    addClassShow(amountOfDespesa)
})

/*
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        adicionado()
    }
})*/



function adicionado() {
    if (inputSalario.value.length < 4) {
        alert('Informe algum valor')
        return
    }
    addClassShow(adicionadoSalario)
    addClassShow(divAdicioneDespesas)
}

function addClassShow(e) {
    e.classList.add('show')
}

function removerShow(valor) {
    valor.classList.remove('show');
}


botaoAdicionarvalor.addEventListener('click', function() {
    if (valor.value.length < 4) {
        alert('Informe algum valor')
        return
    };
    addClassShow(inputValorDeDespesaAdded)
    addClassShow(lastQuestion)
})