// UNA SOLA TABLA para todas las pantallas.
// No sabe que es una mesa ni que es una reserva: solo dibuja filas.
export default function DataTable({ columnas, datos, vacio }) {
  if (!datos.length) return <p className="vacio">{vacio}</p>

  return (
    <table>
      <thead>
        <tr>{columnas.map(c => <th key={c.campo}>{c.titulo}</th>)}</tr>
      </thead>
      <tbody>
        {datos.map(fila => (
          <tr key={fila.id}>
            {columnas.map(c => <td key={c.campo}>{c.render ? c.render(fila) : fila[c.campo]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
