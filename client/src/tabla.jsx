// La tabla de mesas.
export default function Tabla({ mesas }) {
  return (
    <table>
      <thead>
        <tr><th>Numero</th><th>Nombre</th><th>Capacidad</th></tr>
      </thead>
      <tbody>
        {mesas.map(m => (
          <tr key={m.id}><td>{m.numero}</td><td>{m.nombre}</td><td>{m.capacidad}</td></tr>
        ))}
      </tbody>
    </table>
  )
}
