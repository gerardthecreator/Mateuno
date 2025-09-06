/**
 * @file 9.js
 * @description Cerebro del Ejercicio 9: Análisis y Gráfica de una Hipérbola mediante Completación de Cuadrados.
 */
var ejercicioData = {
    titulo: "Análisis y Gráfica de la Hipérbola: $x^2 - 4y^2 - 6x - 16y - 11 = 0$",
    
    pasos: [
        {
            explicacion: "El objetivo es transformar la ecuación general de la hipérbola a su <span class='keyword-concept'>forma estándar</span>: $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$ o viceversa. Para esto, usaremos la técnica de <span class='keyword-action'>completar el cuadrado</span> para los términos de 'x' y 'y'.",
            formula: "x^2 - 6x - 4y^2 - 16y = 11"
        },
        {
            explicacion: "<span class='keyword-action'>Agrupamos</span> los términos de 'x' y los términos de 'y', y factorizamos el coeficiente del término $y^2$ (que es -4) de los términos de 'y'.",
            formula: "(x^2 - 6x) - 4(y^2 + 4y) = 11"
        },
        {
            explicacion: "Completamos el cuadrado para los términos de 'x'. Tomamos la mitad del coeficiente de 'x' ($-6/2 = -3$) y lo elevamos al cuadrado ($(-3)^2 = 9$). <span class='keyword-action'>Sumamos 9</span> dentro del paréntesis y también al lado derecho de la ecuación.",
            formula: "(x^2 - 6x + 9) - 4(y^2 + 4y) = 11 + 9"
        },
        {
            explicacion: "Completamos el cuadrado para los términos de 'y'. Tomamos la mitad del coeficiente de 'y' (en el paréntesis, $4/2 = 2$) y lo elevamos al cuadrado ($2^2 = 4$). <span class='keyword-action'>Sumamos 4</span> dentro del paréntesis de 'y'. Pero como este paréntesis está multiplicado por -4, en realidad estamos restando $4 \\times 4 = 16$. Así que <span class='keyword-action'>restamos 16</span> al lado derecho de la ecuación.",
            formula: "(x^2 - 6x + 9) - 4(y^2 + 4y + 4) = 11 + 9 - 16"
        },
        {
            explicacion: "Ahora <span class='keyword-action'>factorizamos</span> los trinomios cuadrados perfectos y simplificamos el lado derecho.",
            formula: "(x - 3)^2 - 4(y + 2)^2 = 4"
        },
        {
            explicacion: "Para obtener la forma estándar, <span class='keyword-action'>dividimos</span> toda la ecuación por el término independiente del lado derecho (4).",
            formula: "\\frac{(x - 3)^2}{4} - \\frac{4(y + 2)^2}{4} = \\frac{4}{4}"
        },
        {
            explicacion: "Simplificamos para llegar a la <span class='keyword-concept'>forma estándar de la hipérbola</span>.",
            formula: "\\frac{(x - 3)^2}{2^2} - \\frac{(y + 2)^2}{1^2} = 1"
        },
        {
            explicacion: "De esta forma, identificamos los parámetros clave: el <span class='keyword-concept'>centro (h, k)</span>, donde $h=3$ y $k=-2$. También los valores $a^2=4 \\implies a=2$ y $b^2=1 \\implies b=1$.",
            formula: "\\text{Centro: } (3, -2)"
        },
        {
            explicacion: "Como el término de $x$ es positivo, la hipérbola es <span class='keyword-concept'>horizontal</span>. Las asíntotas pasan por el centro y tienen pendientes $\\pm \\frac{b}{a}$.",
            formula: "y - k = \\pm \\frac{b}{a}(x - h) \\implies y + 2 = \\pm \\frac{1}{2}(x - 3)"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{Hipérbola con centro en } (3, -2) \\text{ y asíntotas } y = \\frac{1}{2}x - \\frac{7}{2} \\text{ y } y = -\\frac{1}{2}x - \\frac{1}{2}."
        }
    ],

    grafico: {
        tipo: 'hiperbola_definida', // Nuevo tipo para hipérbolas definidas por una ecuación
        centro: { x: 3, y: -2 },
        a: 2, // Semieje transverso
        b: 1  // Semieje conjugado
    }
};