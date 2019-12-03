const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('./knex')
// const getResults = require("./scraper")
const queries = require('./queries')

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/flowers', (request, response) => {
    queries.listAll()
    .then(flowers => response.send(flowers))
})

app.post("/flowers", (request, response) => {
    queries.create(request.body)
    .then(flower => response.json(flower))
})

app.delete('/flowers/:id', (request, response) => {
    queries.delete(request.params.id)
    .then(r => response.send(204))
})

app.put('/flowers/:id', (request, response) => {
    queries.updateFlower(request.params.id, request.body)
    .then(data => response.json(data))
})



