# Binario

## Tabla de Contenidos

* [Descripción](#descripción)
* [Caracteristicas](#caracteristicas)
* [Estructura del proyecto](#estructura-del-proyecto)
* [Instalacion y uso](#instalacion-y-uso)
* [Comandos Disponibles](#comandos-disponibles)
* [Tecnologías Utilizadas](#tecnologías-utilizadas)
* [Licencia](#licencia)

## Descripción

Este proyecto es una tienda de comercio electrónico especializada en equipo de cómputo. Está construido con el stack MERN y presenta una interfaz de usuario dinámica y responsiva. Los usuarios pueden navegar a través de la página de inicio y las páginas de productos para encontrar lo que necesitan. Cada producto tiene una descripción detallada, precio y fotos. Los usuarios pueden agregar productos a su carrito y gestionarlos con facilidad.

## Caracteristicas

* Navegación Intuitiva: Los usuarios pueden navegar fácilmente a través de la página de inicio y las páginas de productos para encontrar lo que necesitan.

* Catálogo de Productos: Una amplia gama de equipos de cómputo con descripciones detalladas, precios y fotos.

* Gestión de Carrito: Los usuarios pueden agregar productos a su carrito y gestionarlos con facilidad.

## Estructura del proyecto

```text
/
├── backend/
│   └── data
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── slices/
│   │   ├── utils/
├── upload/
└── package.json
```

## Instalacion y uso

Para iniciar el proyecto, utiliza npm start. Para construir una versión de producción, ejecuta npm run build. Las pruebas se pueden realizar con npm test.

* Clona el repositorio.
* Ejecuta npm install para instalar las dependencias.
* Usa npm start para iniciar la aplicación en un servidor de desarrollo local.
* Para construir la aplicación para producción, usa npm run build.

## Comandos Disponibles

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm start`               | Inicia el servidor express.                      |
| `npm run server`          | Inicia el servidor en modo desarrollo.           |
| `npm run client`          | Inicia el servidor de la interfaz grafica del cliente. |
| `npm run dev`             | Inicia el servidor de desarrollo del cliente y del servidor. |

## Tecnologías Utilizadas

* React
* Bootstrap y React-Bootstrap para el diseño
* React Router para la navegación
* MongoDB, Express y Node.js para el backend (información sobre la configuración y enlace al repositorio del backend si es separado

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo LICENSE.md para obtener más detalles.
