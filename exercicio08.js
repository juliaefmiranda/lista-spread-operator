//Alterando propriedade
const produto = {
 nome: "Notebook",
 preco: 3000
}
const novoObjeto ={ ...produto, preco: 3500 }

console.log(novoObjeto);
