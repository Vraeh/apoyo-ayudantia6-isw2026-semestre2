// ============================================================
//  EL MESON: el UNICO archivo que conoce la direccion del
//  backend. Si manana cambia el servidor, cambia una linea aca
//  y no doce archivos repartidos.
// ============================================================
const BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

async function pedir(ruta, opciones = {}) {
  const res = await fetch(BASE + ruta, {
    headers: { 'Content-Type': 'application/json' },
    ...opciones
  })
  const datos = await res.json()
  if (!res.ok) throw new Error(datos.error || 'Algo salio mal')
  return datos
}

export const api = {
  get:  ruta => pedir(ruta),
  post: (ruta, cuerpo) => pedir(ruta, { method: 'POST', body: JSON.stringify(cuerpo) })
}
