/*Criando um algoritmo que leia uma lista e retorne novas listas */

let lista_filme = ["Duna(1984)", "Duna parte 1", "Duna parte 2", "Duna Messiah"];
let best_film = [];
let trilogy = [];
let antigo = [];

for(let film of lista_filme){
    if(film == "Duna parte 2"){
        best_film.push(film)
        trilogy.push(film)
    } else if(film != "Duna(1984)"){
        trilogy.push(film)
    } else{
        antigo.push(film)
    }
}

console.log(trilogy);
console.log(antigo);
console.log(best_film);

let lista_num = [1,2,3,4,5,6,7,8,9,10];
let pares = [];
let impares = [];

for(let num of lista_num){
    if(num%2 == 0){
        pares.push(num);
    }else{
        impares.push(num);
    }
}

console.log(pares);
console.log(impares);
