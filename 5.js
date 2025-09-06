// ======================================================================================
// 5.JS - Ficha de Datos para f(x) = (x-5)/(x+2)
// ======================================================================================
// Este archivo exporta el objeto de datos de la función racional (x-5)/(x+2).
// Es otro ejemplo de hipérbola, que nos permite practicar el análisis de asíntotas.
// ======================================================================================

const dataFuncion5 = {
 id: 5,
 titulo: "5. Hipérbola: f(x) = (x-5) / (x+2)",
 
 teoriaHTML: `
        <h2>1. Identificación de la Función</h2>
        <p>
            Nuestra quinta función es <span class="highlight-proceso">$$f(x) = \\frac{x-5}{x+2}$$</span>
            Como en el caso anterior, esta es una <strong class="highlight-termino">función racional</strong>, es decir, una división de dos polinomios. Su gráfica será otra <strong class="highlight-termino">hipérbola</strong>.
        </p>

        <h2>2. Determinando las Asíntotas</h2>
        <p>
            Las asíntotas son fundamentales para entender el comportamiento de esta hipérbola.
        </p>
        
        <h3>A. Asíntota Vertical: El Punto de Indefinición</h3>
        <p>
            Buscamos el valor de 'x' que hace que el <strong class="highlight-proceso">denominador sea cero</strong>, ya que la división por cero no está permitida.
            Nuestro denominador es \\(x+2\\). Igualamos a cero:<br>
            <span class="highlight-proceso">$$x + 2 = 0 \\implies x = -2$$</span>
            Por lo tanto, la <strong class="highlight-resultado">asíntota vertical está en x = -2</strong>. La función se comportará de forma extrema cerca de esta línea.
        </p>

        <h3>B. Asíntota Horizontal: El Límite en el Infinito</h3>
        <p>
            Para encontrar la <strong class="highlight-termino">asíntota horizontal</strong>, comparamos los grados de los polinomios del numerador y del denominador.
            Ambos son de <strong class="highlight-proceso">grado 1</strong> (el mayor exponente de 'x' es 1 en ambos casos).
            Cuando los grados son iguales, la asíntota horizontal es el cociente de los coeficientes principales de los términos de mayor grado:<br>
            <span class="highlight-proceso">$$y = \\frac{\\text{coeficiente de } x \\text{ (numerador)}}{\\text{coeficiente de } x \\text{ (denominador)}} = \\frac{1}{1} = 1$$</span>
            Así, la <strong class="highlight-resultado">asíntota horizontal está en y = 1</strong>. La función se aproximará a esta línea a medida que \\(x\\) se vaya a los extremos.
        </p>

        <h2>3. Puntos Clave: Intersecciones con los Ejes</h2>
        <p>
            Localizar los puntos donde la gráfica cruza los ejes nos ayuda a situarla correctamente.
        </p>
        <ul>
            <li>
                <strong class="highlight-termino">Intersección con el Eje Y (cuando x=0):</strong><br>
                Sustituimos \\(x=0\\) en la función:<br>
                <span class="highlight-proceso">\\(f(0) = \\frac{0-5}{0+2} = \\frac{-5}{2} = -2.5\\)</span>.<br>
                El punto de corte es <strong class="highlight-resultado">\\((0, -2.5)\\)</strong>.
            </li>
            <li>
                <strong class="highlight-termino">Intersección con el Eje X (cuando f(x)=0):</strong><br>
                Una fracción es cero solo cuando su <strong class="highlight-proceso">numerador es cero</strong>.
                Igualamos el numerador a cero:<br>
                <span class="highlight-proceso">\\(x-5 = 0 \\implies x = 5\\)</span>.<br>
                El punto de cruce es <strong class="highlight-resultado">\\((5, 0)\\)</strong>.
            </li>
        </ul>

        <h2>4. Conclusiones</h2>
        <p>
            Resumiendo la información para graficar esta hipérbola:
            <ul>
                <li>Tiene una <strong class="highlight-termino">asíntota vertical en x = -2</strong>.</li>
                <li>Tiene una <strong class="highlight-termino">asíntota horizontal en y = 1</strong>.</li>
                <li>Cruza el eje Y en <strong class="highlight-resultado">(0, -2.5)</strong>.</li>
                <li>Cruza el eje X en <strong class="highlight-resultado">(5, 0)</strong>.</li>
            </ul>
            Con estos datos, podemos dibujar las dos ramas de la hipérbola, una en el cuadrante superior derecho definido por las asíntotas y otra en el inferior izquierdo.
        </p>
    `,
 
 funcionParaGraficar: (x) => (x - 5) / (x + 2),
 color: "#FFC300" // Un color amarillo vibrante
};

export default dataFuncion5;