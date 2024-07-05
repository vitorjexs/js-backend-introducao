// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. 
// Em seguida, chame a função e exiba a saudação no console.

const saudacao = (nome) => `Olá ${nome}`;

console.log(saudacao('Vitor'));

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).
// Imprima o resultado no console.

const validarIdade = (idade) => {
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

console.log(validarIdade(17));
console.log(validarIdade(27));
console.log(validarIdade(7));

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da 
// mesma forma de trás para frente) utilizando o método de string reverse(). 
// Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

const palindromo = (palindromo) => {
    if (palindromo == palindromo.split('').reverse().join('')) {
        let omordnilap = palindromo.split('').reverse().join('');
        console.log(`${palindromo} é um palindromo, pois ao contrário fica ${omordnilap}`);
    } else {
        console.log(`${palindromo} não é um palindromo`);
    }
}

console.log(palindromo('reviver'));
console.log(palindromo('palindromo'));

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. 
// Imprima o maior valor no console.

const maiorQue = (x, y, z) => {
    if (x > y && x > z){
        return x;
    } else if (y > x && y > z){
        return y;
    } else if (z > x && z > y){
        return z;
    } else {
        console.log('Não há um único número maior que todos.')
    }
}

console.log(maiorQue(1, 2, 3));
console.log(maiorQue(25, 88, 2));
console.log(maiorQue(50, 50, 12));

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. 
// A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const potencia = (x, y) => x ** y;

console.log(potencia(2, 2));
console.log(potencia(3, 3));