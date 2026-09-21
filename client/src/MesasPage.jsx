import { useEffect, useState } from 'react'
import Tabla from './tabla.jsx'

export default function MesasPage() {
  const [mesas, setMesas] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // La direccion del backend escrita a mano, aca y en las otras tres llamadas.
    fetch('http://localhost:3000/api/mesas')
      .then(r => r.json())
      .then(d => { setMesas(d); setCargando(false) })
  }, [])

  if (cargando) return <p className="vacio">Cargando...</p>
  return <Tabla mesas={mesas} />
}
