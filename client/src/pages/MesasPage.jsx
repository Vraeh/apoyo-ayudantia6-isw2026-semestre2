import { useCallback } from 'react'
import DataTable from '../components/DataTable.jsx'
import { useFetch } from '../hooks/useFetch.js'
import * as mesaService from '../services/mesaService.js'

const columnas = [
  { campo: 'numero',    titulo: 'Numero' },
  { campo: 'nombre',    titulo: 'Nombre' },
  { campo: 'capacidad', titulo: 'Capacidad' }
]

export default function MesasPage() {
  const { datos: mesas, cargando } = useFetch(useCallback(mesaService.listar, []))

  if (cargando) return <p className="vacio">Cargando...</p>
  return <DataTable columnas={columnas} datos={mesas} vacio="No hay mesas registradas" />
}
