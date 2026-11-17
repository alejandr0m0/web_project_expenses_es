# web_project_expenses_es

Aplicación web para llevar el control de gastos personales, desarrollada como parte del programa de desarrollo web de TripleTen. Permite asignar un presupuesto, registrar gastos por categoría y consultar estadísticas que se actualizan al agregar o eliminar registros.

## Funcionalidades

- Asignar un presupuesto y calcular el saldo disponible.
- Agregar gastos mediante un formulario modal.
- Clasificar los gastos en Comida, Comer fuera, Transporte, Hogar y Suscripciones.
- Eliminar gastos individuales.
- Consultar el gasto total, el promedio por registro y el total de cada categoría.
- Identificar la categoría con mayor gasto acumulado.
- Mostrar el estado del saldo mediante colores.
- Guardar el presupuesto y los gastos en `localStorage` para recuperarlos al recargar la página.
- Restablecer el presupuesto a cero y recuperar los gastos de ejemplo mediante el botón **Borrar todo**.

## Tecnologías

- HTML5 para la estructura de la página y la plantilla de cada gasto.
- CSS3 con archivos organizados por bloques y nomenclatura BEM.
- JavaScript para los cálculos, los eventos y la manipulación del DOM.
- `localStorage` y JSON para almacenar los datos en el navegador.

El proyecto no requiere instalar dependencias ni ejecutar un proceso de compilación.

## Ejecución local

1. Clona el repositorio y entra en la carpeta del proyecto:

   ```bash
   git clone https://github.com/alejandr0m0/web_project_expenses_es.git
   cd web_project_expenses_es
   ```

2. Inicia un servidor local. Si tienes Python 3 instalado, puedes ejecutar:

   ```bash
   python3 -m http.server 8000 --bind 127.0.0.1
   ```

3. Abre [http://127.0.0.1:8000](http://127.0.0.1:8000) en el navegador.

También puedes abrir `index.html` mediante la extensión Live Server de Visual Studio Code.

## Uso

1. Ingresa un presupuesto y pulsa **Asignar**.
2. Pulsa **Nuevo gasto**, selecciona una categoría e ingresa el importe.
3. Pulsa **Agregar** para guardar el gasto y actualizar las estadísticas.
4. Utiliza el botón de eliminar de cada registro para quitarlo de la lista.
5. Pulsa **Borrar todo** para volver a los datos de ejemplo y reiniciar el presupuesto.

En la primera carga, la aplicación incluye siete gastos de ejemplo que suman **222.00**. La categoría con mayor gasto inicial es **Hogar**, con **70.00**. Si hay datos guardados en el navegador, se cargan en su lugar.

## Organización del proyecto

```text
web_project_expenses_es/
├── blocks/                 # Estilos de los bloques de la interfaz
├── images/                 # Recursos gráficos
├── pages/
│   └── index.css           # Importaciones de los estilos
├── scripts/
│   ├── calculations.js     # Datos de gastos y funciones de cálculo
│   ├── handle-html.js      # Interfaz, eventos y actualización de estadísticas
│   └── index.js            # Persistencia e inicialización de la aplicación
├── vendor/                 # Normalize.css y fuentes locales
├── index.html              # Página principal
└── README.md
```

Los scripts se cargan en el orden `calculations.js`, `handle-html.js` e `index.js`, ya que comparten variables y funciones.

## Lógica de los gastos

Cada gasto se representa mediante un array con la categoría y el importe:

```js
["groceries", 33]
```

Estos registros se almacenan en el array anidado `expenseEntries`. La función `addExpenseEntry()` agrega un registro y suma su importe al total. Las funciones de cálculo obtienen el promedio, el saldo y los totales por categoría.

Para determinar la categoría con mayor gasto, se comparan sus importes acumulados. En caso de empate, se conserva la primera categoría según el orden definido en `categories`. Si no hay registros, actualmente se muestra **Comida: 0.00**.
