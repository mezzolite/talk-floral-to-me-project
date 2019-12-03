const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('./knex')
const getResults = require("./scraper")
const queries = require('./queries')

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/flowers', (req, res) => {
    queries.listAll()
    .then(flowers => res.send(flowers))
})

console.log(getResults())

