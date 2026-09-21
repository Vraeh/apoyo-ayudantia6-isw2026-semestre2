// El unico lugar del backend que arma una respuesta de error.
// Gracias a esto, los controladores solo escriben: catch (e) { next(e) }
module.exports = function manejarErrores(err, req, res, next) {
  res.status(err.status || 500).json({ error: err.message || 'Error interno' })
}
