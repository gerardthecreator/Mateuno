/**
 * @file 5.js
 * @description Cerebro del Ejercicio 5: Análisis y Gráfica de una Función Racional (Hipérbola).
 */
var ejercicioData = {
    titulo: "Análisis y Gráfica de la Función: $y = \\frac{x+2}{x-3}$",
    
    pasos: [
        {
            explicacion: "Para analizar esta <span class='keyword-concept'>función racional</span>, que gráficamente es una hipérbola, usamos una técnica similar a la 'completación de cuadrados' llamada <span class='keyword-action'>división polinómica</span>. Reescribimos el numerador para que contenga al denominador.",
            formula: "y = \\frac{(x-3) + 5}{x-3}"
        },
        {
            explicacion: "Ahora podemos <span class='keyword-action'>separar la fracción</span> en dos partes. Esto nos revelará las transformaciones de la función básica $y=1/x$.",
            formula: "y = \\frac{x-3}{x-3} + \\frac{5}{x-3}"
        },
        {
            explicacion: "Simplificando, obtenemos la <span class='keyword-concept'>forma de transformación</span> de la función. Esto nos dice que la gráfica de $y=1/x$ ha sido estirada verticalmente por 5, desplazada 3 unidades a la derecha y 1 unidad hacia arriba.",
            formula: "y = 1 + \\frac{5}{x-3}"
        },
        {
            explicacion: "A partir de esta forma, podemos identificar fácilmente las <span class='keyword-concept'>asíntotas</span>. La asíntota vertical ocurre donde el denominador es cero, y la horizontal es el desplazamiento vertical.",
            formula: "\\text{Asíntota Vertical: } x = 3 \\quad | \\quad \\text{Asíntota Horizontal: } y = 1"
        },
        {
            explicacion: "Para graficar con más precisión, encontramos los <span class='keyword-concept'>puntos de intersección</span> con los ejes. Para la intersección con el eje Y, hacemos $x=0$.",
            formula: "y = \\frac{0+2}{0-3} = -\\frac{2}{3} \\implies \\text{Punto: } (0, -2/3)"
        },
        {
            explicacion: "Para la intersección con el eje X, hacemos $y=0$.",
            formula: "0 = \\frac{x+2}{x-3} \\implies x+2 = 0 \\implies x = -2 \\implies \\text{Punto: } (-2, 0)"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La gráfica es una hipérbola con asíntotas en } x=3 \\text{ y } y=1."
        }
    ],

    grafico: {
        tipo: 'hiperbola_racional',
        // Pasamos la función para que plano.js pueda dibujarla
        funcion: (x) => 1 + 5 / (x - 3),
        asintota_vertical: 3,
        asintota_horizontal: 1
    }
};