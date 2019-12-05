const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('./knex')
const queries = require('./queries')

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/flowers', (request, response) => {
    queries.listAllFlowers()
    .then(flowers => response.send(flowers))
})

app.post("/flowers", (request, response) => {
    queries.createFlower(request.body)
    .then(flower => response.json(flower))
})

app.delete('/flowers/:id', (request, response) => {
    queries.deleteFlower(request.params.id)
    .then(r => response.send(204))
})

app.put('/flowers/:id', (request, response) => {
    queries.updateFlower(request.params.id, request.body)
    .then(data => response.json(data))
})

app.get('/bouquets', (request, response) => {
    queries.getFlowersInBouquets()
    .then(bouquets => response.send(bouquets))
})

app.post('/bouquets', (request, response) => {
    queries.createBouquet(request.body)
    .then(bouquet => response.json(bouquet))
})

app.post('/bouquets-flowers', (request, response) => {
    queries.createBouquetFlowers(request.body)
    .then(bouquetFlower => response.json(bouquetFlower)) 
})


