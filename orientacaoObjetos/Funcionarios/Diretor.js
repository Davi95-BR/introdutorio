import { Funcionario } from "./Funcionario.js"


export class Diretor extends Funcionario {
	constructor(nome, salario, cpf){
		super(nome, salario, cpf);// Chamando a classe superior Funcionario
		this._bonificacao = 2;
	}
}