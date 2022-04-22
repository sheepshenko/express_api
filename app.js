const express = require('express')
const app = express()
app.use(express.json()) //indicamos que usaremos JSON
const port = 3000

//routes

//Methods HTTP:  GET, POST, PUT, DELETE
app.get('/v1/explorers', (req, res) =>{
    console.log(`GET Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer 1"}
    const explorer2 = {id: 2, name: "Explorer 2"}
    const explorers = [explorer1, explorer2]
    // HTTP CODE STATUS:  200=corercto
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) =>{
    console.log(`GET by ID Explorers V1 API ${new Date()}`)
    const explorer1 = {id: 1, name: "Explorer 1"}
    const explorer2 = {id: 2, name: "Explorer 2"}
    const explorers = [explorer1, explorer2]
    // HTTP CODE STATUS:  200=corercto
    res.status(200).json(explorer1)
})

app.post('/v1/explorers', (req, res) =>{
    console.log(`POST Explorers V1 API ${new Date()}`)
    // Agregar logica para persistir la información agregada

    console.log(req.body)  // parámetros del request
    res.status(201).json({ message: `Se creo nuevo explorer exitosamente`})   // status de que se creo nueva identidad
})


app.listen(port, () => {
    console.log("Server Listo!")
})