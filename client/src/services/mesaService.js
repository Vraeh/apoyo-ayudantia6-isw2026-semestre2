// Un archivo por recurso. Cada funcion es una linea.
import { api } from './api.js'

export const listar = () => api.get('/mesas')
