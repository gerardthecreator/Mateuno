// ======================================================================================
// 9.JS - Ficha de Datos para f(x) = x² + 3/2x + 4
// ======================================================================================
// Este archivo exporta el objeto de datos de la función cuadrática f(x) = x² + 3/2x + 4.
// ======================================================================================

const dataFuncion8 = {
 id: 8,
 titulo: "8. Parábola: f(x) = x² + 3/2x + 4",
 teoriaHTML: `
        <h2>1. Identificación de la Función</h2>
        <p>
            Analizaremos la función <span class="highlight-proceso">$$f(x) = x^2 + \\frac{3}{2}x + 4$$</span>
            Al observar el término de mayor grado, <span class="highlight-proceso">\\(x^2\\)</span>, identificamos que se trata de una <strong class="highlight-termino">función cuadrática</strong>.
        </p>
        <p>
            Dado que el coeficiente del término <span class="highlight-proceso">\\(x^2\\)</span> es 1 (un número positivo), su gráfica será una <strong class="highlight-termino">parábola</strong> que se <strong class="highlight-resultado">abre hacia arriba</strong>.
        </p>

        <h2>2. Encontrando el Vértice: Completación de Cuadrados</h2>
        <p>
            Para determinar el <strong class="highlight-termino">vértice</strong> de la parábola, utilizaremos el método de <strong class="highlight-termino">completación de cuadrados</strong> para transformar la ecuación a su <strong class="highlight-termino">forma canónica</strong>, que es <span class="highlight-proceso">$$f(x) = a(x-h)^2 + k$$</span>. El vértice estará en el punto <span class="highlight-resultado">\\((h, k)\\)</span>.
        </p>
        <p>
            <strong>Paso A:</strong> Agrupamos los términos que contienen la variable 'x'.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 + \\frac{3}{2}x) + 4$$</span>
        </p>
        <p>
            <strong>Paso B:</strong> Identificamos el coeficiente del término lineal (el de 'x'), que es <strong class="highlight-proceso">3/2</strong>.
            <ul>
                <li>Dividimos este coeficiente entre 2: <span class="highlight-proceso">\\(\\frac{3/2}{2} = \\frac{3}{4}\\)</span>.</li>
                <li>Elevamos el resultado al cuadrado: <span class="highlight-proceso">\\(\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}\\)</span>.</li>
            </ul>
            Este valor, <span class="highlight-proceso">\\(9/16\\)</span>, es el número que necesitamos para completar el cuadrado.
        </p>
        <p>
            <strong>Paso C:</strong> Para no alterar la ecuación, sumamos y restamos este valor dentro del paréntesis.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 + \\frac{3}{2}x + \\frac{9}{16} - \\frac{9}{16}) + 4$$</span>
        </p>
        <p>
            <strong>Paso D:</strong> Los tres primeros términos dentro del paréntesis forman un <strong class="highlight-termino">trinomio cuadrado perfecto</strong>, que podemos factorizar. El término <span class="highlight-proceso">\\(-9/16\\)</span> lo sacamos del paréntesis.<br>
            <span class="highlight-proceso">$$f(x) = \\left(x + \\frac{3}{4}\\right)^2 - \\frac{9}{16} + 4$$</span>
        </p>
        <p>
            <strong>Paso E:</strong> Simplificamos las constantes fuera del binomio. Convertimos 4 a dieciseisavos para tener un denominador común: <span class="highlight-proceso">$$4 = \\frac{64}{16}$$</span>.<br>
            <span class="highlight-proceso">$$-\\frac{9}{16} + \\frac{64}{16} = \\frac{55}{16}$$</span>.<br>
            La ecuación en su <strong class="highlight-termino">forma canónica</strong> es:<br>
            <span class="highlight-proceso">$$f(x) = \\left(x + \\frac{3}{4}\\right)^2 + \\frac{55}{16}$$</span>
        </p>

        <h2>3. Conclusiones e Interpretación de la Gráfica</h2>
        <p>
            A partir de la forma canónica, podemos extraer las características principales de la parábola:
            <ul>
                <li>
                    El <strong class="highlight-termino">vértice</strong> \\((h, k)\\): Comparando <span class="highlight-proceso">\\(f(x) = (x + 3/4)^2 + 55/16\\)</span> con la forma general <span class="highlight-proceso">\\(a(x-h)^2 + k\\)</span>:
                    <ul>
                        <li><span class="highlight-proceso">\\(h\\)</span> es el opuesto del número dentro del paréntesis, por lo tanto, \\(h = -3/4\\).</li>
                        <li><span class="highlight-proceso">\\(k\\)</span> es la constante fuera del paréntesis, por lo tanto, \\(k = 55/16\\).</li>
                    </ul>
                    El vértice de esta parábola se encuentra en el punto <strong class="highlight-resultado">\\((-0.75, 3.4375)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje Y</strong>: Se calcula evaluando la función en \\(x = 0\\).
                    <span class="highlight-proceso">$$f(0) = (0)^2 + \\frac{3}{2}(0) + 4 = 4$$</span>.
                    El punto de corte con el eje Y es <strong class="highlight-resultado">\\((0, 4)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje X (Raíces)</strong>: Para encontrar las raíces, igualamos la función a cero. Sin embargo, podemos predecir su existencia observando el vértice. Como la parábola abre hacia arriba y su punto más bajo (el vértice) está en \\(y = 55/16\\) (un valor positivo), la parábola <strong class="highlight-resultado">nunca toca o cruza el eje X</strong>. Por lo tanto, esta función <strong class="highlight-resultado">no tiene raíces reales</strong>.
                </li>
            </ul>
        </p>
    `,
 
 funcionParaGraficar: (x) => Math.pow(x, 2) + (3 / 2) * x + 4,
 color: "#03DAC6" // Un color verde azulado para la gráfica
};

export default dataFuncion8;