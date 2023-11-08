/*Primeiramente, a pessoa deverá escolher uma opção de operação 
impressa pelo programa na tela.*/

/* Depois, ela deverá inserir os dois valores que deseja utilizar, 
e o programa imprimirá o resultado da operação em questão.*/

/*As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa 
última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
*/

/*
Cada operação deverá ter uma função diferente no seu código, que receberá os valores inseridos 
como parâmetros e retornará com o resultado da operação.
*/

/*
Não esqueça de usar estruturas de repetição para fazer a calculadora imprimir a escolha de 
operação até que a pessoa deseje parar o programa.
*/
 
/*
Lembre-se também de que, além do if e else, também temos o switch, muito interessante de se
utilizar em casos como esse, de múltipla escolha.
*/

let valorUm;
let valorDois;
let operacao;

//soma(valorUm,valorDois);
//subtrair(valorUm,valorDois);
//multiplicar(valorUm,valorDois);
//dividir(valorUm,valorDois);



function somar(x,y){
    let resultadoSomar = x + y;
    return alert(`A soma de ${valorUm} e ${valorDois} é = ${resultadoSomar}`);
}

function subtrair(x,y){
    let resultadoSubtrair = x - y;
    return alert(`A subtração de ${valorUm} e ${valorDois} é = ${resultadoSubtrair}`);
}

function multiplicar(x,y){
    let resultadoMultiplicar = x * y;
    return alert(`A multiplicação de ${valorUm} e ${valorDois} é = ${resultadoMultiplicar}`);
}

function dividir(x,y){
    let resultadoDividir =  x / y;
    return alert(`A divisão de ${valorUm} e ${valorDois} é = ${resultadoDividir}`);
}

function sair(){
    return alert ("Até a próxima");
}


do{
    operacao = prompt("Digite a operação desejada: somar, subtrair, multiplicar, dividir ou sair");

    while(operacao != "somar" && operacao != "subtrair" && operacao != "multiplicar" && operacao != "dividir" && operacao != "sair") {  //enquanto o texto lido for diferente de "soma", "subtração", "multiplicação", "divisão" e "sair", exibir que não foi reconhecido e perguntar novamente
        alert(`Operação não reconhecida!`);
        operacao = prompt(`Qual operação você quer realizar? Responda 'somar', 'subtrair', 'multiplicar', 'dividir' ou 'sair'.`);
    }

    if(operacao === "sair"){
        sair();
        break;
    }

    valorUm = parseFloat(prompt("Digite o primeiro valor:"));

    valorDois = parseFloat(prompt("Digite o segundo valor:"));

    switch(operacao){

        case 'somar':
            somar(valorUm,valorDois);
            break;
        case 'subtrair':
            subtrair(valorUm,valorDois);
            break;
        case 'multiplicar':
            multiplicar(valorUm,valorDois);
            break;
        case 'dividir':
            dividir(valorUm,valorDois);
            break;

    }

}while (operacao === "somar" || operacao === "subtrair" || operacao === "multiplicar" || operacao === "dividir");




