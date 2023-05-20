# IIC2513 —Tecnologías y Aplicaciones Web

# Tarea 3 2023-1

# Frontend Calculadora
Este proyecto contiene el código del frontend de la calculadora implementada en React. Proporciona una interfaz de usuario interactiva para realizar operaciones matemáticas básicas. Las operaciones se manejan en el backend.

## Tecnologías Utilizadas
- React: Un framework de JavaScript utilizado para construir interfaces de usuario interactivas y reactivas.
- React Router: Una librería de enrutamiento utilizada para manejar la navegación entre diferentes componentes y páginas en una aplicación de React.
- CSS: Se utiliza CSS (hojas de estilo en cascada) para estilizar y diseñar los componentes y la interfaz de usuario de la calculadora.
- Vite: Un entorno de desarrollo rápido y liviano para aplicaciones web modernas. Vite se encarga de la configuración y la compilación del código de la aplicación.
- Yarn: Un administrador de paquetes utilizado para instalar y gestionar las dependencias del proyecto.

## Instalación y uso

```
yarn install
```

```
yarn dev
```

## Estructura
El frontend sigue la siguiente estructura de directorios y archivos:
<pre>
.
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

A continuación, se describe brevemente cada directorio y archivo importante:

- **`index.html`**: El archivo HTML principal que renderiza la aplicación React.
- **`package.json`**: El archivo de configuración del proyecto que contiene las dependencias y scripts.
- **`public`**: Directorio público que contiene archivos estáticos accesibles desde la aplicación.
- **`public/calculator.svg`**: Un archivo SVG utilizado para el ícono de la calculadora.
- **`src/common`**: Directorio que contiene componentes y archivos comunes utilizados en toda la aplicación.
- **`src/common/App.css`**: Estilos CSS específicos de la aplicación principal.
- **`src/common/App.jsx`**: Componente principal de la aplicación que define la estructura y enrutamiento básico.
- **`src/common/Router.jsx`**: Configuración de enrutamiento de la aplicación.
- **`src/common/index.css`**: Estilos globales de la aplicación.
- **`src/common/main.jsx`**: Punto de entrada de la aplicación que renderiza el componente principal.
- **`src/components`**: Directorio que contiene componentes reutilizables de la calculadora.
- **`src/components/Calculator`**: Directorio que contiene los archivos relacionados con el componente de la calculadora.
- **`src/components/Calculator/Calculadora.css`**: Estilos CSS específicos de la calculadora.
- **`src/components/Calculator/Calculadora.jsx`**: Componente de la calculadora que gestiona la lógica y la interfaz de usuario.
- **`src/pages`**: Directorio que contiene las páginas de la aplicación.
- **`src/pages/Layout.jsx`**: Componente de diseño que define la estructura básica de las páginas.
- **`src/pages/MainPage`**: Directorio que contiene los archivos relacionados con la página principal.
- **`src/pages/MainPage/MainPage.css`**: Estilos CSS específicos de la página principal.
- **`src/pages/MainPage/MainPage.jsx`**: Componente de la página principal que renderiza la calculadora.
- **`src/utils`**: Directorio que contiene utilidades o funciones auxiliares.
- **`src/utils/Calculadora.js`**: Archivo con funciones de utilidad relacionadas con la lógica de la calculadora.