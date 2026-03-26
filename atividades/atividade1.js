var produto = "celular";
var preco = 2500;
var estoque = 20;

let mensagem = estoque < 1 ? "com estoque" : "sem estoque";
console.log(mensagem);

console.log(`o item ${produto} custa: ${preco}
disponibilidade: ${estoque}`);