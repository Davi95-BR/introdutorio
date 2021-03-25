"use strich"

console.log('\n Trabalhando com loop');

const listaDeDestinos = new Array(
	'Salvador',
	'São Paulo',
	'Rio de Janeiro'
	);

const idadeComprador = 18;
const pessoaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log('\n Destinos Possíveis:');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || pessoaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

//estilo for
for(let i = 0; i < 3; i ++){
	if (listaDeDestinos[i] == destino){
		destinoExiste = true;
	}
}

console.log('Destino existe:', destinoExiste);

if (podeComprar && destinoExiste){
	console.log('Boa viagem');
}else {
	console.log('Desculpe tivemos um erro!');
}

//estilo while

//while(contador<3){
//	if (listaDeDestinos[contador] == destino){
//		destinoExiste = true;
//		break;
//	}
//	contador += 1;
//}

