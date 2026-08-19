const express = require('express')
const servidor = express() //Criaçao de aplicação express e guarde ela dentro da variavel Servidor

const PORT = 3000 // criação da porta 3000
 
servidor.get('/',(req, res)=>{
    res.send('Servidor esta funcionando!')
})
servidor.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
//Criação de servidor express com a rota inicial get 
//criação da porta 3000 pelo express
