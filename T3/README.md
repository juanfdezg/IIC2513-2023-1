# IIC2513 —Tecnologías y Aplicaciones Web

# Tarea 3 2023-1

## Calculadora - Descripción General
Esta tarea consiste en crear una aplicación que simula una calculadora, combinando un frontend hecho con React y un backend hecho con Koa. La calculadora permite realizar cálculos matemáticos simples, como sumas, restas, multiplicaciones y divisiones. El frontend proporciona una interfaz interactiva donde se ingresan los números y se muestra el resultado, mientras que el backend se encarga de procesar las operaciones y devolver los resultados al frontend. Las operaciones deben consistir en ingresar un número, seguido de un operador (+, -, x, ÷), y otro número. En caso de no seguir el formato, la operación arrojará 'Error' y se imprimirá en consola el error en específico. Para más información, consultar los archivos *README.md* específicos del frontend y backend, ubicados en sus carpetas correspondientes.

## Estructura
La tarea sigue la siguiente estructura de directorios y archivos:
<pre>
.
├── README.md
├── back
│   ├── README.md
│   ├── package.json
│   ├── src
│   │   ├── index.js
│   │   ├── routes
│   │   │   ├── division.js
│   │   │   ├── multiplicacion.js
│   │   │   ├── resta.js
│   │   │   └── suma.js
│   │   └── routes.js
│   └── yarn.lock
└── front
    └── calculadora
        ├── README.md
        ├── index.html
        ├── package.json
        ├── public
        │   └── calculator.svg
        ├── src
        │   ├── common
        │   │   ├── App.css
        │   │   ├── App.jsx
        │   │   ├── Router.jsx
        │   │   ├── index.css
        │   │   └── main.jsx
        │   ├── components
        │   │   └── Calculator
        │   │       ├── Calculadora.css
        │   │       └── Calculadora.jsx
        │   ├── pages
        │   │   ├── Layout.jsx
        │   │   └── MainPage
        │   │       ├── MainPage.css
        │   │       └── MainPage.jsx
        │   └── utils
        │       └── Calculadora.js
        ├── vite.config.js
        └── yarn.lock
</pre>

## Fuentes de Ayuda y Recursos Utilizados
Para la realización de este proyecto, fueron de ayuda las cápsulas y el material del curso "Tecnologías y Aplicaciones Web". Para obtener información técnica más detallada sobre las tecnologías utilizadas, se consultó la documentación en línea proporcionada por [DevDocs API Documentation](https://devdocs.io/). También fue de ayuda ChatGPT para la resolución de dudas y consultas específicas.