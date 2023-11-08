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

let valorUm; //= document.getElementById('valor_um').value;
let valorDois; //= document.getElementById('valor_dois').value;
let resultado = 0;
let mostraResultado;


//somar(valorUm,valorDois);

function somar(){

    valorUm = parseFloat(document.getElementById('valor_um').value);
    valorDois = parseFloat(document.getElementById('valor_dois').value);
    resultado = valorUm + valorDois;
    return mostraResultado = document.getElementById('mostra_resultado').value = resultado;
    
}


function subtrair(){

    valorUm = parseFloat(document.getElementById('valor_um').value);
    valorDois = parseFloat(document.getElementById('valor_dois').value);
    resultado = valorUm - valorDois;
    return mostraResultado = document.getElementById('mostra_resultado').value = resultado;    

}

function multiplicar(){

    valorUm = parseFloat(document.getElementById('valor_um').value);
    valorDois = parseFloat(document.getElementById('valor_dois').value);
    resultado = valorUm * valorDois;
    return mostraResultado = document.getElementById('mostra_resultado').value = resultado;  
}

function dividir(valorUm,valorDois){

    valorUm = parseFloat(document.getElementById('valor_um').value);
    valorDois = parseFloat(document.getElementById('valor_dois').value);
    resultado = valorUm / valorDois;
    return mostraResultado = document.getElementById('mostra_resultado').value = resultado;  
}

function sair(){
    
    document.getElementById('removerValores').style.display='none';
    document.getElementById('removerOperacoes').style.display='none';
    document.getElementById('removerResultado').style.display='none';
    document.getElementById('mostraVoltar').style.display='inline-block';
    document.querySelector('p').innerHTML = 'Até a próxima!';
    document.querySelector('a').innerHTML = 'Retornar';

}
