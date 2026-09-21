// LA CARTA de mesas: que se puede pedir y en que orden pasa.
const { Router } = require('express')
const mesaController = require('../controllers/mesa.controller')

const router = Router()
router.get('/', mesaController.listar)

module.exports = router
