// Funciones puras: no saben de React ni de HTTP. Entra un dato, sale otro.
export function formatearHora(f) {
  const d = new Date(f)
  return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0')
}
