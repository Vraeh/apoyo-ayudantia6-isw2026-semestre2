// EL ANFITRION DE LA PUERTA: revisa la FORMA del pedido.
// Si falta un campo, no vale la pena molestar a la cocina.
module.exports = function validarReserva(req, res, next) {
  const { mesaId, responsable, personas, inicio, fin } = req.body
  if (!mesaId || !responsable || !personas || !inicio || !fin) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' })
  }
  next()
}
