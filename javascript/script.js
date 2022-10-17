
function selecPrato(prato) {  
    const retiraSelec = document.querySelector('.prato .selecionado');
    
    if(retiraSelec !== null){
        retiraSelec.classList.remove('selecionado');
    }

    prato.classList.toggle('selecionado');
}

function selecBebida(bebida) {
    const retiraSelec = document.querySelector('.bebida .selecionado');
    
    if(retiraSelec !== null){
        retiraSelec.classList.remove('selecionado');
    }

    bebida.classList.toggle('selecionado');
}

function selecSobremesa(sobremesa) {
    const retiraSelec = document.querySelector('.sobremesa .selecionado');

    if(retiraSelec !== null){
        retiraSelec.classList.remove('selecionado');
    }

    sobremesa.classList.toggle('selecionado');
}

function habilitarPedido() {
    const pratoSelecionado = document.querySelector('.prato .selecionado');
    const bebidaSelecionada = document.querySelector('.bebida .selecionado');
    const sobremesaSelecionada = document.querySelector('.sobremesa .selecionado');


    const pratoEscolhido = (pratoSelecionado !== null);
    const bebidaEscolhida = (bebidaSelecionada !== null);
    const sobremesaEscolhida = (sobremesaSelecionada !== null);

    const pedido = document.querySelector('.fechar-pedido');
    const botaoTexto = document.querySelector ('.fechar-pedido button p');
    if (pratoEscolhido && bebidaEscolhida && sobremesaEscolhida) {
        pedido.classList.add('habilitado');
        botaoTexto.innerHTML = "Fechar Pedido";

        // Mudar o Link do Fechar Pedido
        const nomeDoPrato = document.querySelector('.prato .selecionado h3');
        const nomeDaBebida = document.querySelector('.bebida .selecionado h3');
        const nomeDaSobremesa = document.querySelector('.sobremesa .selecionado h3');

        const valorPrato = document.querySelector('.prato .selecionado .item-valor span');
        const valorBebida = document.querySelector('.bebida .selecionado .item-valor span');
        const valorSobremesa = document.querySelector('.sobremesa .selecionado .item-valor span');
        
        const total = Number( (valorPrato.innerHTML).replace(',','.') ) + Number( (valorBebida.innerHTML).replace(',','.') ) + Number( (valorSobremesa.innerHTML).replace(',','.') );
        pedido.href="https://wa.me/5521988815425?text=" + 
        encodeURIComponent(
            "Olá, gostaria de fazer o pedido:" + 
            "\n- Prato: " + nomeDoPrato.innerHTML +
            "\n- Bebida: " + nomeDaBebida.innerHTML +
            "\n- Sobremesa: " + nomeDaSobremesa.innerHTML +
            "\nTotal: R$ "  + total.toFixed(2)
        );

    } else if (pedido.classList.contains('habilitado')){
        pedido.classList.remove('habilitado');
        botaoTexto.innerHTML = "Selecione os 3 itens para fechar o pedido";
        pedido.href="#";
    }
}
