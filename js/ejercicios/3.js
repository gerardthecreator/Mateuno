/**
 * @file 3.js
 * @description Cerebro del Ejercicio 3: Inecuación Racional.
 */
var ejercicioData = {
    titulo: "Resolviendo la Inecuación Racional: $\\frac{3}{x} \\ge 2$",
    
    pasos: [
        {
            explicacion: "<span class='keyword-rule'>¡Regla Crítica!</span> En una inecuación, nunca debemos multiplicar o dividir por una <span class='keyword-concept'>variable</span> (como 'x') si no conocemos su signo, ya que podría invertir la desigualdad. El método correcto es <span class='keyword-action'>mover todos los términos a un lado</span> para comparar la expresión con cero.",
            formula: "\\frac{3}{x} - 2 \\ge 0"
        },
        {
            explicacion: "Ahora, combinamos los términos en una sola fracción buscando un <span class='keyword-action'>denominador común</span>, que en este caso es 'x'.",
            formula: "\\frac{3 - 2x}{x} \\ge 0"
        },
        {
            explicacion: "Para que una fracción sea mayor o igual a cero, el numerador y el denominador deben tener el mismo signo (ambos positivos o ambos negativos). Para analizar esto, encontramos los <span class='keyword-concept'>puntos críticos</span>, que son los valores de 'x' que hacen que el numerador o el denominador sean cero.",
            formula: "\\text{Puntos Críticos:}"
        },
        {
            explicacion: "Calculamos el punto crítico del <strong>numerador</strong>:",
            formula: "3 - 2x = 0 \\implies 2x = 3 \\implies x = 1.5"
        },
        {
            explicacion: "Y el punto crítico del <strong>denominador</strong>. <span class='keyword-rule'>Importante:</span> El valor que hace cero al denominador <span class='keyword-rule'>nunca puede ser parte de la solución</span>, ya que la división por cero no está definida.",
            formula: "x = 0"
        },
        {
            explicacion: "Los puntos críticos (0 y 1.5) dividen la recta numérica en tres intervalos. Analizamos el signo de la fracción $\\frac{3-2x}{x}$ en cada intervalo para ver dónde es positiva o cero.",
            formula: "(-\\infty, 0), \\quad (0, 1.5), \\quad (1.5, \\infty)"
        },
        {
            explicacion: "Tras evaluar los intervalos, encontramos que la fracción es positiva o cero únicamente en el intervalo <span class='keyword-rule'>(0, 1.5]</span>. Nota que el 0 se excluye (paréntesis) por ser del denominador, y el 1.5 se incluye (corchete) porque la inecuación es 'mayor o <strong>igual</strong>'.",
            formula: "\\text{Solución: } 0 < x \\le 1.5"
        },
        {
            tipo: 'solucionFinal',
            formula: "x \\in (0, 1.5]"
        }
    ],

    // El gráfico representa perfectamente la solución (0, 1.5]
    grafico: {
        tipo: 'intervalos_x',
        intervalos: [
            { 
                inicio: 0, 
                fin: 1.5, 
                incluye_inicio: false, // Paréntesis en 0 -> línea punteada
                incluye_fin: true      // Corchete en 1.5 -> línea sólida
            }
        ]
    }
};