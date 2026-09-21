// La tabla de reservas. Es casi identica a tabla.jsx, pero con otras columnas.
function formatearHora(f) {
  const d = new Date(f)
  return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0')
}

export default function Tabla2({ reservas }) {
  return (
    <table>
      <thead>
        <tr><th>Mesa</th><th>Responsable</th><th>Personas</th><th>Desde</th><th>Hasta</th></tr>
      </thead>
      <tbody>
        {reservas.map(r => (
          <tr key={r.id}>
            <td>{r.mesa ? r.mesa.numero : '-'}</td>
            <td>{r.responsable}</td>
            <td>{r.personas}</td>
            <td>{formatearHora(r.inicio)}</td>
            <td>{formatearHora(r.fin)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
