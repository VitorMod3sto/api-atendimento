const express = require("express")
// Importando biblioteca express

const app = express();
// Instanciando a aplicação com express

const port = 3000;
// Definindo a porta da aplicação

app.listen(port, (error)=>{
    if (error){
        console.log("Deu erro");
        return;
    }
    console.log("Deu certo :)")
});
// Função para verificar se possui algum erro