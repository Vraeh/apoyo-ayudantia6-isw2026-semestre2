// ============================================================
//  RAMA "desordenado"
//  Todo el backend en un solo archivo: los datos, las rutas,
//  las validaciones y las reglas del negocio, todo junto.
//  Funciona perfecto. Ese no es el problema.
// ============================================================
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const mesas = [
  { id: 1, numero: 'M-04', nombre: 'Mesa 4 - Terraza', capacidad: 4 },
  { id: 2, numero: 'M-11', nombre: 'Mesa 11 - Salon',  capacidad: 6 },
  { id: 3, numero: 'M-02', nombre: 'Mesa 2 - Ventana', capacidad: 2 }
]

const reservas = [
  { id: 1, mesaId: 1, responsable: 'Nelson Avello', personas: 4, inicio: '2026-09-22T21:00', fin: '2026-09-22T23:00' },
  { id: 2, mesaId: 3, responsable: 'Fabian Cartes', personas: 2, inicio: '2026-09-22T20:00', fin: '2026-09-22T21:30' }
]

let ultimoId = 2

app.get('/api/mesas', (req, res) => {
  res.json(mesas)
})

app.get('/api/reservas', (req, res) => {
  const conMesa = reservas.map(r => ({ ...r, mesa: mesas.find(m => m.id === r.mesaId) }))
  res.json(conMesa)
})

app.post('/api/reservas', (req, res) => {
  const { mesaId, responsable, personas, inicio, fin } = req.body

  if (!mesaId || !responsable || !personas || !inicio || !fin) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }
  const mesa = mesas.find(m => m.id === Number(mesaId))
  if (!mesa) {
    return res.status(404).json({ error: 'Esa mesa no existe' })
  }
  if (new Date(inicio) >= new Date(fin)) {
    return res.status(400).json({ error: 'La hora de inicio tiene que ser anterior a la de termino' })
  }
  if (Number(personas) > mesa.capacidad) {
    return res.status(400).json({ error: `La ${mesa.nombre} es para ${mesa.capacidad} personas` })
  }
  const choque = reservas.find(r =>
    r.mesaId === Number(mesaId) &&
    new Date(r.inicio) < new Date(fin) &&
    new Date(r.fin) > new Date(inicio)
  )
  if (choque) {
    return res.status(409).json({ error: 'Esa mesa ya esta reservada en ese bloque' })
  }

  const nueva = { id: ++ultimoId, mesaId: Number(mesaId), responsable, personas: Number(personas), inicio, fin }
  reservas.push(nueva)
  res.status(201).json(nueva)
})

app.listen(3000, () => console.log('API en http://localhost:3000'))
