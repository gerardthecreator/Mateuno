// ======================================================================================
// 6.JS - Ficha de Datos para f(x) = 0.5x - 2
// ======================================================================================
// Este archivo exporta el objeto de datos para la función lineal f(x) = 0.5x - 2.
// Analizaremos sus componentes clave: pendiente, ordenada al origen y raíz.
// ======================================================================================

const dataFuncion6 = {
 id: 6,
 titulo: "6. Recta: f(x) = 0.5x - 2",
 
 teoriaHTML: `
        <h2>1. Identificación de la Función: ¡Una Recta!</h2>
        <p>
            Nuestra nueva función es <span class="highlight-proceso">$$f(x) = 0.5x - 2$$</span>
            A diferencia de las parábolas y las hipérbolas, esta es una <strong class="highlight-termino">función lineal</strong>. Su gráfica es una <strong class="highlight-termino">línea recta</strong>.
        </p>
        <p>
            Las funciones lineales se expresan comúnmente en la forma <strong class="highlight-termino">pendiente-ordenada al origen</strong>: <span class="highlight-proceso">$$y = mx + b$$</span>
            Donde:
            <ul>
                <li><strong class="highlight-termino">\(m\)</strong> es la <strong class="highlight-termino">pendiente</strong> (la inclinación de la recta).</li>
                <li><strong class="highlight-termino">\(b\)</strong> es la <strong class="highlight-termino">ordenada al origen</strong> (el punto donde la recta cruza el eje Y).</li>
            </ul>
        </p>

        <h2>2. Análisis de los Componentes</h2>
        <p>
            Identifiquemos estos componentes en nuestra función <span class="highlight-proceso">$$f(x) = 0.5x - 2$$</span>:
        </p>
        <ul>
            <li>
                <strong class="highlight-termino">Pendiente (\(m\)):</strong> El coeficiente que acompaña a la \\(x\\) es <strong class="highlight-proceso">0.5</strong>.
                Esto nos dice que la recta tiene una inclinación positiva y moderada. Por cada 1 unidad que avanzamos en el eje X, la recta sube 0.5 unidades en el eje Y. O, dicho de otra forma, por cada 2 unidades que avanzamos en X, la recta sube 1 unidad en Y.
            </li>
            <li>
                <strong class="highlight-termino">Ordenada al origen (\(b\)):</strong> La constante que se suma (o resta) al término con \\(x\\) es <strong class="highlight-proceso">-2</strong>.
                Esto significa que la recta cruza el eje Y en el punto <strong class="highlight-resultado">\\((0, -2)\\)</strong>.
            </li>
        </ul>

        <h2>3. Encontrando la Raíz (Intersección con el Eje X)</h2>
        <p>
            La <strong class="highlight-termino">raíz</strong> de una función es el valor de \\(x\\) para el cual \\(f(x) = 0\\). Gráficamente, es el punto donde la recta cruza el eje X.
            Para encontrarla, igualamos nuestra función a cero:
            <span class="highlight-proceso">$$f(x) = 0$$</span>
            <span class="highlight-proceso">$$0.5x - 2 = 0$$</span>
            Ahora, despejamos \\(x\\):
            <span class="highlight-proceso">$$0.5x = 2$$</span>
            <span class="highlight-proceso">$$x = \\frac{2}{0.5}$$</span>
            <span class="highlight-proceso">$$x = 4$$</span>
            Por lo tanto, la recta cruza el eje X en el punto <strong class="highlight-resultado">\\((4, 0)\\)</strong>.
        </p>

        <h2>4. Conclusiones para el Dibujo</h2>
        <p>
            Con esta información, podemos dibujar la recta fácilmente:
            <ul>
                <li>Sabemos que pasa por el punto <strong class="highlight-resultado">(0, -2)</strong> (la ordenada al origen).</li>
                <li>Sabemos que pasa por el punto <strong class="highlight-resultado">(4, 0)</strong> (la raíz).</li>
                <li>La pendiente de 0.5 nos confirma la inclinación correcta entre estos dos puntos.</li>
            </ul>
            Simplemente conectamos estos dos puntos con una línea recta.
        </p>
    `,
 
 // La función matemática para el dibujo en el canvas.
 funcionParaGraficar: (x) => 0.5 * x - 2,
 
 // Un color distintivo para esta recta.
 color: "#58D68D" // Un verde azulado
};

export default dataFuncion6;