const {Router} = require("express");
// Extraindo o objeto Router da biblioteca express

const router = Router();

// Método GET
router.get('/atendimentos', (req, res) =>{
    res.send('Chegou a requisição, listando todos os atendimentos')
});

// Método POST
router.post('/atendimentos', (req, res) =>{
    res.send('Chegou a requisição, criando atendimento')
});

// Método PUT
router.put('/atendimento/:id', (req, res) =>{
    const {id} = req.params;
    res.send(`Chegou a requisição, atualizando atendimento ${id}`)
});

// Método PUT
router.delete('/atendimento/:id', (req, res) =>{
    const {id} = req.params;
    res.send("Chegou a requisição, deletando atendimento " + id)
});

module.exports = router;