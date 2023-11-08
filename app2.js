let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
let linguagemProgramacao = prompt('Qual linguagem de programação você está estudando?');

let exibirMensagem = alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}`);

let gostaLinguagem = prompt(`você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM e 2 para Não.`);

/*
1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
*/

if (gostaLinguagem == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso');
}
else if(gostaLinguagem == 2){
    alert('Ahh que pena... Já tentou aprender outras linguagens?');
}
else{
    alert('Escolha somente as opções 1(SIM) 2 (NÃO)');
}


