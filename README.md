# Proyecto Validador de Tarjeta de Crédito

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Consideraciones técnicas](#4-consideraciones-técnicas)
* [5. Diseño de la interfaz](#5-diseño-de-la-interfaz)

Este proyecto consiste en la creación de una herramienta que valide el número de tarjeta de crédito de un usuario utilizando el algoritmo de Luhn.

# 1. Preámbulo
El algoritmo de Luhn es un método utilizado para validar la autenticidad de una variedad de números de identificación, incluyendo números de tarjeta de crédito. Este algoritmo se basa en la suma de los dígitos del número de tarjeta de crédito, aplicando una serie de reglas para determinar si el número es válido.

En este proyecto, hemos implementado el algoritmo de Luhn en JavaScript para crear una herramienta que permita validar números de tarjeta de crédito ingresados por el usuario.

Además, se han utilizado diferentes metodologías para mejorar la calidad y mantenibilidad del código, tales como HTML semántico, CSS, modelo de caja (box model), selectores del DOM, manejo de eventos del DOM, manipulación dinámica del DOM, módulos de ECMAScript, linter (ESLINT), identificadores descriptivos, control de versiones (Git y GitHub) y despliegue con GitHub Pages.

# 2. Resumen del proyecto
El proyecto consiste en la creación de una herramienta que valide el número de tarjeta de crédito ingresado por el usuario utilizando el algoritmo de Luhn. La herramienta se ha construido utilizando HTML, CSS y JavaScript, y se ha implementado una interfaz de usuario que permite al usuario ingresar su número de tarjeta de crédito y verificar si es válido o no. También, se enmascaran todos los dígitos de la tarjeta exceptuando los últimos cuatro.

# 3. Consideraciones generales
El proyecto se ha desarrollado utilizando HTML, CSS y JavaScript. Para el diseño de la interfaz de usuario, se ha utilizado CSS para aplicar estilos y HTML semántico para mejorar la accesibilidad y usabilidad del sitio web.

En cuanto a la implementación del algoritmo de Luhn, se ha utilizado JavaScript para realizar el cálculo y validación del número de tarjeta de crédito.

Para mejorar la calidad y mantenibilidad del código, se han aplicado diversas metodologías, tales como el uso de módulos de ECMAScript para modularizar el código y mejorar la reutilización y el uso de identificadores descriptivos para mejorar la comprensión del código.

Por último, se ha utilizado Git y GitHub para el control de versiones del proyecto, lo que permite mantener un historial de cambios.

# 4. Consideraciones técnicas

* Este proyecto se ha desarrollado utilizando HTML, CSS y JavaScript.
* Para asegurarnos de seguir buenas prácticas y mantener un código limpio y organizado, se ha utilizado el linter ESLint.
* Se ha utilizado el modelo de caja (box model) en CSS para controlar el tamaño y el espaciado de los elementos.
* Se ha aplicado CSS para diseñar y dar estilo a la página web, utilizando selectores del DOM para identificar y aplicar estilos a los elementos HTML.
* Se ha utilizado JavaScript para implementar la funcionalidad de la aplicación, incluyendo la validación del número de tarjeta mediante el algoritmo de Luhn y enmascarar los números de la tarjeta.
* Se han utilizado diferentes tipos de datos primitivos en JavaScript, como strings, numbers y booleans, y se han empleado variables para almacenar valores y poder acceder a ellos posteriormente.
* Se han utilizado condicionales (if-else y lógica booleana) y bucles/ciclos (for) para controlar el flujo de la aplicación y ejecutar diferentes acciones según las condiciones establecidas.
* Se han definido y utilizado funciones.
* Se ha utilizado el módulo de ECMAScript (ES modules) para organizar el código y permitir la reutilización de funciones y variables en diferentes archivos.
* Se ha utilizado Git y GitHub para control de versiones y gestión del proyecto.

# 5. Diseño de la interfaz
La interfaz de usuario del proyecto fue diseñada para ser amigable, simple y fácil de usar. Se utilizó HTML y CSS para crear una estructura clara y organizada que permita al usuario ingresar sus datos y recibir la validación correspondiente.

La página principal cuenta con un formulario que solicita el número de tarjeta de crédito del usuario. También se incluyen campos para la fecha de vencimiento y el código de seguridad. Debajo del formulario, se encuentra un botón para validar la tarjeta.

El diseño de la interfaz se basa en el color negro, azul, naranja, rosado y gris para lograr un aspecto moderno y minimalista. Los elementos del formulario se organizan en cuadros separados para que sea fácil distinguir entre los distintos campos. Además, se utilizó CSS para agregar efectos de sombra y bordes redondeados para dar una sensación más suave a la interfaz.

