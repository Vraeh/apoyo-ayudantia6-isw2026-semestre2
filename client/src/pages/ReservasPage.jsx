import { useCallback, useState } from 'react'
import DataTable from '../components/DataTable.jsx'
import Boton from '../components/ui/Boton.jsx'
import { useFetch } from '../hooks/useFetch.js'
import { formatearHora } from '../utils/fecha.js'
import * as reservaService from '../services/reservaService.js'
import * as mesaService from '../services/mesaService.js'

const columnas = [
  { campo: 'mesa',        titulo: 'Mesa',        render: r => (r.mesa ? r.mesa.numero : '-') },
  { campo: 'responsable', titulo: 'Responsable' },
  { campo: 'personas',    titulo: 'Personas' },
  { campo: 'inicio',      titulo: 'Desde',       render: r => formatearHora(r.inicio) },
  { campo: 'fin',         titulo: 'Hasta',       render: r => formatearHora(r.fin) }
]

const VACIO = { mesaId: '', responsable: '', personas: '', inicio: '', fin: '' }

export default function ReservasPage() {
  const { datos: reservas, cargando, recargar } = useFetch(useCallback(reservaService.listar, []))
  const { datos: mesas } = useFetch(useCallback(mesaService.listar, []))
  const [form, setForm] = useState(VACIO)
  const [error, setError] = useState('')
  const [guardando, setGuardando] = useState(false)

  async function guardar(e) {
    e.preventDefault()
    setError('')
    setGuardando(true)
    try {
      await reservaService.crear(form)
      setForm(VACIO)
      recargar()
    } catch (err) {
      setError(err.message)
    } finally {
      setGuardando(false)
    }
  }

  if (cargando) return <p className="vacio">Cargando...</p>

  return (
    <>
      <DataTable columnas={columnas} datos={reservas} vacio="Sin reservas para hoy" />
      <form onSubmit={guardar}>
        <select value={form.mesaId} onChange={e => setForm({ ...form, mesaId: e.target.value })}>
          <option value="">Mesa...</option>
          {mesas.map(m => <option key={m.id} value={m.id}>{m.numero}</option>)}
        </select>
        <input placeholder="Responsable" value={form.responsable} onChange={e => setForm({ ...form, responsable: e.target.value })} />
        <input type="number" min="1" placeholder="Personas" value={form.personas} onChange={e => setForm({ ...form, personas: e.target.value })} />
        <input type="datetime-local" value={form.inicio} onChange={e => setForm({ ...form, inicio: e.target.value })} />
        <input type="datetime-local" value={form.fin} onChange={e => setForm({ ...form, fin: e.target.value })} />
        <Boton cargando={guardando}>Reservar</Boton>
      </form>
      {error && <p className="error">{error}</p>}
    </>
  )
}
