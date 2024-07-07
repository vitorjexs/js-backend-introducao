function filtrarQtd (paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)
}


function mostrarSaidaPalavras (lista) {
    let textoFinal = '';
    lista.forEach((elemento, indice) => {
        const duplicadas = filtrarQtd(elemento);
        const quantidadeDuplicadas = duplicadas.length;
        textoFinal += `Parágrafo ${indice + 1} - Quantidade de duplicadas: ${quantidadeDuplicadas} ("${duplicadas.join(', ')}") \n`;
    });

    return textoFinal;
}

export { mostrarSaidaPalavras }