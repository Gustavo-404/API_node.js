const express = require('express')
const routes = express.Router()

let db = [
    { '1': { Nome: 'José das Coves', Idade: '20' } },
    { '2': { Nome: 'Joãp pé de Feijão', Idade: '25' } },
    { '3': { Nome: 'Fulano da Silva', Idade: '30' } }
]

// Buscar Dados
routes.get('/getClient', (req, res) => {
        return res.json(db)
    })
    // Inserir Dados
routes.post('/addNewClient', (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).end()
    }

    db.push(body)
    return res.json(body)
})

routes.delete('/deleteClient/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id]) {
            return item
        }
    })

    db = newDB
    return res.send(newDB)

})

module.exports = routes