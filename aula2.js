let aluno = "Pedro";

// estrutura de dados
// array -> vetores

let alunos = ["Pedro", "Ana", "João", 123];

alunos.push("Mario");

alunos[3] = "Maria";

/* console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);
console.log(alunos[5]); */

// loops -> repetições

/* if (1 == 1) 
{

} */

let ini = 0;
let fim = alunos.length - 1;
alunos.sort()

/* while (ini <= fim) {

    console.log(alunos[ini]);

    ini = ini + 1

} */

/* while (ini <= fim) {

    console.log(alunos[fim]);

    fim = fim - 1

} */

for (let ini = 0; ini <= fim; ini = ini + 1) {
    console.log(alunos[ini]);
}

console.log("FOR EACH");

// forEach

alunos.forEach(function(item) {
    console.log(item);
});