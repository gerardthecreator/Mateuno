/**
 * @file 7.js
 * @description Cerebro del Ejercicio 7: Análisis de una Función Lineal (Recta).
 */
var ejercicioData = {
    titulo: "Análisis de la Función Lineal: $y = 3x + 2$",
    
    pasos: [
        {
            explicacion: "Esta es una <span class='keyword-concept'>función lineal</span> de la forma $y = mx + b$. La gráfica será una línea recta. Aquí, 'm' es la <span class='keyword-concept'>pendiente</span> y 'b' es la <span class='keyword-concept'>intersección con el eje Y</span>.",
            formula: "y = 3x + 2"
        },
        {
            explicacion: "La <span class='keyword-concept'>pendiente (m)</span> es 3. Esto significa que por cada unidad que 'x' avanza, 'y' aumenta 3 unidades. La línea sube de izquierda a derecha.",
            formula: "\\text{Pendiente } m = 3"
        },
        {
            explicacion: "La <span class='keyword-concept'>intersección con el eje Y (b)</span> es 2. Esto indica que la línea cruza el eje Y en el punto $(0, 2)$.",
            formula: "\\text{Intersección Y: } (0, 2)"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje X</span>, hacemos $y=0$ y despejamos 'x'.",
            formula: "0 = 3x + 2 \\implies 3x = -2 \\implies x = -\\frac{2}{3}"
        },
        {
            explicacion: "Así, la línea cruza el eje X en el punto $(-\\frac{2}{3}, 0)$.",
            formula: "\\text{Intersección X: } (-\\frac{2}{3}, 0)"
        },
        {
            explicacion: "El <span class='keyword-concept'>Dominio</span> de cualquier función lineal es todos los números reales, y su <span class='keyword-concept'>Rango</span> también es todos los números reales.",
            formula: "\\text{Dominio: } x \\in (-\\infty, \\infty) \\quad | \\quad \\text{Rango: } y \\in (-\\infty, \\infty)"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La gráfica es una línea recta con pendiente 3 que pasa por } (0, 2)."
        }
    ],

    grafico: {
        tipo: 'linea_recta',
        // Pasamos la función para que plano.js la dibuje
        funcion: (x) => 3 * x + 2,
        // Pasamos las intersecciones para que plano.js las marque
        interseccion_y: 2,
        interseccion_x: -2/3 
    }
};