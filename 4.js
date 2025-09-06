// ======================================================================================
// 4.JS - Ficha de Datos para f(x) = x² + 5x + 8
// ======================================================================================
// Este archivo exporta el objeto de datos de la función x² + 5x + 8.
// Es un ejemplo de parábola con un coeficiente 'b' impar.
// ======================================================================================

const dataFuncion4 = {
    id: 4,
    titulo: "4. Parábola: f(x) = x² + 5x + 8",
    
    teoriaHTML: `
        <h2>1. Identificación de la Función</h2>
        <p>
            Estamos de vuelta con una <strong class="highlight-termino">función cuadrática</strong>: <span class="highlight-proceso">$$f(x) = x^2 + 5x + 8$$</span>
            El término de mayor grado es \\(x^2\\), y su coeficiente (1) es positivo. Esto nos confirma que su gráfica será una <strong class="highlight-termino">parábola</strong> que se <strong class="highlight-resultado">abre hacia arriba</strong>.
        </p>

        <h2>2. Encontrando el Vértice: Completación de Cuadrados con Fracciones</h2>
        <p>
            Aplicaremos nuevamente la técnica de <strong class="highlight-termino">completación de cuadrados</strong> para transformar la ecuación a la <strong class="highlight-termino">forma canónica: \\(f(x) = a(x-h)^2 + k\\)</strong> y así encontrar el vértice <span class="highlight-resultado">\\((h, k)\\)</span>. Este ejemplo nos ayudará a practicar con fracciones.
        </p>
        <p>
            <strong>Paso A:</strong> Agrupamos los términos con 'x' y movemos la constante.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 + 5x) + 8$$</span>
        </p>
        <p>
            <strong>Paso B:</strong> Tomamos el coeficiente de 'x', que es <strong class="highlight-proceso">5</strong>.
            <ul>
                <li>Lo dividimos entre 2: <span class="highlight-proceso">\\(5/2\\)</span>.</li>
                <li>Lo elevamos al cuadrado: <span class="highlight-proceso">\\((5/2)^2 = 25/4\\)</span>.</li>
            </ul>
            Este \\(25/4\\) es el número que necesitamos para completar el cuadrado.
        </p>
        <p>
            <strong>Paso C:</strong> Sumamos y restamos \\(25/4\\) dentro del paréntesis para no alterar la ecuación.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 + 5x + \\frac{25}{4} - \\frac{25}{4}) + 8$$</span>
        </p>
        <p>
            <strong>Paso D:</strong> Factorizamos el <strong class="highlight-termino">trinomio cuadrado perfecto</strong>. Los primeros tres términos se convierten en un binomio al cuadrado. El \\(-25/4\\) lo sacamos del paréntesis.<br>
            <span class="highlight-proceso">$$f(x) = (x + \\frac{5}{2})^2 - \\frac{25}{4} + 8$$</span>
        </p>
        <p>
            <strong>Paso E:</strong> Simplificamos las constantes que quedaron fuera del binomio. Para sumar \\(-25/4 + 8\\), convertimos 8 a cuartos (\\(8 = 32/4\\)):<br>
            <span class="highlight-proceso">\\(-25/4 + 32/4 = 7/4\\)</span>.<br>
            La ecuación en su <strong class="highlight-termino">forma canónica</strong> es:<br>
            <span class="highlight-proceso">$$f(x) = (x + \\frac{5}{2})^2 + \\frac{7}{4}$$</span>
        </p>

        <h2>3. Conclusiones e Interpretación de la Gráfica</h2>
        <p>
            Con la forma canónica, podemos extraer la información clave de la parábola:
            <ul>
                <li>
                    El <strong class="highlight-termino">vértice</strong> \\((h, k)\\): Comparando \\(f(x) = (x + 5/2)^2 + 7/4\\) con \\(a(x-h)^2 + k\\):
                    <ul>
                        <li><span class="highlight-proceso">\\(h\\)</span> es el opuesto del número dentro del paréntesis, así que \\(h = -5/2\\).</li>
                        <li><span class="highlight-proceso">\\(k\\)</span> es la constante fuera del paréntesis, así que \\(k = 7/4\\).</li>
                    </ul>
                    Por lo tanto, el vértice de la parábola es el punto <strong class="highlight-resultado">\\((-2.5, 1.75)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje Y</strong>: Ocurre cuando \\(x = 0\\).
                    <span class="highlight-proceso">\\(f(0) = (0)^2 + 5(0) + 8 = 8\\)</span>.
                    El punto de corte es <strong class="highlight-resultado">\\((0, 8)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje X (Raíces)</strong>: Ocurre cuando \\(f(x) = 0\\).
                    El vértice (el punto más bajo de nuestra parábola que abre hacia arriba) está en \\(y = 1.75\\) (un valor positivo). Esto significa que la parábola está completamente por encima del eje X. Por lo tanto, esta función <strong class="highlight-resultado">no tiene raíces reales</strong>.
                </li>
            </ul>
        </p>
    `,
    
    funcionParaGraficar: (x) => Math.pow(x, 2) + 5 * x + 8,
    color: "#DAF7A6"
};

export default dataFuncion4;