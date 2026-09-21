import { useState } from 'react'
import MesasPage from './MesasPage.jsx'
import ReservasPage from './ReservasPage.jsx'
import Boton from './boton.jsx'

export default function App() {
  const [vista, setVista] = useState('mesas')
  return (
    <div className="app">
      <h1>Reservas del restaurante</h1>
      <div className="tabs">
        <Boton onClick={() => setVista('mesas')}>Mesas</Boton>
        <Boton onClick={() => setVista('reservas')}>Reservas</Boton>
      </div>
      {vista === 'mesas' ? <MesasPage /> : <ReservasPage />}
    </div>
  )
}
