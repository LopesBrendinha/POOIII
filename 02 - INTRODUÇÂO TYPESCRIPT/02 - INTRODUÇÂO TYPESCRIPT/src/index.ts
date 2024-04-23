import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

const telefoneBrendinhaPessoal : Telefone = new Telefone("42", 99923929, "Pessoal");
const telefoneBrendinhaTrabalho : Telefone = new Telefone("42", 984056511, "Trabalho");
const telefones : Telefone[] = [telefoneBrendinhaPessoal, telefoneBrendinhaTrabalho];

const enderecoB : Endereco = new Endereco("Rua do cachorro de pé", 426, "Limoeiro", "Acre");
const clienteB : Cliente = new Cliente("Brendinha", 987432114, 87 , "Femea", enderecoB, telefones);

const produto1 : Produto = new Produto(6969, "Uma camisa do corinthians 100% original, so foi roubada", 29.99);
const produto2 : Produto = new Produto(6899, "Uma camisa do flamengo 100% original, so foi roubada", 79.99);
const produto3 : Produto = new Produto(6799, "Uma camisa do Athletico Paranaense 100% original, so foi roubada", 157.99);
const produtos : Produto[] = [produto1, produto2, produto3];

const vendaB : Venda = new Venda(1234, 15042013, clienteB, produtos);

console.log("Este é o valor total da compra" + vendaB.calcularTotal());
console.log("Cliente: " + vendaB.cliente.nome);
console.log("CPF: " + vendaB.cliente.cpf);
console.log("Data de nascimento: " + vendaB.cliente.dataNascimento);
console.log("Sexo: " + vendaB.cliente.sexo);
console.log("Endereço: " + vendaB.cliente.endereco.rua + " "+ vendaB.cliente.endereco.numero + " " +  vendaB.cliente.endereco.cidade +" "+ vendaB.cliente.endereco.estado);
console.log("Telefones: " + vendaB.cliente.telefones.map(telefone => `${telefone.ddd} ${telefone.numero} ${telefone.tipo}`).join(', '));
console.log("Produtos:");
vendaB.produtos.forEach((produto, index) => {
    console.log(`Produto ${index + 1}: ${produto.codigo} - ${produto.descricao} - $=${produto.valor}`);
});