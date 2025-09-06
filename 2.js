// ======================================================================================
// 2.JS - Ficha de Datos para f(x) = x² - x + 4
// ======================================================================================
// Este archivo exporta el objeto de datos de la función x² - x + 4.
// Es un ejemplo de parábola con un coeficiente 'b' negativo.
// ======================================================================================

const dataFuncion2 = {
    id: 2,
    titulo: "2. Parábola: f(x) = x² - x + 4",
    
    teoriaHTML: `
        <h2>1. Identificación de la Función</h2>
        <p>
            Nuestra nueva función es <span class="highlight-proceso">$$f(x) = x^2 - x + 4$$</span>
            Al igual que la anterior, es una <strong class="highlight-termino">función cuadrática</strong>, ya que su término de mayor grado es <span class="highlight-proceso">\\(x^2\\)</span>.
        </p>
        <p>
            El coeficiente de \\(x^2\\) sigue siendo 1 (positivo), lo que significa que su gráfica será una <strong class="highlight-termino">parábola</strong> que se <strong class="highlight-resultado">abre hacia arriba</strong>. Esto nos da información crucial sobre su forma general.
        </p>

        <h2>2. Encontrando el Vértice: La Completación de Cuadrados con Signos</h2>
        <p>
            Para encontrar el <strong class="highlight-termino">vértice</strong>, volvemos a aplicar la técnica de <strong class="highlight-termino">completación de cuadrados</strong> para transformar la ecuación a su <strong class="highlight-termino">forma canónica: \\(f(x) = a(x - h)^2 + k\\)</strong>, donde <span class="highlight-resultado">\\((h, k)\\)</span> son las coordenadas del vértice. Esta vez, prestaremos especial atención a los signos.
        </p>
        <p>
            <strong>Paso A:</strong> Agrupamos los términos con 'x' y dejamos la constante fuera.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 - x) + 4$$</span>
        </p>
        <p>
            <strong>Paso B:</strong> Tomamos el coeficiente del término \\(x\\), que esta vez es <strong class="highlight-proceso">-1</strong>.
            <ul>
                <li>Lo dividimos entre 2: <span class="highlight-proceso">\\(-1/2\\)</span>.</li>
                <li>Lo elevamos al cuadrado: <span class="highlight-proceso">\\((-1/2)^2 = +1/4\\)</span>. (¡Recuerda que elevar al cuadrado siempre da un resultado positivo!)</li>
            </ul>
            Este \\(1/4\\) es el número que necesitamos para completar el cuadrado.
        </p>
        <p>
            <strong>Paso C:</strong> Sumamos Y restamos \\(1/4\\) dentro del paréntesis para no alterar la ecuación.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 - x + \\frac{1}{4} - \\frac{1}{4}) + 4$$</span>
        </p>
        <p>
            <strong>Paso D:</strong> Factorizamos el <strong class="highlight-termino">trinomio cuadrado perfecto</strong> (los tres primeros términos del paréntesis). Como el término del medio (\\(-x\\)) es negativo, el binomio factorizado también lo será. El \\(-1/4\\) lo sacamos del paréntesis.<br>
            <span class="highlight-proceso">$$f(x) = (x - \\frac{1}{2})^2 - \\frac{1}{4} + 4$$</span>
        </p>
        <p>
            <strong>Paso E:</strong> Simplificamos las constantes que quedaron fuera del binomio. Necesitamos un denominador común:<br>
            <span class="highlight-proceso">\\(-1/4 + 4 = -1/4 + 16/4 = 15/4\\)</span>.<br>
            La ecuación en su <strong class="highlight-termino">forma canónica</strong> es:<br>
            <span class="highlight-proceso">$$f(x) = (x - \\frac{1}{2})^2 + \\frac{15}{4}$$</span>
        </p>

        <h2>3. Conclusiones e Interpretación de la Gráfica</h2>
        <p>
            La forma canónica nos revela las características clave de esta parábola:
            <ul>
                <li>
                    El <strong class="highlight-termino">vértice</strong> \\((h, k)\\): Comparando \\(f(x) = (x - 1/2)^2 + 15/4\\) con \\(a(x-h)^2 + k\\):
                    <ul>
                        <li><span class="highlight-proceso">\\(h\\)</span> es el número dentro del paréntesis con el signo opuesto, así que \\(h = +1/2\\).</li>
                        <li><span class="highlight-proceso">\\(k\\)</span> es la constante fuera del paréntesis, así que \\(k = 15/4\\).</li>
                    </ul>
                    Por lo tanto, el vértice de la parábola es el punto <strong class="highlight-resultado">\\((0.5, 3.75)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje Y</strong>: Ocurre cuando \\(x = 0\\).
                    <span class="highlight-proceso">\\(f(0) = (0)^2 - (0) + 4 = 4\\)</span>.
                    El punto de corte es <strong class="highlight-resultado">\\((0, 4)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje X (Raíces)</strong>: Ocurre cuando \\(f(x) = 0\\).
                    El vértice (el punto más bajo) está en \\(y = 3.75\\) y la parábola abre hacia arriba. Esto significa que está completamente por encima del eje X. Por lo tanto, esta función <strong class="highlight-resultado">no tiene raíces reales</strong>.
                </li>
            </ul>
        </p>
    `,
    
    funcionParaGraficar: (x) => Math.pow(x, 2) - x + 4,
    color: "#03DAC6"
};

export default dataFuncion2;