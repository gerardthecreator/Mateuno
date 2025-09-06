/**
 * @file 1.js
 * @description Cerebro del Ejercicio 1: Inecuación Lineal.
 */
var ejercicioData = {
    titulo: "Resolviendo la Inecuación Lineal: $2x - 3 < 7$",
    
    pasos: [
        {
            explicacion: "El objetivo es <span class='keyword-action'>aislar la variable 'x'</span>. Primero, movemos el término constante (-3) al otro lado. Para ello, <span class='keyword-action'>sumamos 3</span> a ambos lados de la inecuación.",
            formula: "2x - 3 + 3 < 7 + 3"
        },
        {
            explicacion: "A continuación, <span class='keyword-action'>simplificamos</span> la expresión en ambos lados.",
            formula: "2x < 10"
        },
        {
            explicacion: "Para <span class='keyword-action'>aislar 'x'</span>, dividimos ambos lados por 2. <span class='keyword-rule'>Importante:</span> Como 2 es un número <span class='keyword-concept'>positivo</span>, el sentido de la desigualdad (<) <span class='keyword-rule'>no cambia</span>.",
            formula: "\\frac{2x}{2} < \\frac{10}{2}"
        },
        {
            explicacion: "Obtenemos la solución final para 'x'.",
            formula: "x < 5"
        },
        {
            tipo: 'solucionFinal',
            formula: "x \\in (-\\infty, 5)"
        }
    ],

    grafico: {
        tipo: 'linea_vertical',
        valor: 5,
        desigualdad: '<' // Sombreado a la izquierda, línea punteada
    }
};