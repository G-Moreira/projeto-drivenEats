
function pratoUm() {
    const pratoSelec = document.querySelector('.prato .opcaoUm');
    pratoSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.prato .opcaoDois');
    const retiraSelec2 = document.querySelector('.prato .opcaoTres');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function pratoDois() {
    const pratoSelec = document.querySelector('.prato .opcaoDois');
    pratoSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.prato .opcaoUm');
    const retiraSelec2 = document.querySelector('.prato .opcaoTres');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function pratoTres() {
    const pratoSelec = document.querySelector('.prato .opcaoTres');
    pratoSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.prato .opcaoUm');
    const retiraSelec2 = document.querySelector('.prato .opcaoDois');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function bebidaUm() {
    const bebidaSelec = document.querySelector('.bebida .opcaoUm');
    bebidaSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.bebida .opcaoDois');
    const retiraSelec2 = document.querySelector('.bebida .opcaoTres');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function bebidaDois() {
    const bebidaSelec = document.querySelector('.bebida .opcaoDois');
    bebidaSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.bebida .opcaoUm');
    const retiraSelec2 = document.querySelector('.bebida .opcaoTres');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function bebidaTres() {
    const bebidaSelec = document.querySelector('.bebida .opcaoTres');
    bebidaSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.bebida .opcaoUm');
    const retiraSelec2 = document.querySelector('.bebida .opcaoDois');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function sobremesaUm() {
    const sobremesaSelec = document.querySelector('.sobremesa .opcaoUm');
    sobremesaSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.sobremesa .opcaoDois');
    const retiraSelec2 = document.querySelector('.sobremesa .opcaoTres');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function sobremesaDois() {
    const sobremesaSelec = document.querySelector('.sobremesa .opcaoDois');
    sobremesaSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.sobremesa .opcaoUm');
    const retiraSelec2 = document.querySelector('.sobremesa .opcaoTres');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function sobremesaTres() {
    const sobremesaSelec = document.querySelector('.sobremesa .opcaoTres');
    sobremesaSelec.classList.toggle('selecionado');

    const retiraSelec = document.querySelector('.sobremesa .opcaoUm');
    const retiraSelec2 = document.querySelector('.sobremesa .opcaoDois');

    if(retiraSelec.classList.contains('selecionado')){
        retiraSelec.classList.remove('selecionado');
    }
    if(retiraSelec2.classList.contains('selecionado')){
        retiraSelec2.classList.remove('selecionado');
    }
}

function habilitarPedido() {
    const pratoUmSelec = document.querySelector('.prato .opcaoUm');
    const pratoDoisSelec = document.querySelector('.prato .opcaoDois');
    const pratoTresSelec = document.querySelector('.prato .opcaoTres');

    const bebidaUmSelec = document.querySelector('.bebida .opcaoUm');
    const bebidaDoisSelec = document.querySelector('.bebida .opcaoDois');
    const bebidaTresSelec = document.querySelector('.bebida .opcaoTres');

    const sobremesaUmSelec = document.querySelector('.sobremesa .opcaoUm');
    const sobremesaDoisSelec = document.querySelector('.sobremesa .opcaoDois');
    const sobremesaTresSelec = document.querySelector('.sobremesa .opcaoTres');

    const pratoEscolhido = (pratoUmSelec.classList.contains('selecionado') || pratoDoisSelec.classList.contains('selecionado') || pratoTresSelec.classList.contains('selecionado'));
    const bebidaEscolhida = (bebidaUmSelec.classList.contains('selecionado') || bebidaDoisSelec.classList.contains('selecionado') || bebidaTresSelec.classList.contains('selecionado'));
    const sobremesaEscolhida = (sobremesaUmSelec.classList.contains('selecionado') || sobremesaDoisSelec.classList.contains('selecionado') || sobremesaTresSelec.classList.contains('selecionado'));

    const pedido = document.querySelector('.fechar-pedido');
    const botaoTexto = document.querySelector ('.fechar-pedido button p');
    if (pratoEscolhido && bebidaEscolhida && sobremesaEscolhida) {
        pedido.classList.add('habilitado');
        botaoTexto.innerHTML = "Fechar Pedido";
    } else if (pedido.classList.contains('habilitado')){
        pedido.classList.remove('habilitado');
        botaoTexto.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
}