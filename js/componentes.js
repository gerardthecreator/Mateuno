/**
 * @file componentes.js
 * @description Fábrica de componentes HTML. Usa el método de conversión directa de MathJax.
 */
async function crearPasoHTML(paso, numeroPaso) {
 
 if (paso.tipo === 'solucionFinal') {
  const div = document.createElement('div');
  div.className = 'solucion-final';
  div.innerHTML = `
            <p class="solucion-final-titulo">Solución en Notación de Intervalo</p>
            <div class="solucion-final-formula"></div>
        `;
  try {
   const mathNode = await MathJax.tex2chtmlPromise(paso.formula, { display: true });
   div.querySelector('.solucion-final-formula').appendChild(mathNode);
  } catch (err) {
   console.error(`❌ Error al convertir la fórmula final: "${paso.formula}"`, err);
   div.querySelector('.solucion-final-formula').textContent = `Error: ${paso.formula}`;
  }
  return div;
 }
 
 const div = document.createElement('div');
 div.className = 'paso';
 
 div.innerHTML = `
        <p class="paso-numero">Paso ${numeroPaso}</p>
        <p class="paso-explicacion">${paso.explicacion}</p>
        <div class="paso-formula-container"></div>
    `;
 
 try {
  const mathNode = await MathJax.tex2chtmlPromise(paso.formula, { display: true });
  div.querySelector('.paso-formula-container').appendChild(mathNode);
 } catch (err) {
  console.error(`❌ Error al convertir la fórmula del paso ${numeroPaso}: "${paso.formula}"`, err);
  div.querySelector('.paso-formula-container').textContent = `Error: ${paso.formula}`;
 }
 
 return div;
}