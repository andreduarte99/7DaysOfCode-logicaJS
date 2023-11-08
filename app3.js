let perguntaUm = prompt('Qual área você quer seguir Front-End ou Back-End?');
let frontEnd;
let backEnd;
let perguntaDois;
let perguntaTres;
let contador = 0;
let perguntaQuatro;
let parabensEscolha;


if(perguntaUm == 'Front-End'){
    frontEnd = prompt('Você quer aprender React ou aprender Vue?')
}else if (perguntaUm == 'Back-End'){
    backEnd = prompt('Você quer aprender C# ou Java?');
}else{
    alert('Digite "Front-End" ou "Back-End" corretamente para continuar o jogo.');
}

function exibirEscolha(area, linguagem){

    if(perguntaUm == 'Front-End'){
            alert(`Legal! sua escolha foi ${area} e quer aprender ${linguagem}, continue com seus estudos!`);
    }
    else{
            alert(`Legal! sua escolha foi ${area} e quer aprender ${linguagem}, continue com seus estudos!`)
    }

}

if(perguntaUm == 'Front-End'){
    exibirEscolha(perguntaUm, frontEnd);
}else if (perguntaUm == 'Back-End'){
    exibirEscolha(perguntaUm, backEnd);
}


if(perguntaUm == 'Front-End'){
        perguntaDois = prompt(`Você ainda quer continuar na área ${perguntaUm} e aprendendo ${frontEnd} ou quer seguir se desenvolvendo para se tornar Fullstack? Digite 1 - Continuar, 2 - Fullstack`);
}else if(perguntaUm == 'Back-End'){
        perguntaDois = prompt(`Você ainda quer continuar na área ${perguntaUm} e aprendendo ${backEnd} ou quer seguir se desenvolvendo para se tornar Fullstack? Digite 1 - Continuar, 2 - Fullstack`);
}


if(perguntaDois == 1){
    alert('Legal, continue se esforçando e logo será um especialista no assunto.');
}else if(perguntaDois == 2){
    alert('OK, saiba que não será uma tarefa fácil, mas com dedicação você consegue!');
}else{
    alert('Que pena, não entendemos sua resposta!');
}


const tecnologias = [];


if(perguntaDois == 2){
    perguntaTres = prompt('Qual tecnologia você gostaria de aprender?');
    tecnologias.push(perguntaTres);
    parabensEscolha = alert(`Uau, parabéns pela da escolha da linguagem ${perguntaTres}!`);


        while(contador >= 0){

            perguntaQuatro = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Responda com "ok" para proseguir.');

            if(perguntaQuatro == 'ok'){
                perguntaTres = prompt('Qual tecnologia você gostaria de aprender?');
                tecnologias.push(perguntaTres);
                parabensEscolha = alert(`Uau, parabéns pela da escolha da linguagem ${perguntaTres}!`);
                contador++;
            }else{
                break;
            }
}

    const ListaDeTecnologias = alert(`Sua Lista de tecnologias é ${tecnologias}`);

}





























