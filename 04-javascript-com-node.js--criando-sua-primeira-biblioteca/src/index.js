// const { log } = require('console');
// const fs = require('fs');
// const tratarErro = require('./erros/funcoes-erros');

import { log } from "console";


// const caminhoArqv = process.argv;
// const justTxt = caminhoArqv[2];

// fs.readFile(justTxt, 'utf-8', (error, text) => {
//     try {
//         if (error) throw error
//         contarPalavras(text);
//     } catch (error) {
//         tratarErro(error)
//     }
//     contarPalavrasNoArquivo(text)
// });

// Função pricipal, que ativará as outras
export const contarPalavras = (text) => {
    const paragrafosQuebrados = quebrarFormatarParagrafos(text);
    // console.log('Parágrafos Quebrados:', paragrafosQuebrados);

    const contagemPalavras = separarEmParagrafoseContarPalavras(paragrafosQuebrados);
    // console.log('Parágrafos Separados e palavras contadas:', contagemPalavras);

    // const contagemDasPalavras = contarPalavrasNoArquivo(paragrafosSeparados);
    // console.log('Contagem das Palavras:', contagemDasPalavras);


    // console.log(contagemPalavras);
    return contagemPalavras;
}

const quebrarFormatarParagrafos = (text) => {
    const textoSplitado = text.toLowerCase().split('\n')
    // console.log('Texto Splitado:', textoSplitado);

    return textoSplitado;
}

const separarEmParagrafoseContarPalavras = (text) => {
    const paragrafoIndexado = text.flatMap((paragrafo) => {
        if (!paragrafo) return [];
        return contarPalavrasNoArquivo(paragrafo);
    })
    // console.log('Parágrafo Indexado:', paragrafoIndexado);
    return paragrafoIndexado;
    // console.log(paragrafoIndexado);
    // .filter((paragrafo) => paragrafo)
    // .map(paragrafo => contarPalavrasNoArquivo(paragrafo))

}

const limparPalavras = (palavra) => {
    // if (palavra === '\r') return '';
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

const contarPalavrasNoArquivo = (paragrafo) => {

    const contagemPalavras = {};
    

    const splitPalavras = paragrafo.split(' ');

    splitPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limparPalavras(palavra);
            contagemPalavras[palavraLimpa] = (contagemPalavras[palavraLimpa] || 0) + 1;

        }

        // for (let nome in contagemPalavras) {
        //     if (contagemPalavras[nome] === 'fipenarum')
        //         nomeFipe[nome] = (nomeFipe[nome] || 0) + 1
        // }
    });
    
    return contagemPalavras;

}