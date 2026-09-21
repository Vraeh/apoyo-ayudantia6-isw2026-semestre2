// Junta todas las cartas. Agregar un modulo nuevo es una linea aca.
const { Router } = require('express')

const router = Router()
router.use('/mesas', require('./mesa.routes'))
router.use('/reservas', require('./reserva.routes'))

module.exports = router
