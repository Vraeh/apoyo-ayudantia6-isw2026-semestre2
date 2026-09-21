// EL MESERO de mesas: recibe el pedido, se lo pasa a la cocina y trae el plato.
const mesaService = require('../services/mesa.service')

function listar(req, res, next) {
  try { res.json(mesaService.listar()) } catch (e) { next(e) }
}

module.exports = { listar }
