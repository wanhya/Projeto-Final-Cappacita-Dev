
const {databaseconnection} = require ('./conexao')


async function salvarcomentario(filme){
    
    const insertfilme = {
            descricao: filme.descricao,
            
        }
    const result = await databaseconnection('comentario').insert(insertfilme)    
    
    //console.log(result)
    if(result) {
        return {
            descricao: filme.descricao,
            id: result[0]
        }
    }else {
        console.log("Erro")
    }

}

//mostrar comentarios

async function mostrarcomentario() {
   
    const result = await databaseconnection.select('descricao').from('comentario')
    
    return result
    
}










module.exports = { salvarcomentario, mostrarcomentario }
