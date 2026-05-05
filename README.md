# Colección de Ejercicios JavaScript - ConquerBlocks

Este repositorio contiene una serie de 9 mini-proyectos desarrollados para el dominio de los fundamentos de JavaScript, manipulación del DOM y gestión de estados. El proyecto utiliza un entorno de desarrollo moderno basado en Vite y SASS.

## Tecnologías Utilizadas

- JavaScript (ESM)
- SCSS (Arquitectura modular)
- Vite (Bundler y entorno de desarrollo)
- FontAwesome (Iconografía)

## Estructura del Proyecto

- `/src/pages`: Documentos HTML de cada ejercicio.
- `/src/js/exercises`: Lógica de JavaScript específica para cada reto.
- `/src/sass`: Sistema de estilos modular.
  - `/abstracts`: Variables, mixins y configuraciones globales.
  - `/pages`: Estilos específicos para cada ejercicio bajo metodología BEM.
- `index.html`: Panel principal de navegación.

## Listado de Ejercicios

1. Cambiador de color de fondo: Manipulación dinámica de estilos.
2. Contador de clics: Gestión de eventos y variables de estado.
3. Lista dinámica: Creación y eliminación de nodos en el DOM.
4. Filtro de búsqueda: Lógica de filtrado en tiempo real sobre colecciones de datos.
5. Calculadora sencilla: Implementación de operaciones aritméticas y validación de entradas.
6. Temporizador: Uso de intervalos de tiempo (setInterval) con control de pausa y reinicio.
7. Generador de contraseñas: Lógica algorítmica para seguridad y uso de Clipboard API.
8. Analizador de texto: Procesamiento de strings y métricas en tiempo real.
9. Lista de tareas: Persistencia de datos mediante LocalStorage.

## Instalación y Ejecución

1. Instalación de dependencias:
   npm install

2. Ejecución en entorno de desarrollo:
   npm run dev

3. Compilación para producción:
   npm run build
