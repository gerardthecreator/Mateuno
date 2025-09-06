// ======================================================================================
// 3.JS - Ficha de Datos para f(x) = x² + 5x + 1/2
// ======================================================================================
// Este archivo exporta el objeto de datos de la función cuadrática f(x) = x² + 5x + 1/2.
// Analizaremos su vértice y otras características usando completación de cuadrados.
// ======================================================================================

const dataFuncion3 = {
    id: 3,
    titulo: "3. Parábola: f(x) = x² + 5x + 1/2",
    
    teoriaHTML: `
        <h2>1. Identificación de la Función</h2>
        <p>
            Nuestra tercera función es <span class="highlight-proceso">$$f(x) = x^2 + 5x + \\frac{1}{2}$$</span>
            Nuevamente, nos encontramos ante una <strong class="highlight-termino">función cuadrática</strong>, ya que el término de mayor grado es \\(x^2\\).
        </p>
        <p>
            El coeficiente de \\(x^2\\) es 1 (positivo), lo que nos asegura que la gráfica será una <strong class="highlight-termino">parábola</strong> que se <strong class="highlight-resultado">abre hacia arriba</strong>.
        </p>

        <h2>2. Encontrando el Vértice: Completación de Cuadrados con Fracciones</h2>
        <p>
            Para encontrar el <strong class="highlight-termino">vértice</strong>, utilizaremos la <strong class="highlight-termino">completación de cuadrados</strong> para llevar la ecuación a su <strong class="highlight-termino">forma canónica: \\(f(x) = a(x-h)^2 + k\\)</strong>.
        </p>
        <p>
            <strong>Paso A:</strong> Agrupamos los términos con 'x'.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 + 5x) + \\frac{1}{2}$$</span>
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
            <strong>Paso C:</strong> Sumamos y restamos \\(25/4\\) dentro del paréntesis.<br>
            <span class="highlight-proceso">$$f(x) = (x^2 + 5x + \\frac{25}{4} - \\frac{25}{4}) + \\frac{1}{2}$$</span>
        </p>
        <p>
            <strong>Paso D:</strong> Factorizamos el <strong class="highlight-termino">trinomio cuadrado perfecto</strong>. El \\(-25/4\\) lo sacamos del paréntesis.<br>
            <span class="highlight-proceso">$$f(x) = (x + \\frac{5}{2})^2 - \\frac{25}{4} + \\frac{1}{2}$$</span>
        </p>
        <p>
            <strong>Paso E:</strong> Simplificamos las constantes. Necesitamos un denominador común para sumar \\(-25/4 + 1/2\\). Convertimos \\(1/2\\) a cuartos: \\(1/2 = 2/4\\).<br>
            <span class="highlight-proceso">\\(-25/4 + 2/4 = -23/4\\)</span>.<br>
            La ecuación en su <strong class="highlight-termino">forma canónica</strong> es:<br>
            <span class="highlight-proceso">$$f(x) = (x + \\frac{5}{2})^2 - \\frac{23}{4}$$</span>
        </p>

        <h2>3. Conclusiones e Interpretación de la Gráfica</h2>
        <p>
            Con la forma canónica, podemos extraer la información clave de esta parábola:
            <ul>
                <li>
                    El <strong class="highlight-termino">vértice</strong> \\((h, k)\\): Comparando \\(f(x) = (x + 5/2)^2 - 23/4\\) con \\(a(x-h)^2 + k\\):
                    <ul>
                        <li><span class="highlight-proceso">\\(h\\)</span> es el opuesto del número dentro del paréntesis, así que \\(h = -5/2\\).</li>
                        <li><span class="highlight-proceso">\\(k\\)</span> es la constante fuera del paréntesis, así que \\(k = -23/4\\).</li>
                    </ul>
                    Por lo tanto, el vértice de la parábola es el punto <strong class="highlight-resultado">\\((-2.5, -5.75)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje Y</strong>: Ocurre cuando \\(x = 0\\).
                    <span class="highlight-proceso">\\(f(0) = (0)^2 + 5(0) + 1/2 = 1/2\\)</span>.
                    El punto de corte es <strong class="highlight-resultado">\\((0, 0.5)\\)</strong>.
                </li>
                <li>
                    <strong class="highlight-termino">Intersección con el Eje X (Raíces)</strong>: Ocurre cuando \\(f(x) = 0\\).
                    Como el vértice (el punto más bajo) está en \\(y = -5.75\\) (un valor negativo) y la parábola abre hacia arriba, <strong class="highlight-resultado">sí cruzará el eje X</strong>. Para encontrar las raíces, usaríamos la fórmula cuadrática o la forma canónica:
                    <span class="highlight-proceso">\\((x + 5/2)^2 = 23/4\\)</span>
                    <span class="highlight-proceso">\\(x + 5/2 = \pm \\sqrt{23/4}\\)</span>
                    <span class="highlight-proceso">\\(x = -5/2 \pm \\frac{\\sqrt{23}}{2}\\)</span>
                    Las raíces son aproximadamente <strong class="highlight-resultado">\\(x_1 \\approx -0.10\\)</strong> y <strong class="highlight-resultado">\\(x_2 \\approx -4.90\\)</strong>.
                </li>
            </ul>
        </p>
    `,
    
    funcionParaGraficar: (x) => Math.pow(x, 2) + 5 * x + 0.5,
    color: "#FF00FF" // Un color magenta vibrante
};

export default dataFuncion3;