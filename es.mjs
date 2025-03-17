// 
let vetor = ["a", "b", "c"];

vetor.forEach((item) => console.log(item));

//arrow function
export let mult = (a, b) => a + b;

// if ternario

let acordado = null;
let deitado = false;

acordado = (deitado == true) ? false : true;


let cidades = ["curitiba", "colombo", "pinhais"];

let a = cidades[0];

//quebrando
let [b, c, ...resto] = cidades;

//mesclando
let novo = [...cidades, ...vetor];
console.log(novo);

export let pessoa = {
    nome: "Maria",
    idade: 23,
    peso: 45
}

let maria = pessoa.nome;
console.log(maria);

let { nome, idade } = pessoa;
console.log(nome, idade);

nome = "João";

console.log(pessoa, nome);
