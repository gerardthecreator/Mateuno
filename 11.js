/**
 * @file 11.js
 * @description Cerebro del Ejercicio 11: Análisis de una Función Cuadrática (con a < 0) mediante Completar el Cuadrado.
 */
var ejercicioData = {
    titulo: "Análisis de la Función Cuadrática: $F(x) = -\\frac{1}{3}x^2 + 6x - 2$",
    
    pasos: [
        {
            explicacion: "Para analizar esta <span class='keyword-concept'>función cuadrática</span> y encontrar su vértice y características, utilizaremos la técnica de <span class='keyword-action'>completar el cuadrado</span>. El primer paso es <span class='keyword-action'>factorizar</span> el coeficiente negativo y fraccionario de $x^2$ (que es $-1/3$) de los términos que contienen 'x'.",
            formula: "F(x) = (-\\frac{1}{3}x^2 + 6x) - 2 \\implies F(x) = -\\frac{1}{3}(x^2 - 18x) - 2"
        },
        {
            explicacion: "Nos enfocamos en la expresión dentro del paréntesis: $x^2 - 18x$. Para completar el cuadrado, tomamos la mitad del coeficiente del término lineal (que es -18) y lo elevamos al cuadrado: $(\\frac{-18}{2})^2 = (-9)^2 = 81$.",
            formula: "(\\frac{-18}{2})^2 = 81"
        },
        {
            explicacion: "<span class='keyword-action'>Sumamos y restamos</span> este valor (81) <span class='keyword-rule'>dentro</span> del paréntesis. Recuerda que estamos multiplicando por $-1/3$ el contenido del paréntesis, así que el $-81$ que sacamos realmente se convierte en $+81/3$.",
            formula: "F(x) = -\\frac{1}{3}(x^2 - 18x + 81 - 81) - 2"
        },
        {
            explicacion: "Ahora, <span class='keyword-action'>movemos el '-81' fuera del paréntesis</span>. Al multiplicarlo por el factor $-1/3$ que está afuera, el término se convierte en $-1/3 \times -81 = +27$.",
            formula: "F(x) = -\\frac{1}{3}(x^2 - 18x + 81) + 27 - 2"
        },
        {
            explicacion: "El trinomio dentro del paréntesis es ahora un <span class='keyword-concept'>cuadrado perfecto</span> y se factoriza como $(x-9)^2$. Combinamos los términos constantes restantes.",
            formula: "F(x) = -\\frac{1}{3}(x - 9)^2 + 25"
        },
        {
            explicacion: "Hemos alcanzado la <span class='keyword-concept'>forma canónica o de vértice</span>, $y = a(x-h)^2 + k$. A partir de esta forma, podemos identificar las coordenadas del <span class='keyword-concept'>vértice (h, k)</span>.",
            formula: "h = 9, \\quad k = 25 \\implies \\text{Vértice: } (9, 25)"
        },
        {
            explicacion: "El coeficiente $a=-1/3$ es <span class='keyword-concept'>negativo</span>, lo que significa que la parábola se abre <span class='keyword-rule'>hacia abajo</span>. El vértice $(9, 25)$ es el punto <span class='keyword-rule'>máximo</span> de la función.",
            formula: "\\text{Dominio: } x \\in (-\\infty, \\infty) \\quad | \\quad \\text{Rango: } y \\in (-\\infty, 25]"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje Y</span>, hacemos $x=0$.",
            formula: "F(0) = -\\frac{1}{3}(0)^2 + 6(0) - 2 = -2 \\implies \\text{Punto: } (0, -2)"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje X</span>, hacemos $y=0$. En la forma canónica, $0 = -\\frac{1}{3}(x-9)^2 + 25$. Despejamos $(x-9)^2$.",
            formula: "-\\frac{1}{3}(x-9)^2 = -25 \\implies (x-9)^2 = 75"
        },
        {
            explicacion: "Ahora sacamos la raíz cuadrada en ambos lados. $x-9 = \\pm \\sqrt{75}$. Simplificamos $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$.",
            formula: "x - 9 = \\pm 5\\sqrt{3}"
        },
        {
            explicacion: "Las intersecciones con el eje X son $x = 9 \\pm 5\\sqrt{3}$. Los puntos son $(9 - 5\\sqrt{3}, 0)$ y $(9 + 5\\sqrt{3}, 0)$.",
            formula: "x = 9 \\pm 5\\sqrt{3} \\implies \\text{Puntos: } (9 - 5\\sqrt{3}, 0), (9 + 5\\sqrt{3}, 0)"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La gráfica es una parábola con vértice en } (9, 25) \\text{ que abre hacia abajo, y tiene intersecciones con el eje X en } (9 \\pm 5\\sqrt{3}, 0)."
        }
    ],

    grafico: {
        tipo: 'parabola',
        // Pasamos la función original para que plano.js la dibuje
        // Usamos la notación segura para el exponente con negativo y fracción
        funcion: (x) => (-1/3)*(x**2) + 6*x - 2,
        // Pasamos las coordenadas del vértice para que plano.js lo marque
        vertice: { x: 9, y: 25 }
    }
};