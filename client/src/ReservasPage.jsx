import { useEffect, useState } from 'react'
import Tabla2 from './tabla2.jsx'
import Boton from './boton.jsx'

export default function ReservasPage() {
  const [reservas, setReservas] = useState([])
  const [mesas, setMesas] = useState([])
  const [form, setForm] = useState({ mesaId: '', responsable: '', personas: '', inicio: '', fin: '' })
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/api/reservas').then(r => r.json()).then(d => { setReservas(d); setCargando(false) })
    fetch('http://localhost:3000/api/mesas').then(r => r.json()).then(setMesas)
  }, [])

  async function guardar(e) {
    e.preventDefault()
    setError('')
    const res = await fetch('http://localhost:3000/api/reservas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error); return }
    const frescas = await fetch('http://localhost:3000/api/reservas').then(r => r.json())
    setReservas(frescas)
    setForm({ mesaId: '', responsable: '', personas: '', inicio: '', fin: '' })
  }

  if (cargando) return <p className="vacio">Cargando...</p>

  return (
    <>
      <Tabla2 reservas={reservas} />
      <form onSubmit={guardar}>
        <select value={form.mesaId} onChange={e => setForm({ ...form, mesaId: e.target.value })}>
          <option value="">Mesa...</option>
          {mesas.map(m => <option key={m.id} value={m.id}>{m.numero}</option>)}
        </select>
        <input placeholder="Responsable" value={form.responsable} onChange={e => setForm({ ...form, responsable: e.target.value })} />
        <input type="number" min="1" placeholder="Personas" value={form.personas} onChange={e => setForm({ ...form, personas: e.target.value })} />
        <input type="datetime-local" value={form.inicio} onChange={e => setForm({ ...form, inicio: e.target.value })} />
        <input type="datetime-local" value={form.fin} onChange={e => setForm({ ...form, fin: e.target.value })} />
        <Boton>Reservar</Boton>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  )
}
