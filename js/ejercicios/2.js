/**
 * @file 2.js
 * @description Cerebro del Ejercicio 2: Inecuación Racional con Valor Absoluto.
 * Utiliza el nuevo tipo de gráfico 'intervalos_x' para una representación precisa.
 */
var ejercicioData = {
    titulo: "Resolviendo: $|\\frac{x-2}{x+4}| > 1$",
    
    pasos: [
        {
            explicacion: "Esta es una inecuación con <span class='keyword-concept'>valor absoluto</span>. La <span class='keyword-rule'>propiedad fundamental</span> para resolver $|A| > B$ (con B > 0) es que se descompone en dos inecuaciones separadas, unidas por una '<span class='keyword-concept'>O</span>' (unión).",
            formula: "A > B \\quad \\text{o} \\quad A < -B"
        },
        {
            explicacion: "Aplicando esta regla a nuestro problema, obtenemos dos casos que debemos resolver por separado.",
            formula: "\\frac{x-2}{x+4} > 1 \\quad \\text{o} \\quad \\frac{x-2}{x+4} < -1"
        },
        {
            explicacion: "<strong>Caso 1:</strong> Resolvemos la primera inecuación. <span class='keyword-rule'>¡Cuidado!</span> Un error común es multiplicar por $(x+4)$, ya que no sabemos su signo. Lo correcto es <span class='keyword-action'>restar 1</span> de ambos lados para comparar con cero.",
            formula: "\\frac{x-2}{x+4} - 1 > 0"
        },
        {
            explicacion: "Buscamos un <span class='keyword-action'>denominador común</span> y simplificamos el numerador.",
            formula: "\\frac{x-2 - (x+4)}{x+4} > 0 \\implies \\frac{-6}{x+4} > 0"
        },
        {
            explicacion: "Analizamos la fracción: el numerador (-6) es siempre <span class='keyword-concept'>negativo</span>. Para que toda la fracción sea <span class='keyword-concept'>positiva</span> (> 0), el denominador también debe ser <span class='keyword-rule'>negativo</span>.",
            formula: "x+4 < 0 \\implies x < -4"
        },
        {
            explicacion: "<strong>Caso 2:</strong> Ahora resolvemos la segunda inecuación. De forma similar, <span class='keyword-action'>sumamos 1</span> a ambos lados.",
            formula: "\\frac{x-2}{x+4} + 1 < 0"
        },
        {
            explicacion: "Nuevamente, buscamos un <span class='keyword-action'>denominador común</span> y simplificamos.",
            formula: "\\frac{x-2 + (x+4)}{x+4} < 0 \\implies \\frac{2x+2}{x+4} < 0"
        },
        {
            explicacion: "Para resolver esta inecuación racional, encontramos los <span class='keyword-concept'>puntos críticos</span> (donde el numerador o denominador son cero). Estos puntos son <span class='keyword-rule'>x = -1</span> y <span class='keyword-rule'>x = -4</span>.",
            formula: "2(x+1)=0 \\implies x=-1 \\quad | \\quad x+4=0 \\implies x=-4"
        },
        {
            explicacion: "Estos puntos dividen la recta real en intervalos. Evaluamos el signo de la fracción en cada uno y buscamos donde es <span class='keyword-concept'>negativa</span> (< 0). El intervalo que cumple esta condición es <span class='keyword-rule'>(-4, -1)</span>.",
            formula: "\\text{Solución del Caso 2: } x \\in (-4, -1)"
        },
        {
            explicacion: "<strong>Solución Final:</strong> Finalmente, <span class='keyword-action'>unimos</span> las soluciones de ambos casos (la solución del Caso 1 <span class='keyword-rule'>O</span> la del Caso 2).",
            formula: "(x < -4) \\cup (-4 < x < -1)"
        },
        {
            tipo: 'solucionFinal',
            formula: "x \\in (-\\infty, -4) \\cup (-4, -1)"
        }
    ],

    // --- ¡NUEVO OBJETO DE GRÁFICO PRECISO! ---
    grafico: {
        tipo: 'intervalos_x',
        intervalos: [
            // Primer intervalo: (-∞, -4)
            { 
                inicio: -Infinity, 
                fin: -4, 
                incluye_fin: false // El -4 no se incluye (línea punteada)
            },
            // Segundo intervalo: (-4, -1)
            { 
                inicio: -4, 
                fin: -1, 
                incluye_inicio: false, // El -4 no se incluye (línea punteada)
                incluye_fin: false     // El -1 no se incluye (línea punteada)
            }
        ]
    }
};