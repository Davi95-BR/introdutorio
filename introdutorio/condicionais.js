"use strich"

console.log('\n Trabalhando com condicionais');

const listaDeDestinos = new Array(
	'São Paulo',
	'Rio de Janeiro',
	'Fortaleza',
	'Bahia'
	);

const idadeComprador = 18;
const pessoaAcompanhada = false;
const temPassagemComprada = true;
console.log('\n Destinos Possíveis:');
console.log(listaDeDestinos);

	if(idadeComprador >= 18 || pessoaAcompanhada == true) {
		console.log("Boa Viagem");
		listaDeDestinos.splice(1,1);
	}else {
		console.log('Não é maior de idade e não posso vender');
	}
		
console.log(listaDeDestinos);


console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada) {
	console.log('Boa viagem');
}
