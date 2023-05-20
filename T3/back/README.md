# IIC2513 —Tecnologías y Aplicaciones Web

# Tarea 3 2023-1

# Backend Calculadora
Este es el servidor backend para una aplicación de calculadora. Proporciona endpoints de API para realizar diferentes cálculos, como suma, resta, multiplicación y división.

## Tecnologías Utilizadas

- Node.js: Entorno de ejecución de JavaScript.
- Koa: Framework de desarrollo web para Node.js.
- Koa Router: Enrutador de Koa para manejar las rutas de la API.
- Koa Body: Módulo para analizar los datos enviados en las solicitudes HTTP.
- Koa Logger: Módulo para el registro de solicitudes en la consola.
- Dotenv: Módulo para cargar variables de entorno desde un archivo ".env".
- Koa2-cors: Paquete para habilitar el acceso CORS en la API.
- Nodemon: Herramienta para reiniciar automáticamente el servidor cuando se detectan cambios en los archivos.

## Instalación y uso

```
yarn install
```

```
yarn dev
```

## Estructura
El backend sigue la siguiente estructura de directorios y archivos:
<pre>
.
├── README.md
├── package.json
├── src
│   ├── index.js
│   ├── routes
│   │   ├── division.js
│   │   ├── multiplicacion.js
│   │   ├── resta.js
│   │   └── suma.js
│   └── routes.js
└── yarn.lock
</pre>

## Endpoints de la API
Los siguientes endpoints de API están disponibles:

- **GET /suma/:num1/:num2** - Realiza la operación de suma

- **GET /multiplicacion/:num1/:num2** - Realiza la operación de multiplicacion

- **POST /resta** - Realiza la operación de resta

- **POST /division** - Realiza la operación de division

Para obtener información detallada sobre cada endpoint, consultar los archivos de los manejadores de rutas correspondientes en el directorio `routes`.

