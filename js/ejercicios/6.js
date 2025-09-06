/**
 * @file 6.js
 * @description Cerebro del Ejercicio 6: Completar el cuadrado con a > 1.
 */
var ejercicioData = {
    titulo: "Análisis de la Función Cuadrática: $y = 3x^2 - 12x + 1$",
    
    pasos: [
        {
            explicacion: "Para encontrar el vértice de esta parábola, usaremos la técnica de <span class='keyword-action'>completar el cuadrado</span>. El primer paso, cuando el coeficiente de $x^2$ no es 1, es <span class='keyword-action'>factorizar</span> este coeficiente (el 3) de los términos que contienen 'x'.",
            formula: "y = (3x^2 - 12x) + 1 \\implies y = 3(x^2 - 4x) + 1"
        },
        {
            explicacion: "Ahora, nos enfocamos en la expresión dentro del paréntesis, $x^2 - 4x$. Tomamos la mitad del coeficiente de 'x' ($-4/2 = -2$) y lo elevamos al cuadrado ($(-2)^2 = 4$).",
            formula: "(\\frac{-4}{2})^2 = 4"
        },
        {
            explicacion: "<span class='keyword-action'>Sumamos y restamos</span> este número (4) <span class='keyword-rule'>dentro</span> del paréntesis para no alterar la expresión.",
            formula: "y = 3(x^2 - 4x + 4 - 4) + 1"
        },
        {
            explicacion: "<span class='keyword-rule'>¡Paso Clave!</span> Ahora necesitamos mover el '-4' fuera del paréntesis. Para hacerlo, debemos <span class='keyword-action'>multiplicarlo</span> por el factor que está afuera, que es 3. Así, $3 \\times -4 = -12$.",
            formula: "y = 3(x^2 - 4x + 4) - 12 + 1"
        },
        {
            explicacion: "El trinomio dentro del paréntesis es ahora un <span class='keyword-concept'>cuadrado perfecto</span> y puede ser <span class='keyword-action'>factorizado</span>. Los términos constantes fuera del paréntesis se combinan.",
            formula: "y = 3(x - 2)^2 - 11"
        },
        {
            explicacion: "Hemos llegado a la <span class='keyword-concept'>forma canónica o de vértice</span>, $y = a(x-h)^2 + k$. A partir de aquí, podemos identificar directamente las coordenadas del <span class='keyword-concept'>vértice (h, k)</span>.",
            formula: "h = 2, \\quad k = -11 \\implies \\text{Vértice: } (2, -11)"
        },
        {
            explicacion: "El coeficiente $a=3$ es <span class='keyword-concept'>positivo</span>, lo que significa que la parábola se abre <span class='keyword-rule'>hacia arriba</span>. El vértice (2, -11) es el punto <span class='keyword-rule'>mínimo</span> de la función. La parábola también será 'más estrecha' que $y=x^2$ debido al factor 3.",
            formula: "\\text{Dominio: } x \\in (-\\infty, \\infty) \\quad | \\quad \\text{Rango: } y \\in [-11, \\infty)"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La gráfica es una parábola con vértice en } (2, -11) \\text{ que abre hacia arriba.}"
        }
    ],

    grafico: {
        tipo: 'parabola',
        // Pasamos la función original para que plano.js la dibuje
        funcion: (x) => 3*x**2 - 12*x + 1,
        // Pasamos las coordenadas del vértice para que plano.js lo marque
        vertice: { x: 2, y: -11 }
    }
};