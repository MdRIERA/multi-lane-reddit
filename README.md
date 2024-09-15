# 🎨 Multi-Lane Reddit Client 

¡Bienvenido a **Multi-Lane Reddit Client**! 🚀 Este es un cliente de Reddit basado en el navegador, diseñado para mostrar múltiples subreddits en carriles (lanes) personalizables. Cada carril muestra las publicaciones más recientes de un subreddit específico, en un estilo visual infantil y amigable.

## ✨ Características

- **Agregar subreddits**: Ingresa el nombre de cualquier subreddit para crear un nuevo carril que muestra las publicaciones más recientes.
- **Eliminar carriles**: Cada carril incluye un botón de eliminación para que puedas quitar subreddits no deseados.
- **Diseño responsivo**: Se adapta automáticamente a diferentes tamaños de pantalla, mostrando:
  - 3 carriles en pantallas grandes,
  - 2 carriles en pantallas medianas,
  - 1 carril en pantallas pequeñas.
- **Guardar carriles**: Los subreddits que agregues se guardan en el almacenamiento local (localStorage), de manera que estarán disponibles cuando vuelvas a cargar la página.
- **Mensajes de carga y error**: Mientras se obtienen los datos, se muestra un indicador de "cargando", y en caso de error, se muestra un mensaje claro.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura básica de la página.
- **CSS3**: Estilos personalizados y responsivos.
- **JavaScript (ES6)**: Lógica para interactuar con la API de Reddit, manejar el DOM y almacenar datos.
- **Reddit API**: Consumo del feed JSON para obtener publicaciones de subreddits.

## 🚀 Instalación y uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repositorio en tu máquina:
   ```bash
   git clone https://github.com/tuusuario/multi-lane-reddit-client.git

# 🎮 Uso de la aplicación
## 1. Agregar un subreddit
Escribe el nombre de un subreddit en el campo de entrada (por ejemplo, javascript, sin el prefijo r/).
Haz clic en el botón "Agregar Subreddit".
Aparecerá un nuevo carril mostrando las publicaciones más recientes del subreddit.
## 2. Eliminar un carril
Cada carril tiene un botón de "Eliminar". Haz clic en él para quitar el carril del subreddit.
El subreddit también se eliminará del almacenamiento local, por lo que no se mostrará la próxima vez que cargues la página.
## 🗂️ Estructura del proyecto

```bash
multi-lane-reddit-client/
│
├── index.html           # Página principal HTML
├── styles.css           # Estilos personalizados CSS
├── app.js               # Lógica principal en JavaScript
├── README.md            # Archivo de documentación (este archivo)
```
# 🎨 Estilo visual
El estilo está inspirado en un diseño infantil, con colores brillantes, bordes redondeados y fuentes divertidas para crear una experiencia amigable y acogedora:

## Paleta de colores: 
Se utilizan colores vibrantes como amarillo, naranja y rojo.
## Bordes redondeados: 
Los bordes suaves y redondeados le dan un aspecto amigable a la interfaz.
## Tipografía: 
La fuente utilizada es Comic Sans MS, ideal para un estilo divertido y relajado.

