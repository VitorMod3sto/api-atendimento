const express = require("express")
// Importando biblioteca express

const app = express();
// Instanciando a aplicação com express

const port = 3000;
// Definindo a porta da aplicação

const router = require("./routers/index")
// Importando módulo da pasta routers routers

router(app);
// Definindo função router com o objeto app (importado de /routers/index)

app.listen(port, (error)=>{
    if (error){
        console.log("Deu erro");
        return;
    }
    console.log("Rodando aplicação :)")
});
// Função para verificar se possui algum erro