let scanf = require('scanf');

const produtos = [
	{
		nome: 'Notebook',
		categoria: 'Eletrônico',
		valor: 1999.99,
	},
	{
		nome: 'Impressora',
		categoria: 'Eletrônico',
		valor: 999.99,
	},
	{
		nome: 'Caneta BIC',
		categoria: 'Escolar',
		valor: 0.5,
	},
	{
		nome: 'Lapiseira Pentel',
		categoria: 'Escolar',
		valor: 7.5,
	},
];

function listar() {
	produtos.forEach((p) => {
		console.log(p);
	});
}

function listarPorCategoria(category) {
	produtos.forEach((produto) => {
		if (produto.categoria === category) {
			console.log(produto);
		}
	});
}

// listarPorCategoria('Eletrônico');
// listarPorCategoria('Escolar');

function listarPorValor(min, max) {
	produtos.forEach((produto) => {
		if (produto.valor >= min && produto.valor <= max) {
			console.log(produto);
		}
	});
}

// listarPorValor(6, 10);
// listarPorValor(997, 1500);
// listarPorValor(1997, 2000);
// listarPorValor(0, 1);
