# PaginaWeb
Desarrollo de mi primera pagina web de forma autodidacta, desarrollando tanto Frontend como Backend


## Tecnologías

- HTML
- CSS
- JavaScript
- PHP
- MySQL
- Bootstrap

## Desarrollo

Inicialmente se va a desarrollar la parte del backend, para establecer los datos que se van a trabajar, la estructura de rutas y la logica del negocio. Al desarrollar primero el backend ayuda a mejorar y facilitar el desarrollo del frontend, documentar bien endpoints y saber exactamente que peticiones se van a realizar y las respuestas.

### Frontend

En este repositorio se encuentra el código fuente de la página web, en el directorio `src` se encuentran los archivos HTML, CSS y JavaScript.

### Backend

En este repositorio se encuentra el código fuente de la aplicación, en el directorio `src` se encuentran los archivos PHP y MySQL.

### Base de datos

La base de datos se encuentra en el directorio `BaseDatos`, en el archivo `schema.prisma` se encuentra la estructura de la base de datos y en el archivo `dev.db` se encuentra la base de datos en formato SQLite.
Se ha desarrollado una base de datos en memoria para que se puedan probar las funcionalidades de la aplicación, sin embargo, para el despliegue en producción se recomienda utilizar una base de datos en un servidor. Para poder ver los datos en la interfaz visual se recomienda utilizar los siguientes comandos:
- Para crear las tablas segun los modelos de la base de datos: `npx prisma db push`
- Para ver los datos de la base de datos en la interfaz visual: `npx prisma studio`

## Despliegue

Para desplegar la aplicación en producción se recomienda utilizar un servidor web, como por ejemplo [Vercel](https://vercel.com/).

## Autor

[Francisco José Cabrera Bermejo](https://github.com/franciscoJCabrera)

