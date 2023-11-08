/*
let meuArray = [];
meuArray.push(elemento1);
*/

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let massas = [];
let contador = parseInt(prompt('Quantos itens deseja adicionar a sua lista de supermercado?'));
let desejaComprar;
let qualComida;
let qualCategoria;
let maisItens;
let somaContador;
let identificaItem;
let posicaoItem;
let removerItem;


while (contador >= 0){

    if(contador < 1){
        alert('O número de itens informado para lista execeu o limite!');
        maisItens = prompt('Deseja adionar mais itens na sua lista? (sim ou não)');
        if(maisItens == 'sim'){
            somaContador = parseInt(prompt('Quantos itens deseja adicionar em sua lista?'));
            contador = contador + somaContador;
        }else{
            alert('Ok, lista finalizada.')
            break;
        }
    }
    
    console.log(contador);

    if(frutas.length != [] || laticinios.length != [] || congelados.length != [] || doces.length != [] || massas.length != []){
        desejaComprar = prompt('Você deseja adicionar um item na sua lista de compra ou remover? (responda sim, não ou remover)');
        
        if (desejaComprar == 'sim'){
            qualComida = prompt('Qual item você deseja adicionar na sua lista?');
            qualCategoria = prompt('Qual categoria esse item se encaixa: (frutas, laticinios, congelados, doces, massas)');
            if(qualCategoria == 'frutas'){
                frutas.push(qualComida);
                contador--;
            }else if(qualCategoria == 'laticinios'){
                laticinios.push(qualComida);
                contador--;
            }else if(qualCategoria == 'congelados'){
                congelados.push(qualComida);
                contador--;
            }else if(qualCategoria == 'doces'){
                doces.push(qualComida);
                contador--;
            }else if(qualCategoria == 'massas'){
                massas.push(qualComida);
                contador--;
            }else{
                alert('Não foi possível encontrar a categoria do item');
            }
            
        
        }else if(desejaComprar == 'não'){  
            alert('Ok, lista finalizada.');
            break;

        }else if(desejaComprar == 'remover'){
            alert(`Sua lista de compras atual:
            Frutas: ${frutas}.
            Laticínios: ${laticinios}.
            Congelados: ${congelados}.
            Doces: ${doces}.
            Massas: ${massas}.`);
            qualCategoria = prompt('Qual categoria esse item que deseja remover se encaixa: (frutas, laticinios, congelados, doces, massas)');
            
            if(qualCategoria == 'frutas'){
                identificaItem = prompt(`Sua lista de frutas atual: 
                ${frutas}
                Qual item deseja remover?`);
                posicaoItem = frutas.indexOf(identificaItem);

                if(posicaoItem == -1){
                    alert('Não foi possível encontrar o item dentro da lista!');
        
                }else{

                    removerItem = frutas.splice(posicaoItem,1);
                    contador++;

                    alert(`Lista de compras atual, após remoção do item:
                        Frutas: ${frutas}.
                        Laticínios: ${laticinios}.
                        Congelados: ${congelados}.
                        Doces: ${doces}.
                        Massas: ${massas}.
                    `)

                }

            }else if(qualCategoria == 'laticinios'){
                identificaItem = prompt(`Sua lista de laticinios atual: 
                ${laticinios}
                Qual item deseja remover?`);
                posicaoItem = laticinios.indexOf(identificaItem);
                
                if(posicaoItem == -1){
                    alert('Não foi possível encontrar o item dentro da lista!');
               
                }else{

                    removerItem = laticinios.splice(posicaoItem,1);
                    contador++;

                    alert(`Lista de compras atual, após remoção do item:
                        Frutas: ${frutas}.
                        Laticínios: ${laticinios}.
                        Congelados: ${congelados}.
                        Doces: ${doces}.
                        Massas: ${massas}.
                    `)

                }
               

            }else if(qualCategoria == 'congelados'){
                identificaItem = prompt(`Sua lista de congelados atual: 
                ${congelados}
                Qual item deseja remover?`);
                posicaoItem = congelados.indexOf(posicaoItem);
                
                if(posicaoItem == -1){
                    alert('Não foi possível encontrar o item dentro da lista!');
               
                }else{

                    removerItem = congelados.splice(posicaoItem,1);
                    contador++;

                    alert(`Lista de compras atual, após remoção do item:
                        Frutas: ${frutas}.
                        Laticínios: ${laticinios}.
                        Congelados: ${congelados}.
                        Doces: ${doces}.
                        Massas: ${massas}.
                    `)

                }

            }else if(qualCategoria == 'doces'){
                identificaItem = prompt(`Sua lista de doces atual: 
                ${doces}
                Qual item deseja remover?`);
                posicaoItem = doces.indexOf(identificaItem);
                
                if(posicaoItem == -1){
                    alert('Não foi possível encontrar o item dentro da lista!');
               
                }else{

                    removerItem = doces.splice(posicaoItem,1);
                    contador++;

                    alert(`Lista de compras atual, após remoção do item:
                        Frutas: ${frutas}.
                        Laticínios: ${laticinios}.
                        Congelados: ${congelados}.
                        Doces: ${doces}.
                        Massas: ${massas}.
                    `)

                }

            }else if(qualCategoria == 'massas'){
                identificaItem = prompt(`Sua lista de massas atual: 
                ${massas}
                Qual item deseja remover?`);
                posicaoItem = massas.indexOf(identificaItem);

                if(posicaoItem == -1){
                    alert('Não foi possível encontrar o item dentro da lista!');
               
                }else{

                    removerItem = massas.splice(posicaoItem,1);
                    contador++;

                    alert(`Lista de compras atual, após remoção do item:
                        Frutas: ${frutas}.
                        Laticínios: ${laticinios}.
                        Congelados: ${congelados}.
                        Doces: ${doces}.
                        Massas: ${massas}.
                    `)

                }
                

            }else{
                alert('Não foi possível encontrar a categoria do item');
            }


        }else{
            alert('Não foi possível identificar sua resposta, tente novamente!');
        }
    
    }else{
        
        desejaComprar = prompt('Você deseja adicionar um item na sua lista de compra? (responda sim ou não)');
        
        if (desejaComprar == 'sim'){
            qualComida = prompt('Qual item você deseja adicionar na sua lista?');
            qualCategoria = prompt('Qual categoria esse item se encaixa: (frutas, laticinios, congelados, doces, massas)');
            
            if(qualCategoria == 'frutas'){
                frutas.push(qualComida);
                contador--;
            
            }else if(qualCategoria == 'laticinios'){
                laticinios.push(qualComida);
                contador--;
            
            }else if(qualCategoria == 'congelados'){
                congelados.push(qualComida);
                contador--;
            
            }else if(qualCategoria == 'doces'){
                doces.push(qualComida);
                contador--;
            
            }else if(qualCategoria == 'massas'){
                massas.push(qualComida);
                contador--;
            }else{
                alert('Não foi possível localizar a categoria, tente novamente!');
            }
            
        }else if(desejaComprar == 'não'){  
            alert('Ok, lista finalizada.');
            break;
        
        }else{
            alert('Não foi possível identificar sua resposta, tente novamente!');
        }console.log

    }
}

alert(`Lista de compras:
    Frutas: ${frutas}.
    Laticínios: ${laticinios}.
    Congelados: ${congelados}.
    Doces: ${doces}.
    Massas: ${massas}.
`)
