let numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);

let chute = parseInt(prompt('Qual o número secreto?'));

let tentativas = 3;

tentativas--;

let palavraTentativa;

while(tentativas <= 3 ){
    palavraTentativa = tentativas > 1 ? 'tentativas restantes' : 'tentativa restante';
    if (chute == numeroSecreto && tentativas >= 1){
        alert(`Parabéns, você acertou! e com ${tentativas} ${palavraTentativa}`);
        tentativas--;
        break;
    }else if(chute != numeroSecreto && tentativas >= 1){
        alert(`Você errou, e ainda tem mais ${tentativas} ${palavraTentativa}`);
        tentativas--;
        chute = parseInt(prompt('Qual o número secreto?'));
    }else{
        alert(`Que pena! Suas tentativas esgotaram! O número secreto era ${numeroSecreto}`);
        break;
    }
}
