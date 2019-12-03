const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('./knex')

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/', (req, res) => {
    res.json('Hello World')
})
