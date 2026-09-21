// El cajon de la cocina: aca va todo lo que no supimos donde poner.
export function formatearHora(f) {
  const d = new Date(f)
  return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0')
}
export function formatearFecha(f) {
  const d = new Date(f)
  return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear()
}
export function validarCorreo(c) {
  return /.+@.+\..+/.test(c)
}
export function calcularDuracion(inicio, fin) {
  return (new Date(fin) - new Date(inicio)) / 3600000
}
export const URL_BACKEND = 'http://localhost:3000/api'
