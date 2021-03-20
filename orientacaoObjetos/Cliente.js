//Molde de class com definições de atributos a serem colocados
export class Cliente{

	constructor(nome, cpf, senha) {
		this.nome = nome;
		this._cpf = cpf;
		this._senha = senha;
	}

	autenticar(){
		return true;
	}

	get cpf() {
		return this._cpf;// podendo acessar o cpf com o return o  console.log
	}

}

	