// EL MESERO de reservas. Tres lineas por funcion, y ninguna decide nada.
const reservaService = require('../services/reserva.service')

function listar(req, res, next) {
  try { res.json(reservaService.listar()) } catch (e) { next(e) }
}

function crear(req, res, next) {
  try { res.status(201).json(reservaService.crear(req.body)) } catch (e) { next(e) }
}

module.exports = { listar, crear }
