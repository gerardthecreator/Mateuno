/**
 * @file 10.js
 * @description Cerebro del Ejercicio 10: Análisis de una Función Cuadrática (con a < 0) mediante Completar el Cuadrado.
 */
var ejercicioData = {
    titulo: "Análisis de la Función Cuadrática: $y = -x^2 - 2x + 3$",
    
    pasos: [
        {
            explicacion: "Para analizar esta <span class='keyword-concept'>función cuadrática</span> y encontrar su vértice y características, utilizaremos la técnica de <span class='keyword-action'>completar el cuadrado</span>. El primer paso crucial es <span class='keyword-action'>factorizar</span> el coeficiente negativo de $x^2$ de los términos que contienen 'x'.",
            formula: "y = (-x^2 - 2x) + 3 \\implies y = -(x^2 + 2x) + 3"
        },
        {
            explicacion: "Nos enfocamos en la expresión dentro del paréntesis: $x^2 + 2x$. Para completar el cuadrado, tomamos la mitad del coeficiente del término lineal (que es 2) y lo elevamos al cuadrado: $(\\frac{2}{2})^2 = (1)^2 = 1$.",
            formula: "(\\frac{2}{2})^2 = 1"
        },
        {
            explicacion: "<span class='keyword-action'>Sumamos y restamos</span> este valor (1) <span class='keyword-rule'>dentro</span> del paréntesis. Recuerda que estamos trabajando con $-(...)$, por lo que este '1' realmente afecta negativamente a la expresión general.",
            formula: "y = -(x^2 + 2x + 1 - 1) + 3"
        },
        {
            explicacion: "Ahora, <span class='keyword-action'>movemos el '-1' fuera del paréntesis</span>. Al multiplicarlo por el signo negativo que está afuera, el término se convierte en $+1$.",
            formula: "y = -(x^2 + 2x + 1) + 1 + 3"
        },
        {
            explicacion: "El trinomio dentro del paréntesis es ahora un <span class='keyword-concept'>cuadrado perfecto</span> y se factoriza como $(x+1)^2$. Combinamos los términos constantes restantes.",
            formula: "y = -(x + 1)^2 + 4"
        },
        {
            explicacion: "Hemos alcanzado la <span class='keyword-concept'>forma canónica o de vértice</span>, $y = a(x-h)^2 + k$. A partir de esta forma, podemos identificar las coordenadas del <span class='keyword-concept'>vértice (h, k)</span>.",
            formula: "h = -1, \\quad k = 4 \\implies \\text{Vértice: } (-1, 4)"
        },
        {
            explicacion: "El coeficiente $a=-1$ es <span class='keyword-concept'>negativo</span>, lo que significa que la parábola se abre <span class='keyword-rule'>hacia abajo</span>. El vértice $(-1, 4)$ es el punto <span class='keyword-rule'>máximo</span> de la función.",
            formula: "\\text{Dominio: } x \\in (-\\infty, \\infty) \\quad | \\quad \\text{Rango: } y \\in (-\\infty, 4]"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje Y</span>, hacemos $x=0$.",
            formula: "y = -(0)^2 - 2(0) + 3 = 3 \\implies \\text{Punto: } (0, 3)"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje X</span>, hacemos $y=0$. En la forma canónica, $0 = -(x+1)^2 + 4$. Despejando: $(x+1)^2 = 4$. Esto nos da dos soluciones: $x+1 = 2$ o $x+1 = -2$.",
            formula: "-(x+1)^2 + 4 = 0 \\implies (x+1)^2 = 4 \\implies x+1 = \\pm 2"
        },
        {
            explicacion: "Las intersecciones con el eje X son $x = 1$ y $x = -3$. Los puntos son $(1, 0)$ y $(-3, 0)$.",
            formula: "x = 1 \\quad \\text{o} \\quad x = -3 \\implies \\text{Puntos: } (1, 0), (-3, 0)"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La gráfica es una parábola con vértice en } (-1, 4) \\text{ que abre hacia abajo, y tiene intersecciones con el eje X en } (1, 0) \\text{ y } (-3, 0)."
        }
    ],

    grafico: {
        tipo: 'parabola',
        // Pasamos la función original para que plano.js la dibuje
        // Aseguramos la correcta precedencia de operadores: -(x**2) en lugar de -x**2
        funcion: (x) => -(x**2) - 2*x + 3,
        // Pasamos las coordenadas del vértice para que plano.js lo marque
        vertice: { x: -1, y: 4 }
    }
};