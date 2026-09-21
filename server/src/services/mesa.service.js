// LA COCINA de mesas: aca se sabe como se consiguen las mesas.
const db = require('../config/db')

function listar() {
  return db.mesas
}

function buscarPorId(id) {
  return db.mesas.find(m => m.id === Number(id))
}

module.exports = { listar, buscarPorId }
