
console.log('MÓDULO 01');

// Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const esparso = [];

esparso.push(undefined);
esparso.push(50);
esparso.push(undefined);
esparso.push(50);
esparso.push(undefined);
esparso.push(undefined);
esparso.push(undefined);
esparso.push(50);

console.log(esparso);
console.log(esparso.length);

// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

const valorZero = [0, 1, 2, 3, 4];

console.log(`O comprimento do array é ${valorZero.length}`);
console.log(`O index 0 do array é ${valorZero[0]}`);

valorZero[0] = 1000;

console.log(`Agora o indexador 0 do array é ${valorZero[0]}`);

// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const meuArray = [];

meuArray.push(10);
meuArray.push(20);
meuArray.push(30);

console.log(meuArray);

meuArray[0] *= 2;

console.log(`Multipliquei o index 0 por 2 e resultou em ${meuArray}`);

// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

const arrayVazio = [];

function adicionaArray(adiciona) {
    for (i = 0; i < adiciona; i++) {
        arrayVazio.push(1);

    }
    console.log(arrayVazio);
}

adicionaArray(3);

console.log(`Usando a função adicionaArray, eu incluo no arrayVazio e fica ${arrayVazio}`);

// Desenvolva um programa em Node.js que simule uma clínica veterinária. 
// Crie um array vazio chamado clinica que representará a fila de animais na clínica. 
// Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. 
// Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const clinica = [];

const fila = (pet) => clinica.push(pet);

fila('Doggo');
fila('Boggo');
fila('Loggo');

console.log(clinica);

const excluirFila = (exclui) => {
    for (i = 0; i < exclui; i++) {
        clinica.pop();
    }
}

excluirFila(2);

console.log(`Após excluir dois clientes, a fila agora é ${clinica}`);

console.log();
console.log('MÓDULO 02');
console.log();

// Crie uma função que receba dois arrays e os concatene em um único array

const pares = [2, 4, 6, 8];
const impares = [1, 3, 5, 7];
const listaTudo = [];

const unirListas = (lista1, lista2) => {
    return lista1.concat(lista2);
}





console.log(unirListas(pares, impares));

// Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros);

// Dado o array frutas contendo frutas que desejamos comprar na feira:
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas);

// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas

const menuPrincipal = ['Arroz', 'Feijão', 'Bife', 'Ovo'];
const menuDeSobremesas = ['Bolo', 'Sorvete'];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);

// Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

// Dicas:
// comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// você pode resolver usando um for dentro de outro for.

const matriz = [];
let inicio = 0;

for (i = 0; i < 3; i++) {
    for (i = 0; i < 3; i++) {
        let linha = [];

        for (j = 0; j < 3; j++) {
            linha.push(inicio = inicio + 1);
        }
        matriz.push(linha);

    }
    matriz.push(i + 1);
}

console.log(matriz);

// Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior

console.log(matriz[1][2]);

// Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

matriz[2].splice(2, 2, 'Elemento');

console.log(matriz);

console.log();
console.log('MÓDULO 03');
console.log();

// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const vinte = []

for (i = 0; i < 20; i++) {
    vinte.push(i);
}
for (let item of vinte) {
    console.log(item);
}

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const qualIndex = (lista) => {
    for (i = 0; i < lista.length; i++) {
        console.log(i, lista[i]);
    }
}

console.log(qualIndex(menuCompleto));

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

let total = 0;
const somaLista = (lista) => {
    for (i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total;
}

console.log(somaLista(vinte));

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
let maior = 0;
let menor = 0;

const oMaior = (lista) => {

    for (i = 0; i < lista.length; i++) {
        if (i > maior) {
            maior = i;
        }

    }
    return maior;
}

const oMenor = (lista) => {
    for (i = 0; i < lista.length; i++) {
        if (i < 0 && i != 0) {
            menor = i;

        }
    }
    return menor;

}

console.log(vinte);
console.log(`o menor número é ${oMenor(vinte)} e o maior número é ${oMaior(vinte)}`);

//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const maisNumeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

let numerosPares = [];
const soPares = (lista) => {
    for (i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            numerosPares.push(lista[i]);
        }
    }
}
soPares(maisNumeros)
console.log(numerosPares);

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
let totalNumeros = 0
const calculaMedia = (lista) => {

    for (i = 0; i < lista.length; i++) {
        
        totalNumeros += lista[i];
        
    }

    console.log(`O total é ${totalNumeros}`);

    totalNumeros = totalNumeros / lista.length;

    console.log(`o comprimento da lista é ${lista.length}`)
}

