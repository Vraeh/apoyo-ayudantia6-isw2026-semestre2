// El segundo cajon de la cocina. Nadie recuerda por que hay dos.
export function formatearHoraBonita(f) {
  const d = new Date(f)
  return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0') + ' hrs'
}
export function capitalizar(t) {
  return t.charAt(0).toUpperCase() + t.slice(1)
}
