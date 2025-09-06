/**
 * @file 1.js
 * @description Cerebro del Ejercicio 1.
 * Formato unificado: todas las fórmulas son LaTeX puro, sin delimitadores.
 */
var ejercicioData = {
    titulo: "Resolviendo la Inecuación Lineal: $3x - 5 \\ge 4$",
    
    pasos: [
        {
            explicacion: "El objetivo es <span class='keyword-action'>aislar la variable 'x'</span>. Para empezar, vamos a mover el término constante (-5) al lado derecho de la inecuación. Hacemos esto <span class='keyword-action'>sumando 5</span> a ambos lados.",
            formula: "3x - 5 + 5 \\ge 4 + 5"
        },
        {
            explicacion: "Ahora, <span class='keyword-action'>simplificamos</span> la expresión realizando las sumas en ambos lados de la desigualdad.",
            formula: "3x \\ge 9"
        },
        {
            explicacion: "Para despejar 'x' completamente, <span class='keyword-action'>dividimos</span> ambos lados por el coeficiente de x, que es 3. <span class='keyword-rule'>Regla Clave:</span> Como estamos dividiendo por un número <span class='keyword-concept'>positivo</span> (3), el sentido de la desigualdad (>=) <span class='keyword-rule'>se mantiene igual</span>.",
            formula: "\\frac{3x}{3} \\ge \\frac{9}{3}"
        },
        {
            explicacion: "Finalmente, obtenemos la solución simplificada para 'x'.",
            formula: "x \\ge 3"
        },
        {
            tipo: 'solucionFinal',
            // ¡CAMBIO IMPORTANTE! La fórmula ahora es LaTeX puro, sin delimitadores.
            formula: "x \\in [3, +\\infty)"
        }
    ],

    grafico: {
        tipo: 'linea_vertical',
        valor: 3,
        desigualdad: '>='
    }
};