# 🕹️ Analizador Sintáctico del Lenguaje "Juego"

Este proyecto implementa un **analizador léxico, sintáctico y semántico** utilizando **ANTLR4** y **Node.js** para un lenguaje ficticio de definición de juegos tipo aventura. A partir de una entrada escrita en este lenguaje, el programa genera e interpreta código en JavaScript que simula su comportamiento.

## 📄 Descripción del Lenguaje

El lenguaje permite definir un `juego` con múltiples `escenas`, cada una compuesta por acciones como:

- `mostrar "Texto"` → imprime un mensaje.
- `leer variable` → pide ingreso de datos al usuario.
- `si variable == valor saltar Escena` → ejecuta una escena si se cumple una condición.
- `saltar Escena` → cambia a otra escena directamente.

### 🧾 Ejemplo de entrada válida (`valido1.txt`)

```txt
juego Aventura {
  escena Inicio {
    mostrar "¡Bienvenido!";
    leer decision;
    si decision == "ir" saltar Camino;
  }
  escena Camino {
    mostrar "Elegiste el camino correcto.";
  }
}
```

## 📦 Estructura del Proyecto

```
analizador/
│
├── .vscode/
│   ├── launch.json 
├── grammar/
│   ├── Juego.g4                 # Gramática en ANTLR4
│   └── generated/               # Archivos generados por ANTLR (Lexer, Parser, etc.)
│
├── input/                       # Archivos de entrada (2 válidos y 2 con errores)
│   ├── valido1.txt
│   ├── valido2.txt
│   ├── invalido1.txt
│   └── invalido2.txt
│
├── output/                      # Archivos JavaScript generados
│
├── index.js                     # Script principal
├── package.json
└── README.md
```

## 🚀 Cómo ejecutar el analizador

### 1. Instalar dependencias

```bash
npm install antlr4
```

### 2. Generar archivos ANTLR (si no están generados)

```bash
java -jar antlr-4.13.1-complete.jar -Dlanguage=JavaScript -o grammar/generated grammar/Juego.g4
```

### 3. Ejecutar el analizador

```bash
node index.js valido1.txt
```

Esto realizará:

- ✅ Análisis léxico y sintáctico
- 📋 Tabla de tokens reconocidos
- 🌲 Árbol de análisis sintáctico (concreto y estructurado)
- 💻 Traducción a JavaScript
- 🔁 Ejecución del código traducido

## 📤 Archivos de Salida

Se genera un archivo `.js` dentro de la carpeta `output/` con el mismo nombre del archivo de entrada. Por ejemplo:

```
input/valido1.txt → output/valido1.js
```

## ❗ Validaciones implementadas

- El archivo fuente debe comenzar con la palabra clave `juego`.
- Se permite cualquier cantidad de escenas y acciones.
- El sistema informará errores de sintaxis si los hay.
- Si se desea extender la semántica, se puede usar un Visitor personalizado.

## 🛠️ Requisitos

- Node.js
- ANTLR4 (versión para JavaScript)
- Visual Studio Code (recomendado)

## 🧪 Archivos de prueba

Incluye 4 archivos en `/input` para evaluar:

- ✅ `valido1.txt`, `valido2.txt`: entradas correctas
- ❌ `invalido1.txt`, `invalido2.txt`: entradas con errores de sintaxis o estructura

## 🧑‍💻 Autor

Trabajo práctico para la materia **Construcción de Analizadores** – Universidad Siglo 21.
