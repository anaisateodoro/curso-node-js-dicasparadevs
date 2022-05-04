const fs = require('fs');
const path = require('path');

//criar uma pasta
fs.mkdir(path.join(__dirname,'/test'),(error) => {
   if(error){
       console.log('Erro: ', error);
   } //callback quando for realizado a criação daí ocorrá um erro

   console.log('Pasta criada com sucesso!');

});

// Criar um arquivo
fs.writeFile(
    path.join(__dirname,'./test','teste.txt' ),
    'Olá Node!', (error) => {
    if(error){
        return console.log('Erro: ', error)
    }
    console.log('Arquivo criado com sucesso!')
});



//Adicionar à um arquivo
fs.appendFile(path.join(__dirname,'./test','teste.txt' ),'Hello World',(error) => {
    if(error){
        return console.log('Erro: ', error)
    }
    console.log('Arquivo modificado com sucesso!')
});

//ler arquivo
fs.readFile(path.join(__dirname,'./test','teste.txt' ),'utf8',(error,data) => {
    if(error){
        return console.log('Erro: ', error)
    }
    
    console.log(data);
});