// ============================================================
//  LA COCINA de reservas: aca viven las REGLAS DEL NEGOCIO.
//  Fijate en que en este archivo no aparece ni req, ni res, ni
//  ningun codigo HTTP. Estas reglas se pueden llamar desde otro
//  endpoint, desde un script que corra de noche o desde un test.
// ============================================================
const db = require('../config/db')
const mesaService = require('./mesa.service')

function listar() {
  return db.reservas.map(r => ({ ...r, mesa: mesaService.buscarPorId(r.mesaId) }))
}

// REGLA 1: una mesa no se reserva dos veces en el mismo bloque.
function haySolape(mesaId, inicio, fin) {
  return db.reservas.some(r =>
    r.mesaId === Number(mesaId) &&
    new Date(r.inicio) < new Date(fin) &&
    new Date(r.fin) > new Date(inicio)
  )
}

function crear({ mesaId, responsable, personas, inicio, fin }) {
  const mesa = mesaService.buscarPorId(mesaId)
  if (!mesa) {
    throw Object.assign(new Error('Esa mesa no existe'), { status: 404 })
  }
  if (new Date(inicio) >= new Date(fin)) {
    throw Object.assign(new Error('La hora de inicio tiene que ser anterior a la de termino'), { status: 400 })
  }
  // REGLA 2: no se reserva una mesa para mas gente de la que cabe.
  if (Number(personas) > mesa.capacidad) {
    throw Object.assign(new Error(`La ${mesa.nombre} es para ${mesa.capacidad} personas`), { status: 400 })
  }
  if (haySolape(mesaId, inicio, fin)) {
    throw Object.assign(new Error('Esa mesa ya esta reservada en ese bloque'), { status: 409 })
  }

  const nueva = { id: db.siguienteId(), mesaId: Number(mesaId), responsable, personas: Number(personas), inicio, fin }
  db.reservas.push(nueva)
  return nueva
}

module.exports = { listar, crear }
