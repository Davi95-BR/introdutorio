import { Conta } from "./Conta.js"

// Exportando a classe e extendendo a classe Conta tbm
export class ContaCorrente extends Conta{
	static numeroDeContas = 0;// static = atributo estático

	constructor(cliente, agencia){
		super(0, cliente, agencia);// Chamando a class construtora Pai da Conta.js
		ContaCorrente.numeroDeContas += 1;
	}
	//sobreescrevendo o comportamento de sacar 
	sacar(valor) {
		let taxa = 1.1;
		return this._sacar(valor, taxa);
	}
}