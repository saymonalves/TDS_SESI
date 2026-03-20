function processoPedido(valor, quantidade, operacao) {
return operacao(valor, quantidade);

}

function calcularTotal(preco, quantidade){
    return preco * quantidade;

}

let resultado = processoPedido(30, 50, calcularTotal);

// imprimir com tamplate string

console.log(`total do pedido: ${resultado}`);