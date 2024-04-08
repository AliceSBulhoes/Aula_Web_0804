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

/*Com uma lista de alunos >>>(Objeto)<<< vão percorrer cada aluno e trazer a 
  média da nota e mostra o nome do aluno e sua media*/

const lista_alunos = [
    {nome: "Lisan Al-Gaib", nota: [10,9]},
    {nome: "Paul Atreides", nota: [8.9,9]},
    {nome: "Ivan", nota: [8,9]},
    {nome: "Till", nota: [7.0,8.9]}
];

for(aluno of lista_alunos){
    let media = (aluno.nota[0] + aluno.nota[1])/ 2;
    console.log(`A média do aluno ${aluno.nome} é ${media}`)
}

//Você precisa desnvolver um algoritmo que faça um sorteio de bingo
function sorteio(){
    const sorteio = [];

    while(sorteio.length < 6){
        let num1 = Math.ceil(Math.random() * 60);
        if(!sorteio.includes(num1)){
            sorteio.push(num1);
        }
    }
    sorteio.sort((a,b)=> a-b);
    document.getElementById("teste").innerHTML = sorteio
}
