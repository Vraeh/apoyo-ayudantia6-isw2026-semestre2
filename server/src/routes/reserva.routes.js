// LA CARTA de reservas. Fijate en el orden: primero el anfitrion, despues el mesero.
const { Router } = require('express')
const reservaController = require('../controllers/reserva.controller')
const validarReserva = require('../middlewares/validarReserva')

const router = Router()
router.get('/', reservaController.listar)
router.post('/', validarReserva, reservaController.crear)

module.exports = router
