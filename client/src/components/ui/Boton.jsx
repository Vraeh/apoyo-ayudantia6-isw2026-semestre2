// UN PRIMITIVO DE UI: no sabe que dice, ni de que color es, ni que pasa al tocarlo.
// Todo eso se lo pasa quien lo usa, por props.
const estilos = {
  primario:   { background: '#3b5bdb', color: '#fff' },
  secundario: { background: '#e6e8f0', color: '#1b2138' }
}

export default function Boton({ children, variante = 'primario', cargando = false, ...props }) {
  return (
    <button
      {...props}
      disabled={cargando || props.disabled}
      style={{ padding: '8px 14px', borderRadius: 6, border: 0, fontWeight: 600, cursor: 'pointer', ...estilos[variante] }}
    >
      {cargando ? 'Cargando...' : children}
    </button>
  )
}
