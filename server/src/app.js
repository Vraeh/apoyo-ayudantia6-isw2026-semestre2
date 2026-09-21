// ARMA el restaurante, pero no abre la puerta.
const express = require('express')
const cors = require('cors')
const rutas = require('./routes')
const manejarErrores = require('./middlewares/manejarErrores')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', rutas)
app.use(manejarErrores)   // va al final, siempre

module.exports = app
