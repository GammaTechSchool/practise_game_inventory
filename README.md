![Logo de GammaTech School](./assets/images/Logo_Yellow.png)

# Game Inventory

## Introducción
Este proyecto está pensado para trabajar todo lo aprendido de React hasta ahora: hooks, router, context, etc.
La idea es crear una aplicación que simule la interfaz del inventario de un videojuego de rol. En concreto, este proyecto está inspirado en  _The Legend of Zelda: Breath of the Wild_. Para realizar la tarea, tenéis a vuestra disposición [esta API](https://practise-game-inventory.vercel.app/api/items), donde encontraréis los artículos del inventario (nombre, stats, imágenes, etc.), y [este ejemplo](https://practise-game-inventory.vercel.app), para que os sirva de guía.

![](https://media.giphy.com/media/g3ZlHx1iqhCOCcY3p2/giphy.gif)

## API
La API es sencilla:
- `/items`: devuelve la lista completa de items, separados en `weapons`, `shields` y `armor`.
- `/items/{weapon | shield | armor}`: devuelve los items de la categoría especificada.

## Instrucciones
Siguiendo el ejemplo, la aplicación debe realizar, al menos, las siguientes tareas:
- Ruta `/`:
	- Mostrar los objetos del inventario, separados por categoría (weapon, shield y armor).
	- Mostrar un esquema de los objetos equipados.
	- Equipar y desequipar objetos.
	- Mostrar descripciones de los objetos según se equipen.
- Ruta `/character`:
	- Mostrar un esquema de los objetos equipados (igual que en la página de inventario).
	- Mostrar un resumen de los stats del jugador (damage, defense, armor, etc.) que tengan en cuenta los puntos aportados por los objetos equipados.

### Inventario
Los objetos de la cuadrícula del inventario deben quedar señalados cuando se equipen.

### Descripciones
Las descripciones de los objetos, que aparecerán debajo del esquema con los objetos equipados, deberán mostrar:
- Nombre del objeto.
- Puntos de daño/defensa/armadura.
- Comparación con los puntos de daño/defensa/armadura del objeto equipado.
- Texto con la descripción del objeto.

### Página de personaje
La página de personaje, que estará en la ruta `/character`, mostrará:
- El esquema con los objetos equipados.
- Un resumen de los stats del personaje:
	- Todos los stats tienen, por defecto, `10` puntos como mínimo. 
	- A ellos habrá que sumarles los puntos de los objetos equipados.

![](https://media.giphy.com/media/RHEGP4TpkhrQTFCZE4/giphy.gif)