console.log('-------------')
console.log('--MÓDULO 01--')
console.log('-------------')

// Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

const livro = {
    titulo: 'Justiça Cósmica',
    autor: 'Vitor Kury Teixeira Leite',
    anoPublicacao: 2023,
    genero: 'Mistério/Ficção',

};

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}`)


console.log();

// Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.mostrarDetalhes = "Detalhes do Livro:\n" +
    "Título: " + livro.titulo + "\n" +
    "Autor: " + livro.autor + "\n" +
    "Ano de Publicação: " + livro.anoPublicacao + "\n" +
    "Gênero: " + livro.genero + "\n" +
    // VITOR => PARECE QUE NAO FUNCIONA COM ``, APENAS COM ASPAS E CONCATENAÇÃO
    "Idade de Publicação: " + livro.idadePublicacao + " anos"

console.log(livro.mostrarDetalhes);

console.log();

// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

console.log(livro['titulo']);

console.log();
// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

livro.avaliacao = null;

const avaliarLivro = (livro, dado, nota) => {
    if (livro[dado] === null) {
        return livro.avaliacao = nota;
    } else {
        return "Esse livro já possui avaliação."
    }
}

console.log(avaliarLivro(livro, 'avaliacao', 10));
console.log(avaliarLivro(livro, 'avaliacao', 10));

console.log();
// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".

livro.genero = 'Comédia';

console.log(livro);

console.log();
// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

delete livro.avaliacao;

console.log(livro);

console.log('-------------')
console.log('--MÓDULO 02--')
console.log('-------------')

// Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.
// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.

const fipe = {
    nome: 'Fipenarum',
    idade: 32,
    solteiro: true,
    hobbies: ['Assistir TV', 'Jantar em restaurantes chiques', 'Conversar com amigos']
};

const garono = {
    nome: 'Garono',
    idade: 45,
    solteiro: false,
    hobbies: ['Viajar', 'Passar tempo com a esposa', 'Colecionar informações sigilosas']
};

const gened = {
    nome: 'Genedonimo',
    idade: 49,
    solteiro: false,
    hobbies: ['Clube de tiro', 'Palestrar em quartéis', 'Carpintaria']
};



// const mostrarInforPessoa = (pessoa) => {
//     let dadosDoEndereco = [];

//     for (let chave in pessoa.endereco) {
//         dadosDoEndereco.push(pessoa.endereco[chave]);

//     }


//     return `
//     Nome: ${pessoa.nome}
//     Idade: ${pessoa.idade}
//     Solteiro: ${pessoa.solteiro}
//     Hobbies: ${pessoa.hobbies.join(', ')}
//     Endereço: ${dadosDoEndereco.join(', ')}
//     `
// }

const mostrarInforPessoa = (pessoa) => {
    let dadosDoEndereco = [];

    // Verificar se endereco existe e extrair seus valores para dadosDoEndereco
    if (pessoa.endereco) {
        for (let chave in pessoa.endereco) {
            dadosDoEndereco.push(pessoa.endereco[chave]);
        }
    }

    // Montar string com os dados da pessoa
    return `
    Nome: ${pessoa.nome || 'N/A'}
    Idade: ${pessoa.idade || 'N/A'}
    Solteiro: ${pessoa.solteiro !== undefined ? pessoa.solteiro : 'N/A'}
    Hobbies: ${pessoa.hobbies.join(', ')} 
    Endereço: ${dadosDoEndereco.join(', ')}
    `;
};

// Chamar a função com o objeto fipe


console.log(`Este é Fipenarum:
    ${mostrarInforPessoa(fipe)})
    `);

console.log();
// Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
// Preencha as subpropriedades do objeto endereco com valores fictícios.
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.

fipe.endereco = {
    rua: 'Inserto',
    cidade: 'Bertenevis',
    estado: 'Monte Balante'
}

garono.endereco = {
    rua: 'Inserto',
    cidade: 'Inserto',
    estado: 'Inserto'
};

gened.endereco = {
    rua: 'Alameda Trinta e Nove',
    cidade: 'Bertenevis',
    estado: 'Monte Balante'
};

console.log(`Este é Fipenarum, COM ENDEREÇO:
    ${mostrarInforPessoa(fipe)}
    `);

console.log();
// Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.

// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.



const listaPessoas = [];

listaPessoas.push(fipe, garono, gened);

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.

const mostrarListaPessoas = (listaDePessoa) => {
    let resultadoConsulta = [];

    listaDePessoa.forEach(alguem => {

        let dadosDaPessoa = `${mostrarInforPessoa(alguem)}`;
        resultadoConsulta.push(dadosDaPessoa);
    });

    return resultadoConsulta.join('------ ')
}

console.log(`Essa é a lista de pessoas em forma de string --> ${mostrarListaPessoas(listaPessoas)}`);

// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.

const adelime = {
    nome: 'Adelime',
    idade: 30,
    solteiro: true,
    hobbies: ['Extremamente discreta'],
    endereco: {
        rua: 'Inserto',
        cidade: 'Provavelmente Bertenevis',
        estado: 'Provavelmente Monte Balante'
    }
}

