export default function tratarErro (error) {
    if (error.code === 'ENOENT'){
        throw new Error('Caminho/Arquivo não encontrado');
    } else {
        return 'Algo deu errado'
    }
};

// module.exports = tratarErro;