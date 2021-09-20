const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyparser = require('body-parser')
const initial_path = path.join(__dirname, "");
const database = require('./db');
const { databaseconnection } = require('./conexao');

const connection = mysql.createConnection({
    host: '172.17.0.2',
    user:'root',
    password:'10031981Va@',
    database:'desafio'
});


connection.connect();



app.use(express.static(initial_path));
app.use(bodyparser.urlencoded ({extended: false}))

app.get('/', (req, res)=> {
   res.sendFile(path.join(initial_path, "movies.html"));

})

app.get('/:id', (req, res) => {
   res.sendFile(path.join(initial_path, "detalhes.html"));
})


//rotas


app.get('/:id/comentario', function(req, res){
    connection.query ('SELECT * FROM comentario', 
    function(error, results){
        if (error){
            throw error };
        res.send(results.map(item =>({
            descricao: item.descricao
        })));
    });
});

app.post('/comentario', async (req, res) => {
    const coment = await database.salvarcomentario ({
        descricao: req.body.descricao,
        
    }).then(function(){
       
       res.redirect('/')
        })
            
    res.send(coment) 
    
})

app.listen(9001, '0.0.0.0', function(){
    console.log('conectado na porta 9001');
})

