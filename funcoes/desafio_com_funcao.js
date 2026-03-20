/*
atalho comentário de varias linhas:
alt + shift + A

desafio:
criar uma funcao que receba preço e desconto em % e mostre o valor final com descocnto.
Criar uma funcao que receba preço e quantidade e moetre o valor toral da compre.
*/
function criarCalculadorDesconto (preco, descocnto) {
const valorFinal = preco - (preco * (descocnto / 100));
console.log(`o valor final do produto foi de: ${valorFinal}`);
}

criarCalculadorDesconto(1000, 5);
//

function processoPedido(valor, quantidade, operacao) {
    return operacao(valor, quantidade);
    
    }
    
    function calcularTotal(preco, quantidade){
        return preco * quantidade;
    
    }
    
    let resultado = processoPedido(30, 50, calcularTotal);
    
    
    console.log(`total do pedido: ${resultado}`);