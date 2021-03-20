                     /* Aulas de criação e interações de contas


import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { Conta } from "./Conta/Conta.js"
import { ContaSalario } from "./Conta/ContaSalario.js"

//Criando o cliente
const cliente1 = new Cliente('Ricardo', 11122233309);
const cliente2 = new Cliente('Alice', 88822233309);

//Criando a conta bancária do cliente
const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 102);

//Operações das contas dos clientes
conta1.depositar(500);
conta2.depositar(500);
conta1.transferir(200,conta2);

//Criando a conta poupança
const contaPoupanca = new ContaPoupanca(50, cliente2, 102);

//Não se deve instanciar um objeto do tipo conta
//const conta = new Conta(0, cliente1, 1001);

//Imprimindo os dados dos clientes.
console.log(ContaCorrente.numeroDeContas);

console.log(conta2,conta1);

//console.log(conta);



*/


                        /* Aula de criação e interações de funcionários */



import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new  Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678901);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais", 78998778900, "234")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "234");

console.log(gerenteEstaLogado, diretorEstaLogado);

console.log(clienteEstaLogado);




