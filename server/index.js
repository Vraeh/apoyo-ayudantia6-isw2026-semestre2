// ABRE la puerta. Eso es todo lo que hace este archivo.
const app = require('./src/app')

const PUERTO = 3000
app.listen(PUERTO, () => console.log(`API en http://localhost:${PUERTO}`))
