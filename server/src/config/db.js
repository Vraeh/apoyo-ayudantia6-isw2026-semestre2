// ============================================================
//  LA BODEGA: aca viven los datos y nada mas.
//  En tu proyecto del ramo esto es Prisma. Aca son arreglos en
//  memoria para que esto corra sin instalar PostgreSQL.
//  Fijate en que este es el UNICO archivo que habria que cambiar.
// ============================================================
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

module.exports = { mesas, reservas, siguienteId: () => ++ultimoId }
