"use strich"

console.log("Trabalhando com variáveis");

const nome = "Davi";
const sobrenome = "Meneghello";
const nomeCompleto = nome + ' ' + sobrenome;
// const é uma declaração de variavel fixa

// Não fazer
// mes = "janeiro"

//console.log(nome + "" + sobrenome)
console.log('Meu nome é ' + nome +  " " + sobrenome);

//Juntando as duas variáveis e diminuindo o código.
console.log('Meu nome é ' + nomeCompleto);

//let nome = "Davi";
// O let deixa que mude a variavel.
// O const não deixa que mude a variável conforme for colocando novos dados com a mesma variável.

let contador = 0;
contador = contador + 1;

//Loop infinito usado com frequencia na linguagem Java Script.

let idade; //Declaração da variavel
idade = 26; //Atribuindo valor
idade = idade +1;//Alterando a atribuição
// São duas operações distintas porém o java script deixa usarmos o atalho de uma linha apenas.
console.log('Minha idade é ' + idade);
