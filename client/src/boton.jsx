// El boton sabe de que color es y no acepta que se lo cambien.
export default function Boton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '8px 14px', borderRadius: 6, border: 0, background: '#3b5bdb', color: '#fff', fontWeight: 600, cursor: 'pointer' }}
    >
      {children}
    </button>
  )
}
