/**
 * @file 13.js
 * @description Cerebro del Ejercicio 13: Análisis de una Función Cuadrática (con a > 0) mediante Completar el Cuadrado.
 */
var ejercicioData = {
    titulo: "Análisis de la Función Cuadrática: $F(x) = 2x^2 - 12x - 16$",
    
    pasos: [
        {
            explicacion: "Para analizar esta <span class='keyword-concept'>función cuadrática</span> y encontrar su vértice y características, utilizaremos la técnica de <span class='keyword-action'>completar el cuadrado</span>. El primer paso es <span class='keyword-action'>factorizar</span> el coeficiente positivo de $x^2$ (que es 2) de los términos que contienen 'x'.",
            formula: "F(x) = (2x^2 - 12x) - 16 \\implies F(x) = 2(x^2 - 6x) - 16"
        },
        {
            explicacion: "Nos enfocamos en la expresión dentro del paréntesis: $x^2 - 6x$. Para completar el cuadrado, tomamos la mitad del coeficiente del término lineal (que es -6) y lo elevamos al cuadrado: $(\\frac{-6}{2})^2 = (-3)^2 = 9$.",
            formula: "(\\frac{-6}{2})^2 = 9"
        },
        {
            explicacion: "<span class='keyword-action'>Sumamos y restamos</span> este valor (9) <span class='keyword-rule'>dentro</span> del paréntesis. Como el paréntesis está multiplicado por 2, el $-9$ que sacamos se convierte en $-18$ al salir.",
            formula: "F(x) = 2(x^2 - 6x + 9 - 9) - 16"
        },
        {
            explicacion: "Ahora, <span class='keyword-action'>movemos el '-9' fuera del paréntesis</span>. Al multiplicarlo por el factor 2 que está afuera, el término se convierte en $2 \times -9 = -18$.",
            formula: "F(x) = 2(x^2 - 6x + 9) - 18 - 16"
        },
        {
            explicacion: "El trinomio dentro del paréntesis es ahora un <span class='keyword-concept'>cuadrado perfecto</span> y se factoriza como $(x-3)^2$. Combinamos los términos constantes restantes.",
            formula: "F(x) = 2(x - 3)^2 - 34"
        },
        {
            explicacion: "Hemos alcanzado la <span class='keyword-concept'>forma canónica o de vértice</span>, $y = a(x-h)^2 + k$. A partir de esta forma, podemos identificar las coordenadas del <span class='keyword-concept'>vértice (h, k)</span>.",
            formula: "h = 3, \\quad k = -34 \\implies \\text{Vértice: } (3, -34)"
        },
        {
            explicacion: "El coeficiente $a=2$ es <span class='keyword-concept'>positivo</span>, lo que significa que la parábola se abre <span class='keyword-rule'>hacia arriba</span>. El vértice $(3, -34)$ es el punto <span class='keyword-rule'>mínimo</span> de la función.",
            formula: "\\text{Dominio: } x \\in (-\\infty, \\infty) \\quad | \\quad \\text{Rango: } y \\in [-34, \\infty)"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje Y</span>, hacemos $x=0$.",
            formula: "F(0) = 2(0)^2 - 12(0) - 16 = -16 \\implies \\text{Punto: } (0, -16)"
        },
        {
            explicacion: "Para encontrar la <span class='keyword-concept'>intersección con el eje X</span> (raíces), hacemos $y=0$. En la forma canónica, $0 = 2(x-3)^2 - 34$. Despejamos $(x-3)^2$.",
            formula: "2(x-3)^2 - 34 = 0 \\implies 2(x-3)^2 = 34 \\implies (x-3)^2 = 17"
        },
        {
            explicacion: "Ahora sacamos la raíz cuadrada en ambos lados. $x-3 = \\pm \\sqrt{17}$.",
            formula: "x-3 = \\pm \\sqrt{17}"
        },
        {
            explicacion: "Las intersecciones con el eje X son $x = 3 \\pm \\sqrt{17}$. Los puntos de corte con el eje X son $(3 - \\sqrt{17}, 0)$ y $(3 + \\sqrt{17}, 0)$.",
            formula: "x = 3 \\pm \\sqrt{17} \\implies \\text{Puntos de corte X: } (3 - \\sqrt{17}, 0), (3 + \\sqrt{17}, 0)"
        },
        {
            explicacion: "A partir de las raíces $r_1 = 3 - \\sqrt{17}$ y $r_2 = 3 + \\sqrt{17}$, podemos escribir la función en su <span class='keyword-concept'>forma factorizada</span> o <span class='keyword-concept'>forma raíz</span>: $F(x) = a(x-r_1)(x-r_2)$.",
            formula: "F(x) = 2(x - (3 - \\sqrt{17}))(x - (3 + \\sqrt{17}))"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La gráfica es una parábola con vértice en } (3, -34) \\text{ que abre hacia arriba, y tiene intersecciones con el eje Y en } (0, -16) \\text{ y con el eje X en } (3 \\pm \\sqrt{17}, 0)."
        }
    ],

    grafico: {
        tipo: 'parabola',
        // Pasamos la función original para que plano.js la dibuje
        funcion: (x) => 2*(x**2) - 12*x - 16,
        // Pasamos las coordenadas del vértice para que plano.js lo marque
        vertice: { x: 3, y: -34 }
    }
};