/**
 * @file 4.js
 * @description Cerebro del Ejercicio 4: Inecuación con dos Valores Absolutos.
 */
var ejercicioData = {
    titulo: "Resolviendo: $|3x - 1| > |x + 2|$",
    
    pasos: [
        {
            explicacion: "Cuando una inecuación compara dos <span class='keyword-concept'>valores absolutos</span>, la <span class='keyword-rule'>propiedad clave</span> es que podemos <span class='keyword-action'>elevar al cuadrado</span> ambos lados. Esto es válido porque ambos lados son garantizados <span class='keyword-concept'>no negativos</span>, y al hacerlo, se preserva el sentido de la desigualdad.",
            formula: "|A| > |B| \\iff A^2 > B^2"
        },
        {
            explicacion: "Aplicamos esta propiedad a nuestra inecuación para eliminar los valores absolutos.",
            formula: "(3x - 1)^2 > (x + 2)^2"
        },
        {
            explicacion: "<span class='keyword-action'>Expandimos</span> ambos binomios al cuadrado, recordando que $(a-b)^2 = a^2 - 2ab + b^2$ y $(a+b)^2 = a^2 + 2ab + b^2$.",
            formula: "9x^2 - 6x + 1 > x^2 + 4x + 4"
        },
        {
            explicacion: "Ahora, <span class='keyword-action'>agrupamos todos los términos</span> en el lado izquierdo para obtener una <span class='keyword-concept'>inecuación cuadrática</span> estándar, comparada con cero.",
            formula: "9x^2 - x^2 - 6x - 4x + 1 - 4 > 0"
        },
        {
            explicacion: "Simplificamos la expresión.",
            formula: "8x^2 - 10x - 3 > 0"
        },
        {
            explicacion: "Para resolver la inecuación cuadrática, primero encontramos los <span class='keyword-concept'>puntos críticos</span> (las raíces) de la ecuación correspondiente $8x^2 - 10x - 3 = 0$. Usaremos la <span class='keyword-concept'>fórmula cuadrática</span>.",
            formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
        },
        {
            explicacion: "Sustituimos los coeficientes $a=8$, $b=-10$ y $c=-3$ en la fórmula.",
            formula: "x = \\frac{-(-10) \\pm \\sqrt{(-10)^2 - 4(8)(-3)}}{2(8)} = \\frac{10 \\pm \\sqrt{100 + 96}}{16}"
        },
        {
            explicacion: "Calculamos las dos raíces.",
            formula: "x = \\frac{10 \\pm \\sqrt{196}}{16} = \\frac{10 \\pm 14}{16}"
        },
        {
            explicacion: "Las raíces o puntos críticos son:",
            formula: "x_1 = \\frac{10+14}{16} = \\frac{24}{16} = \\frac{3}{2} \\quad \\text{y} \\quad x_2 = \\frac{10-14}{16} = \\frac{-4}{16} = -\\frac{1}{4}"
        },
        {
            explicacion: "La expresión $8x^2 - 10x - 3$ representa una <span class='keyword-concept'>parábola cóncava hacia arriba</span> (porque $a=8$ es positivo). Buscamos dónde es <span class='keyword-concept'>mayor que cero</span> (> 0), lo cual ocurre en los intervalos <span class='keyword-rule'>fuera de las raíces</span>.",
            formula: "\\text{Solución: } x < -\\frac{1}{4} \\quad \\text{o} \\quad x > \\frac{3}{2}"
        },
        {
            tipo: 'solucionFinal',
            formula: "x \\in (-\\infty, -\\frac{1}{4}) \\cup (\\frac{3}{2}, \\infty)"
        }
    ],

    grafico: {
        tipo: 'intervalos_x',
        intervalos: [
            // Primer intervalo: (-∞, -1/4)
            { 
                inicio: -Infinity, 
                fin: -0.25, // -1/4 en decimal
                incluye_fin: false // La desigualdad es estricta (>)
            },
            // Segundo intervalo: (3/2, ∞)
            { 
                inicio: 1.5, // 3/2 en decimal
                fin: Infinity, 
                incluye_inicio: false // La desigualdad es estricta (>)
            }
        ]
    }
};