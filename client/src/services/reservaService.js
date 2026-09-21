import { api } from './api.js'

export const listar = () => api.get('/reservas')
export const crear  = datos => api.post('/reservas', datos)