listaPessoas.push(adelime);

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.

console.log(`Essa é a lista de pessoas com a adição de Adelime --> ${mostrarListaPessoas(listaPessoas)}`);

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.

const filtrarPorCidade = (lista, cidade) => {
    const listaFiltrada = lista.filter((elemento) => {
        return elemento.endereco.cidade === cidade;
    }).map((elemento) => elemento.nome);
    return listaFiltrada;
};

// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.

console.log(`Essas são as pessoas cuja cidade é inserta -->`, filtrarPorCidade(listaPessoas, 'Bertenevis'));

console.log();
//Crie um objeto chamado calculadora que terá os seguintes métodos:
// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.

const calculadora = {
    soma: function (a, b) {
        return a + b;
    },

    subtracao: function (a, b) {
        return b - a;
    },

    multiplicacao: function (a, b) {
        return a * b;
    },

    divisao: function (a, b) {
        if (b == 0) {
            return "Não podemos dividir por zero!"
        } else {
            return a / b;
        }

    }
}

// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
console.log(calculadora.soma(2, 2));
// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
calculadora.media = function (lista) {
    let total = 0;
    lista.forEach((elemento) => total += elemento)

    console.log("Este é o total --> " + total);

    return total / lista.length;
}

const umANove = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(calculadora.media(umANove));

console.log();
// Crie um objeto chamado contaBancaria com as seguintes propriedades:
const contaBancaria = {
    titular: 'Vitor',
    conta: 123654789,
    saldo: 10,
    depositar: function (valor) {
        return this.saldo += valor
    },

    sacar: function (valor) {
        if (this.saldo >= valor) {
            return this.saldo -= valor
        } else {
            return "Saldo insuficiente"
        }
    }
}
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

const cliente = {
    nome: 'Vitor',
    conta: 123654789
}

// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

const mostrarSaldo = (cliente, conta) => {
    if (cliente.conta === conta.conta) {
        return `${cliente.nome} possui exatamente, nem mais, nem menos, a fortuna de ${contaBancaria.saldo} reais de saldo`;
    } else {
        return "Conta não encontrada";
    }
}
 console.log(mostrarSaldo(cliente, contaBancaria))
// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console

contaBancaria.depositar(800);
console.log(mostrarSaldo(cliente, contaBancaria))
contaBancaria.sacar(250);

console.log(mostrarSaldo(cliente, contaBancaria))

console.log('-------------')
console.log('--MÓDULO 03--')
console.log('-------------')

const dadosCompletos = (objeto) => {
    const dadosCompletos = Object.entries(objeto);
    return dadosCompletos;
}

console.log(dadosCompletos(fipe));

console.log();
// Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

const pessoa = {
    nome: 'Vitor',
    notas: [10, 9, 8, 7, 8],
    calcularMediaNotas: function() {
        let somaDasNotas = 0;
        this.notas.forEach(elemento => {
            return somaDasNotas += elemento;
        });
        return somaDasNotas / this.notas.length
    },
    // Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:
    classificarDesempenho: function(){
        if (this.calcularMediaNotas() >= 9){
            return "Excelente desempenho!"
        }
        
        if (this.calcularMediaNotas() <= 8.9 && this.calcularMediaNotas() >= 7.6){
            return "Bom desempenho!"
        }
        
        if (this.calcularMediaNotas() <= 7.5 && this.calcularMediaNotas() >= 6){
            return "Regular desempenho?!"
        }
        
        if (this.calcularMediaNotas() < 6){
            return "Insuficiente desempenho..."
        }
    }
}

// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

console.log(pessoa.calcularMediaNotas());

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
console.log(pessoa.classificarDesempenho());

// Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

const carro = {

marca: 'Audi',
modelo: 'Na verdade eu não entendo de carros',
ano: 2024,
cor: 'Branco'

}

console.log();
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.

for (let chave in carro){
    console.log(`${chave}, ${carro[chave]}`)
}
// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.

carro.batido = true;
carro.multas = 2;
carro.venda = false;
// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.

for (let chave in carro){
    console.log(`${chave}, ${carro[chave]}`)
}

console.log();
// Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
carro.ligado = false;
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
carro.ligar = function(){
    if (this.ligado = false) {
    console.log('Carro ligado');
    }
}
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.

carro.desligar = function(){
    if (this.ligado = true) {
    console.log('Carro desligado');
    }
}
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
carro.obterDetalhes = function(){
   return Object.entries(carro);
}
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
const ligarCarro = carro.ligar();
const desligarCarro = carro.desligar();
console.log(ligarCarro);
console.log(desligarCarro);
console.log(desligarCarro);
// Chame o método obterDetalhes e imprima no console a string retornada.

const detalhesDoCarro = carro.obterDetalhes();
console.log(detalhesDoCarro);

console.log();
// No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.

Object.defineProperty(carro, 'placa', {
    value: 'abcd-1234',
    enumerable: false
}) ;

// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.

for (let chaves in carro) {
    console.log(`${chaves} //// ${carro[chaves]}`);
}

// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
const chavesDoCarro = Object.keys(carro);

console.log(`Essas são as chaves do carro:
    ${chavesDoCarro}
    `);


// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

console.log(carro.placa);

console.log();

// Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:

const carroNovo = {

    marca: 'BMW',
    modelo: 'Qualquer um',
    ano: 2023,
    cor: 'Preto'
    
    }

// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.

const carroComNovosDetalhes = {...carroNovo}


// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.

console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
 carroComNovosDetalhes.ano = 2024;

 console.log(carroComNovosDetalhes);

console.log('-------------')
console.log('--MÓDULO 04--')
console.log('-------------')

const importando = require("./dados.json");

console.log(importando);

importando.produtos.push({
    id: 3,
    nome: 'Sapato',
    preco: 48.99
});

console.log(importando);

console.log();
// Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.
// Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.

// Imprima no console o objeto JavaScript resultante da leitura do arquivo.
console.log();
// Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

const gibi = {
      id: 1,
    nome: "Batman Vol. XXIV",
    preco: 75.85
};

console.log(gibi);
// Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.

const gibiJSON = JSON.stringify(gibi);

console.log(gibiJSON);

console.log();

//Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array

// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

// a) Leia o conteúdo do arquivo animais.json.

const importarAnimais = require("./animais.json");
console.log(importarAnimais);

// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

// const animaisStr = JSON.stringify(animais);
// console.log(animaisStr);

// const animaisObj = JSON.parse(animaisStr);
// console.log(animaisObj);



// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

const tubarao = {
    id: 4,
    nome: 'Tubarão',
    tipo: 'Peixe',
    habitat: 'Mar'
}
// console.log(typeof animais);

importarAnimais.animais.push(tubarao);
console.log(importarAnimais);



// d) Modifique o habitat de um animal existente no array de animais.

importarAnimais.animais[0].habitat = 'Savana Africana';
console.log(importarAnimais);

// e) Remova um animal do array de animais.

importarAnimais.animais.splice(1, 1);
console.log(importarAnimais);

// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

const animaisStr = JSON.stringify(importarAnimais);

// g) Imprima no console o objeto JavaScript resultante das operações.
console.log(animaisStr);

console.log();
// Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

// Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

const copiaProfunda = (original) =>{
    return JSON.parse(JSON.stringify(original));
}

const animaisCopia = copiaProfunda(importarAnimais);
console.log(animaisCopia);

// Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

animaisCopia.animais[1].nome = 'Serpente';
console.log(animaisCopia.animais[1].nome);

// Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.

console.log(importando);
console.log(animaisCopia);

console.log('-------------')
console.log('--MÓDULO 05--')
console.log('-------------')

// Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades:

const biblioteca = [
    { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
    { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
    { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

// Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.

const encontrarLivroPorId = (lista, id) => {
   if (lista[id] === undefined){
    return "Não possuímos o livro!"
   }
    return lista[id - 1];
}



// Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.

console.log(encontrarLivroPorId(biblioteca, 1));
console.log(encontrarLivroPorId(biblioteca, 4));

console.log();
// Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:

const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]

// Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

const filtrarFilmesPorAno = (lista, ano) => {
    return lista.filter(filme => filme.anoLancamento === ano);
}


// Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.

console.log(filtrarFilmesPorAno(catalogoFilmes, 1993));

console.log();
// Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:

const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

// Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.

const filtrarPorPreco = (lista, valorMax) => {
    let listaFiltrada = [];
    
    for (let produto of lista) {
        if (produto.preco < valorMax) {
            listaFiltrada.push(produto)
        }
        
    }
    return listaFiltrada.sort((a,b) => a.preco - b.preco);



}


// Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.
console.log(filtrarPorPreco(listaProdutos, 30));

console.log();
// Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:

const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

// Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.

// Exemplo

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}
// Você pode criar funções para fazer a ordenação crescente ou decrescente:

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade;
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade
}

const animaisOrdemCrescente = ordenarAnimais(compararIdadeCrescente);
console.log(animaisOrdemCrescente);

console.log();
// Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:
// Exemplo

const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            { id: 101, nome: "Ana", cargo: "Vendedor" },
            { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
            { id: 202, nome: "João", cargo: "Analista de sistemas" }
        ]
    }
]

// Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.

const encontrarFuncionarioPorId = (lista, id) => {
    let funcionarioEncontrado;
    for (let departamentos of lista) {
        funcionarioEncontrado = departamentos.funcionarios.find(funcionario => funcionario.id === id);

        // VITOR => NAO USAR ""==true" /// simplesmente verificar se funcionarioEncontrado é "truthy"
    } if(funcionarioEncontrado){
        return funcionarioEncontrado
    }else{
        return "Não há funcionário com esse ID!"
    };  
}
    // // VITOR => O INCLUDES SÓ FUNCIONA EM ARRAY PRIMITO, NAO DE OBJETOS
    // // return funcionarioEncontrado = lista.find(departamentos => departamentos.funcionarios.includes(id));
  

// Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado.

console.log(encontrarFuncionarioPorId(departamentos, 201));
console.log(encontrarFuncionarioPorId(departamentos, 2201));