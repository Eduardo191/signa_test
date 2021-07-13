const express = require('express')

//Controllers
const pessoaController = require('./controllers/pessoaController')

const routes = express.Router()

//Routes
routes.get('/pessoas', pessoaController.index)

module.exports = routes