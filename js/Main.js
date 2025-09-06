// js/Main.js

// Importamos todo lo que necesitamos al principio
import { teoriaContent } from './Interno/Teoria.js';
import { exercise1Solution, exercise1Formulas } from './Interno/Ejemplo/1.js';
import { initPlanoCartesiano, drawParabola } from './Curvas.js';
import { setupCanvasControls } from './Control.js';

/**
 * Renderizador de HTML a partir de una estructura de datos.
 * @param {Array<object>} data - El array de objetos a renderizar.
 * @returns {string} Una cadena de texto con el HTML generado.
 */
function buildHtmlString(data) {
    let html = '';
    data.forEach(item => {
        switch (item.type) {
            case 'h2':
            case 'h3':
            case 'p':
                html += `<${item.type}>${item.html}</${item.type}>`;
                break;
            case 'math':
                html += `<div class="math-equation">$$${item.latex}$$</div>`;
                break;
            case 'ul':
            case 'ol':
                html += `<${item.type}>`;
                item.items.forEach(liContent => {
                    html += `<li>${liContent}</li>`;
                });
                html += `</${item.type}>`;
                break;
        }
    });
    return html;
}

function loadTheory() {
    const container = document.getElementById('theory-content');
    container.innerHTML = buildHtmlString(teoriaContent);
}

function loadExercise1() {
    const stepsContainer = document.getElementById('exercise-steps');
    const formulasContainer = document.getElementById('exercise-formulas');
    
    let stepsHtml = '';
    exercise1Solution.forEach((stepData, index) => {
        stepsHtml += `<div class="fade-in">
                        <h4>Paso ${index + 1}: <span class="highlight">${stepData.title}</span></h4>`;
        
        // Construir el HTML para el contenido del paso
        stepData.content.forEach(item => {
            if (item.type === 'p') {
                stepsHtml += `<p>${item.html}</p>`;
            } else if (item.type === 'math') {
                stepsHtml += `<div class="math-equation">$$${item.latex}$$</div>`;
            }
        });
        
        if (stepData.why) {
            stepsHtml += `<p class="why-explanation"><span class="highlight">¿Por qué?</span> ${stepData.why}</p>`;
        }
        stepsHtml += `</div>`;
    });
    stepsContainer.innerHTML = stepsHtml;
    
    let formulasHtml = '<h4>Fórmulas Utilizadas:</h4><ul>';
    exercise1Formulas.forEach(formula => {
        formulasHtml += `<li><strong>${formula.name}:</strong> ${formula.latex}</li>`;
    });
    formulasHtml += '</ul>';
    formulasContainer.innerHTML = formulasHtml;
}

// --- PUNTO DE ENTRADA DE LA APLICACIÓN ---
// Este código se ejecuta después de que el DOM está listo y MathJax ha sido cargado.
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM listo. MathJax debería estar cargado.");
    
    // Cargar contenido inicial
    loadTheory();
    
    // Configurar el canvas
    const canvas = document.getElementById('planoCartesiano');
    const ctx = canvas.getContext('2d');
    const bounds = { xMin: -10, xMax: 10, yMin: -10, yMax: 10 };
    const ticks = 15;
    initPlanoCartesiano(canvas, ctx, bounds, ticks);
    setupCanvasControls(canvas, ctx, bounds, initPlanoCartesiano);
    
    // Configurar botones
    document.querySelectorAll('.exercise-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const exerciseNum = parseInt(event.target.dataset.exercise);
            if (exerciseNum === 1) {
                loadExercise1();
                initPlanoCartesiano(canvas, ctx, bounds, ticks);
                drawParabola(ctx, canvas, bounds, (x) => x * x + x + 2, 'red');
                // Pedir a MathJax que renderice el nuevo contenido
                MathJax.typesetPromise();
            }
        });
    });
    
    // Cargar ejercicio por defecto
    document.querySelector('.exercise-button[data-exercise="1"]').click();
    
    // Renderizado inicial de toda la página
    // MathJax.typesetPromise() buscará y renderizará todo el LaTeX en la página.
    MathJax.typesetPromise();
});