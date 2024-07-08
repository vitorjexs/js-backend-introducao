import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import tratarErro from './erros/funcoes-erros.js';
import { contarPalavras } from './index.js';
import { mostrarSaidaPalavras } from './helpers.js';
import { Command } from 'commander';

// const fs = require('fs');
// const tratarErro = require('./erros/funcoes-erros');

const program = new Command();

// const erroChalk = chalk.red;

program
    .version('0.0.1')
    .option('-t, --text <string>', 'Texto')
    .option('-d, --destino <string>', 'Pasta de destino')
    .action(((options) => {
        const { text, destino } = options;
        if (!text || !destino) {
          console.error(chalk.bgRed('Text ou Destino não encontrado'));
          program.help();
          return ;
        }

        const textoOriginal = path.resolve(text);
        const textoDestino = path.resolve(destino);

        try {
            processador(textoOriginal, textoDestino)
            console.log(chalk.blue('Texto processado com sucesso!'));
        } catch (error) {
            console.log(chalk.bgRed('Erro no processamento'), error);
        }

      }))

program.parse();

// const caminhoArqv = process.argv;
// console.log(caminhoArqv);
// const justTxt = caminhoArqv[2];
// console.log(justTxt);
// const destino = caminhoArqv[3];

function processador(text, destino) {
    
    fs.readFile(text, 'utf-8', (error, text) => {
        try {
            if (error) throw error
            const textoContado = contarPalavras(text);
            gravarConteudo(textoContado, destino)
        } catch (error) {
            tratarErro(error)
        }
        contarPalavras(text)
    });

}


async function gravarConteudo (conteudo, endereco) {
    const arquivoLocalGerado = `${endereco}/conteudo.txt`
    // const textoFinal = JSON.stringify(conteudo);
    const textoFinal = mostrarSaidaPalavras(conteudo)

    
    try {
        await fs.promises.writeFile(arquivoLocalGerado, textoFinal)
        console.log(chalk.bgGreen('Arquivo gerado e gravado no destino'));
    } catch (error) {
        throw error
    }
}