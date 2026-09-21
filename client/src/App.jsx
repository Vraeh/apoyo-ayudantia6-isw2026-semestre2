import { useState } from 'react'
import MesasPage from './pages/MesasPage.jsx'
import ReservasPage from './pages/ReservasPage.jsx'
import Boton from './components/ui/Boton.jsx'

export default function App() {
  const [vista, setVista] = useState('mesas')
  return (
    <div className="app">
      <h1>Reservas del restaurante</h1>
      <div className="tabs">
        <Boton variante={vista === 'mesas' ? 'primario' : 'secundario'} onClick={() => setVista('mesas')}>Mesas</Boton>
        <Boton variante={vista === 'reservas' ? 'primario' : 'secundario'} onClick={() => setVista('reservas')}>Reservas</Boton>
      </div>
      {vista === 'mesas' ? <MesasPage /> : <ReservasPage />}
    </div>
  )
}
