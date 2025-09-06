// ======================================================================================
// 7.JS - Ficha de Datos para Hipérbola: (y - 3)² / 16 - (x + 1)² / 9 = 1
// ======================================================================================
// Este archivo exporta el objeto de datos para una hipérbola vertical con centro desplazado.
// Analizaremos sus elementos geométricos clave: centro, vértices, focos y asíntotas.
// ======================================================================================

const dataFuncion7 = {
 id: 7,
 titulo: "7. Hipérbola Vertical: (y-3)²/16 - (x+1)²/9 = 1",
 
 teoriaHTML: `
        <h2>1. Identificación de la Cónica: Una Hipérbola</h2>
        <p>
            Nuestra función es <span class="highlight-proceso">$$ \\frac{(y - 3)^2}{16} - \\frac{(x + 1)^2}{9} = 1 $$</span>
            Observamos que es una ecuación que involucra términos cuadráticos de \\(x\\) y \\(y\\). La presencia de ambos términos al cuadrado, y el hecho de que están <strong class="highlight-termino">restados</strong>, nos indica que estamos ante una <strong class="highlight-termino">hipérbola</strong>.
        </p>
        <p>
            Además, notamos que el término con \\(y^2\\) es positivo y el término con \\(x^2\\) es negativo. Esto nos dice que la hipérbola se <strong class="highlight-resultado">abrirá verticalmente</strong> (a lo largo del eje Y).
        </p>

        <h2>2. Elementos Clave de la Hipérbola</h2>
        <p>
            Esta ecuación ya está en la <strong class="highlight-termino">forma estándar de una hipérbola vertical</strong>: <span class="highlight-proceso">$$ \\frac{(y - k)^2}{a^2} - \\frac{(x - h)^2}{b^2} = 1 $$</span>
            Donde:
            <ul>
                <li><span class="highlight-resultado">\\((h, k)\\)</span> es el <strong class="highlight-termino">centro</strong> de la hipérbola.</li>
                <li><span class="highlight-proceso">\(a^2\)</span> es el denominador del término positivo (el que está bajo el \\(y^2\\)).</li>
                <li><span class="highlight-proceso">\(b^2\)</span> es el denominador del término negativo (el que está bajo el \\(x^2\\)).</li>
            </ul>
        </p>
        
        <h3>A. Centro de la Hipérbola</h3>
        <p>
            Comparando nuestra ecuación <span class="highlight-proceso">$$ \\frac{(y - 3)^2}{16} - \\frac{(x + 1)^2}{9} = 1 $$</span> con la forma estándar <span class="highlight-proceso">$$ \\frac{(y - k)^2}{a^2} - \\frac{(x - h)^2}{b^2} = 1 $$</span>, podemos identificar:
            <ul>
                <li><span class="highlight-proceso">\\(h\\)</span>: El término es \\((x + 1)^2\\), que es \\((x - (-1))^2\\). Por lo tanto, \\(h = -1\\).</li>
                <li><span class="highlight-proceso">\\(k\\)</span>: El término es \\((y - 3)^2\\). Por lo tanto, \\(k = 3\\).</li>
            </ul>
            El <strong class="highlight-termino">centro</strong> de la hipérbola está en el punto <strong class="highlight-resultado">\\(C = (-1, 3)\\)</strong>.
        </p>

        <h3>B. Vértices</h3>
        <p>
            Como la hipérbola abre verticalmente, los vértices se encuentran 'a' unidades por encima y por debajo del centro.
            <ul>
                <li>De la ecuación, \\(a^2 = 16\\), por lo que \\(a = \\sqrt{16} = 4\\).</li>
            </ul>
            Los vértices se calculan como \\((h, k \pm a)\\):
            <ul>
                <li>Vértice 1: \\((-1, 3 + 4) = (-1, 7)\\)</li>
                <li>Vértice 2: \\((-1, 3 - 4) = (-1, -1)\\)</li>
            </ul>
            Los <strong class="highlight-termino">vértices</strong> son <strong class="highlight-resultado">\\(V_1 = (-1, 7)\\)</strong> y <strong class="highlight-resultado">\\(V_2 = (-1, -1)\\)</strong>.
        </p>

        <h3>C. Focos</h3>
        <p>
            Los focos se encuentran en el eje principal (el eje vertical en este caso), a una distancia 'c' del centro, donde \\(c^2 = a^2 + b^2\\).
            <ul>
                <li>Ya sabemos \\(a^2 = 16\\) y \\(b^2 = 9\\).</li>
                <li>\\(c^2 = 16 + 9 = 25\\).</li>
                <li>Por lo tanto, \\(c = \\sqrt{25} = 5\\).</li>
            </ul>
            Los focos se calculan como \\((h, k \pm c)\\):
            <ul>
                <li>Foco 1: \\((-1, 3 + 5) = (-1, 8)\\)</li>
                <li>Foco 2: \\((-1, 3 - 5) = (-1, -2)\\)</li>
            </ul>
            Los <strong class="highlight-termino">focos</strong> son <strong class="highlight-resultado">\\(F_1 = (-1, 8)\\)</strong> y <strong class="highlight-resultado">\\(F_2 = (-1, -2)\\)</strong>.
        </p>

        <h3>D. Asíntotas</h3>
        <p>
            Las asíntotas son líneas rectas que la hipérbola se aproxima infinitamente. Para una hipérbola vertical, sus ecuaciones son:
            <span class="highlight-proceso">$$y - k = \pm \\frac{a}{b}(x - h)$$</span>
            Sustituimos nuestros valores: \\(h = -1\\), \\(k = 3\\), \\(a = 4\\), \\(b = 3\\).
            <ul>
                <li><span class="highlight-proceso">\\(y - 3 = +\\frac{4}{3}(x - (-1))\\)</span> => <span class="highlight-proceso">\\(y - 3 = \\frac{4}{3}(x + 1)\\)</span></li>
                <li><span class="highlight-proceso">\\(y - 3 = -\\frac{4}{3}(x - (-1))\\)</span> => <span class="highlight-proceso">\\(y - 3 = -\\frac{4}{3}(x + 1)\\)</span></li>
            </ul>
            Las <strong class="highlight-termino">ecuaciones de las asíntotas</strong> son <strong class="highlight-resultado">\\(y = \\frac{4}{3}x + \\frac{13}{3}\\)</strong> y <strong class="highlight-resultado">\\(y = -\\frac{4}{3}x + \\frac{5}{3}\\)</strong>.
        </p>

        <h2>4. Conclusiones para el Dibujo</h2>
        <p>
            Con todos estos elementos, podemos dibujar la hipérbola:
            <ul>
                <li>Marcamos el <strong class="highlight-resultado">centro (-1, 3)</strong>.</li>
                <li>Marcamos los <strong class="highlight-resultado">vértices (-1, 7) y (-1, -1)</strong>.</li>
                <li>Trazamos las <strong class="highlight-resultado">asíntotas</strong> que pasan por el centro.</li>
                <li>Dibujamos las dos ramas de la hipérbola, comenzando desde los vértices y acercándose a las asíntotas sin tocarlas.</li>
            </ul>
        </p>
    `,
 
 // Para graficar una hipérbola, necesitamos una forma de calcular los puntos Y
 // para un rango de X, teniendo en cuenta las asíntotas.
 // Esto es más complejo que una función simple. Para simplificar el dibujo en el canvas,
 // podemos graficar la "mitad superior" y la "mitad inferior" de cada rama.
 // Aquí, para la hipérbola vertical, calcularemos Y para cada X.
 // Si el término bajo la raíz cuadrada es negativo, esa parte de la curva no existe.
 funcionParaGraficar: (x) => {
  // Ecuación de la hipérbola vertical: (y - k)²/a² - (x - h)²/b² = 1
  // Despejando y: (y - k)² = a² * (1 + (x - h)²/b²)
  // y - k = ± sqrt(a² * (1 + (x - h)²/b²))
  // y = k ± a * sqrt(1 + (x - h)²/b²)
  
  const h = -1;
  const k = 3;
  const a = 4;
  const b = 3;
  
  const termX = Math.pow(x - h, 2) / Math.pow(b, 2);
  const radicando = 1 + termX;
  
  // Si el radicando es negativo (no debería pasar aquí, pero es buena práctica),
  // o si el valor de x está muy cerca de la asíntota vertical (x=-1),
  // podemos devolver NaN para que el dibujo se rompa y no dibuje líneas extrañas.
  if (radicando < 0) return NaN;
  
  // Devolvemos los dos posibles valores de Y (rama superior e inferior)
  // Para simplificar el dibujo, podríamos devolver solo uno o manejar los saltos.
  // Aquí, para el propósito de tener una función, devolvemos el valor positivo.
  // El dibujo en el canvas deberá manejar los saltos.
  const yPositivo = k + a * Math.sqrt(radicando);
  // const yNegativo = k - a * Math.sqrt(radicando); // Podríamos devolver ambos si el dibujador lo soporta
  
  return yPositivo; // Devolvemos solo uno para la demostración, pero el dibujador debe ser inteligente.
  // En la práctica, el dibujador de hipérbolas es más complejo.
  // Para este ejemplo, asumimos que el dibujador manejará los saltos.
 },
 
 // Un color distintivo para esta hipérbola.
 color: "#CF6679" // Un tono rojizo
};

export default dataFuncion7;