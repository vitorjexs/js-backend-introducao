import fs from 'fs';
import tratarErro from './erros/funcoes-erros.js';
import { contarPalavras } from './index.js';
import { mostrarSaidaPalavras } from './helpers.js';

// const fs = require('fs');
// const tratarErro = require('./erros/funcoes-erros');


const caminhoArqv = process.argv;
console.log(caminhoArqv);
const justTxt = caminhoArqv[2];
console.log(justTxt);
const destino = caminhoArqv[3];

fs.readFile(justTxt, 'utf-8', (error, text) => {
    try {
        if (error) throw error
        const textoContado = contarPalavras(text);
        gravarConteudo(textoContado, destino)
    } catch (error) {
        tratarErro(error)
    }
    contarPalavras(text)
});

async function gravarConteudo (conteudo, endereco) {
    const arquivoLocalGerado = `${endereco}/conteudo.txt`
    // const textoFinal = JSON.stringify(conteudo);
    const textoFinal = mostrarSaidaPalavras(conteudo)

    
    try {
        await fs.promises.writeFile(arquivoLocalGerado, textoFinal)
        console.log('Arquivo gerado e gravado no destino');
    } catch (error) {
        throw error
    }
}