# Reservas del restaurante · ejemplo de la Ayudantía 6

Un mini sistema para reservar **mesas de un restaurante**, hecho dos veces.

Y sí, es a propósito: en la ayudantía usamos un restaurante para explicar cómo se
organiza un proyecto (la carta, el anfitrión, el mesero, la cocina, la bodega).
Acá el proyecto además **gestiona** un restaurante, así que todo habla del mismo mundo.

Este repositorio tiene dos ramas con **exactamente la misma funcionalidad**:

| Rama | Qué es |
|---|---|
| `desordenado` | Todo apurado, sin criterio. Funciona igual de bien. |
| `ordenado` | Lo mismo, con el criterio de la ayudantía. |

La gracia es esta: **no cambió ni una línea de lógica entre una rama y la otra.**
Cambió dónde vive cada línea. Compáralas así:

```bash
git diff desordenado ordenado --stat
```

## Qué hace el sistema

- Lista las mesas del restaurante (número, nombre y capacidad).
- Lista las reservas del día.
- Crea una reserva, aplicando dos reglas del negocio:
  1. Una mesa no se puede reservar dos veces en el mismo bloque horario.
  2. No se puede reservar una mesa para más personas de las que caben.

## Cómo levantarlo (en cualquiera de las dos ramas)

Necesitas Node 18 o superior. No necesitas base de datos ni nada más.

```bash
# terminal 1 — el backend
cd server
npm install
npm run dev          # queda en http://localhost:3000

# terminal 2 — el frontend
cd client
npm install
npm run dev          # queda en http://localhost:5173
```

## Una aclaración importante

Acá la "base de datos" es un arreglo en memoria, para que esto corra sin que
instales PostgreSQL. En tu proyecto del ramo eso es **Prisma**, y el único archivo
que cambia es el que guarda los datos. Todo lo demás (rutas, controladores,
servicios, componentes) se organiza exactamente igual.

Como los datos viven en memoria, si reinicias el servidor vuelven al estado inicial.
