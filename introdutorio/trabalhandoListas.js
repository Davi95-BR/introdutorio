console.log('Trabalhando com Listas');

const listaDeDestinos = new Array(
	'São Paulo',
	'Rio de Janeiro',
	'Fortaleza',
	'Bahia'
	);

listaDeDestinos.push('Curitiba');
console.log('Destinos Possíveis:');
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1);// splice é retirada de algum/ns intem/ns da lista com a posição inicial em 0 e a quantidade.
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);//Imprimindo apenas o local Rio de Janeiro e São Paulo