let listaDeHardware = ["CPU","GPU","RAN","SSD","PLACA MÃE"];

listaDeHardware.push("COOLER");
console.log(listaDeHardware);

let clienteNome = "saymon";
let clienteIdade = 16;
let possuiCupom = true;
console.log(possuiCupom+"\n"+clienteNome+"\n"+clienteIdade);

function processarVenda(valorTotal, cupomAtivo, quantidadeIntens) {
    console.log(`$(valorTotal) - $(cupomAtivo)`);
}