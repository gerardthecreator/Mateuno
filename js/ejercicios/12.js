/**
 * @file 12.js
 * @description Cerebro del Ejercicio 12: Análisis de una Función Cuadrática (con a < 0) mediante Completar el Cuadrado.
 */
var ejercicioData = {
    titulo: "Análisis de la Función Cuadrática: $F(x) = -4x^2 - 8x + 3$",
    
    pasos: [
        {
            explicacion: "Para analizar esta <span class='keyword-concept'>función cuadrática</span> y encontrar su vértice y características, utilizaremos la técnica de <span class='keyword-action'>completar el cuadrado</span>. El primer paso es <span class='keyword-action'>factorizar</span> el coeficiente negativo de $x^2$ (que es $-4$) de los términos que contienen 'x'.",
            formula: "F(x) = (-4x^2 - 8x) + 3 \\implies F(x) = -4(x^2 + 2x) + 3"
        },
        {
            explicacion: "Nos enfocamos en la expresión dentro del paréntesis: $x^2 + 2x$. Para completar el cuadrado, tomamos la mitad del coeficiente del término lineal (que es 2) y lo elevamos al cuadrado: $(\\frac{2}{2})^2 = (1)^2 = 1$.",
            formula: "(\\frac{2}{2})^2 = 1"
        },
        {
            explicacion: "<span class='keyword-action'>Sumamos y restamos</span> este valor (1) <span class='keyword-rule'>dentro</span> del paréntesis. Como el paréntesis está multiplicado por $-4$, el $-1$ que sacamos se convierte en $+4$ al salir.",
            formula: "F(x) = -4(x^2 + 2x + 1 - 1) + 3"
        },
        {
            explicacion: "Ahora, <span class='keyword-action'>movemos el '-1' fuera del paréntesis</span>. Al multiplicarlo por el factor $-4$ que está afuera, el término se convierte en $-4 \times -1 = +4$.",
            formula: "F(x) = -4(x^2 + 2x + 1) + 4 + 3"
        },
        {
            explicacion: "El trinomio dentro del paréntesis es ahora un <span class='keyword-concept'>cuadrado perfecto</span> y se factoriza como $(x+1)^2$. Combinamos los términos constantes restantes.",
            formula: "F(x) = -4(x + 1)^2 + 7"
        },
        {
            explicacion: "Hemos alcanzado la <span class='keyword-concept'>forma canónica o de vértice</span>, $y = a(x-h)^2 + k$. A partir de esta forma, podemos identificar las coordenadas del <span class='keyword-concept'>vértice (h, k)</span>.",
            formula: "h = -1, \\quad k = 7 \\implies \\text{Vértice: } (-1, 7)"
        },
        {
            explicacion: "El coeficiente $a=-4$ es <span class='keyword-concept'>negativo</span>, lo que significa que la parábola se abre <span class='keyword-rule'>hacia abajo</span>. El vértice $(-1, 7)$ es el punto <span class='keyword-rule'>máximo</span> de la función.",
            formula: "\\text{Dominio: } x \\in (-\\infty, \\infty) \\quad | \\quad \\text{Rango: } y \\in (-\\infty, 7]"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje Y</span>, hacemos $x=0$.",
            formula: "F(0) = -4(0)^2 - 8(0) + 3 = 3 \\implies \\text{Punto: } (0, 3)"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje X</span> (raíces), hacemos $y=0$. En la forma canónica, $0 = -4(x+1)^2 + 7$. Despejamos $(x+1)^2$.",
            formula: "-4(x+1)^2 + 7 = 0 \\implies -4(x+1)^2 = -7 \\implies (x+1)^2 = \\frac{7}{4}"
        },
        {
            explicacion: "Ahora sacamos la raíz cuadrada en ambos lados. $x+1 = \\pm \\sqrt{\\frac{7}{4}}$.",
            formula: "x+1 = \\pm \\frac{\\sqrt{7}}{2}"
        },
        {
            explicacion: "Las intersecciones con el eje X son $x = -1 \\pm \\frac{\\sqrt{7}}{2}$. Los puntos de corte con el eje X son $(-1 - \\frac{\\sqrt{7}}{2}, 0)$ y $(-1 + \\frac{\\sqrt{7}}{2}, 0)$.",
            formula: "x = -1 \\pm \\frac{\\sqrt{7}}{2} \\implies \\text{Puntos de corte X: } (-1 - \\frac{\\sqrt{7}}{2}, 0), (-1 + \\frac{\\sqrt{7}}{2}, 0)"
        },
        {
            explicacion: "A partir de las raíces $r_1 = -1 - \\frac{\\sqrt{7}}{2}$ y $r_2 = -1 + \\frac{\\sqrt{7}}{2}$, podemos escribir la función en su <span class='keyword-concept'>forma factorizada</span> o <span class='keyword-concept'>forma raíz</span>: $F(x) = a(x-r_1)(x-r_2)$.",
            formula: "F(x) = -4(x - (-1 - \\frac{\\sqrt{7}}{2}))(x - (-1 + \\frac{\\sqrt{7}}{2})) \\implies F(x) = -4(x + 1 + \\frac{\\sqrt{7}}{2})(x + 1 - \\frac{\\sqrt{7}}{2})"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La gráfica es una parábola con vértice en } (-1, 7) \\text{ que abre hacia abajo, y tiene intersecciones con el eje Y en } (0, 3) \\text{ y con el eje X en } (-1 \\pm \\frac{\\sqrt{7}}{2}, 0)."
        }
    ],

    grafico: {
        tipo: 'parabola',
        // Pasamos la función original para que plano.js la dibuje
        // Usamos la notación segura para el exponente con negativo y coeficiente
        funcion: (x) => -4*(x**2) - 8*x + 3,
        // Pasamos las coordenadas del vértice para que plano.js lo marque
        vertice: { x: -1, y: 7 }
    }
};