calculaMedia(maisNumeros);

console.log(`A média é ${totalNumeros}`);

console.log();
console.log('MÓDULO 04');
console.log();

// Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const indexandoVinte = vinte.forEach((indice, numero) => {
    console.log(`Índice ${indice}; Número ${numero + 1}`);
})

//  Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

const executaOperacaoEmArray = (array, calculo) => {
    let resultado = [];
    const xPorDois = function (array) {
       array.forEach((elemento) => {
        resultado.push(elemento * calculo);
        
    });
    return resultado;
    
}

const multiplicado = xPorDois(array);
console.log(`Array original é "${array}", e o multiplicado é ${multiplicado}`);
return multiplicado
}

console.log(executaOperacaoEmArray(vinte, 2));

// Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const verificaLista = (array, elemento) => {
    if (array.includes(elemento)) {
        console.log(`O index do elemento "${elemento}" é "${array.indexOf(elemento)}"`)
    } else {
        console.log(`-1`);
    };
}
 verificaLista(clinica, "Doggo");

// Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. 
// Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. 
// Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const turmasAB = nomesTurmaA.concat(nomesTurmaB);

  const nomeNaTurma = (nome, array) => {
    if (array.find(elemento => elemento === nome)){
        console.log(`Temos ${nome} na turma.`)
     } else {
        console.log(`Aluno não encontrado.`);
     }
    };

  nomeNaTurma("Ana Souza", turmasAB);
  nomeNaTurma("Isadora", turmasAB)
  nomeNaTurma("Marina", turmasAB);
  nomeNaTurma("Daniela", turmasAB);

// Considere um array de números inteiros.
// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. 
// Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original

const numerosExercicioSeis = [6, 9, 12, 15, 18, 21];

const numerosMultiplicadosPorTres = [];

const xPorTres = function(array, novoArray) {
    
        array.forEach(
            item => novoArray.push(
                item * 3
            )
        )
        console.log(`Enquanto multiplicamos o array "${numerosExercicioSeis}" e obtivemos "${novoArray}", o index do elemento "18" no array original é "${numerosExercicioSeis.indexOf(18)}"`);
}



xPorTres(numerosExercicioSeis, numerosMultiplicadosPorTres);

console.log();
console.log('MÓDULO 05');
console.log();

// Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const soldarListas = (...listas) => {
    let todasAsListas = [];
    if (listas != todasAsListas.includes(listas)) {
        todasAsListas = [...listas];
    }
    return todasAsListas;
};

console.log(soldarListas(nomesTurmaA, nomesTurmaB, maisNumeros));

// Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [...maisNumeros];
console.log(`Neste exercício, o array "maisNumeros" foi copiado para "valores" e possui os elementos "${maisNumeros}"`);

const somaValores = function (lista) { 
    return lista.reduce((total, soma) => total + soma,0);
}

// const totalValoresClonadoDeMaisNumeros = somaValores(valores);

console.log(`A soma de "valores" é "76"`);
console.log(`A soma de "valores" é "${somaValores(valores)}"`);

// Considere duas listas de cores:
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// const listaTodasCores = coresLista1.push(...coresLista2);
// console.log(listaTodasCores);

const listasDeCores = new Set([...coresLista1, ...coresLista2]);

console.log(listasDeCores);

// Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const soParesDeNovo = (lista) => {
    // return é necessário
    // lista.filter é o resultado da função
    // filter irá filtrar de acordo com a lógica descrita em seguida
    // a lógia é que um "elemento" precisa ser "Ele mesmo % 2 igual 0"
    return lista.filter(elemento => elemento % 2 === 0); 
}

// console.log(valores);
console.log(soParesDeNovo(valores));

// Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const multiploTresMaiorCinco = (lista) => {
    return lista.filter (elemento => elemento > 5 && elemento % 3 === 0);
};

console.log(multiploTresMaiorCinco(valores));

// Crie uma função que receba um array de números e retorne a soma de todos os elementos

const somaDeTodosOsNumerosDeNovo = (lista) => {
    return lista.reduce((total, somatorio) => total + somatorio, 0)
}

console.log(`A soma de "valores" é "76" de novo`);
console.log(`A soma de "valores" é "${somaDeTodosOsNumerosDeNovo(valores)}" de novo`);