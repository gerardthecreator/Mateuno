// js/Curvas.js
import { animateLine, animatePoint } from './Animaciones.js'; // Importa las funciones de animación

let canvas = null;
let ctx = null;
let bounds = { xMin: -10, xMax: 10, yMin: -10, yMax: 10 };
let ticksPerAxis = 15;
let scaleX, scaleY, originX, originY;

/**
 * Inicializa el plano cartesiano, dibuja los ejes y los ticks.
 * @param {HTMLCanvasElement} c - El elemento Canvas.
 * @param {CanvasRenderingContext2D} context - El contexto de renderizado 2D del Canvas.
 * @param {object} b - Objeto con los límites del plano (xMin, xMax, yMin, yMax).
 * @param {number} ticks - Número de ticks por cada mitad del eje.
 */
export function initPlanoCartesiano(c, context, b, ticks) {
    canvas = c;
    ctx = context;
    bounds = b;
    ticksPerAxis = ticks;

    // Ajustar la resolución interna del canvas para evitar pixelación
    // Esto es importante para que los dibujos se vean nítidos en pantallas de alta densidad de píxeles (Retina)
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr); // Escalar el contexto para que 1 unidad lógica sea dpr unidades físicas

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    // Calcular escalas y origen
    scaleX = canvas.offsetWidth / (bounds.xMax - bounds.xMin);
    scaleY = canvas.offsetHeight / (bounds.yMax - bounds.yMin);
    originX = -bounds.xMin * scaleX;
    originY = bounds.yMax * scaleY; // Origen Y está en la parte superior, pero en el plano cartesiano queremos que Y aumente hacia arriba

    drawGridAndAxes();
}

/**
 * Dibuja la cuadrícula y los ejes del plano cartesiano.
 */
function drawGridAndAxes() {
    if (!ctx) return;

    // --- Dibujar Cuadrícula Suave ---
    ctx.strokeStyle = '#e0e0e0'; // Color gris claro
    ctx.lineWidth = 0.5;

    // Líneas verticales
    for (let x = Math.floor(bounds.xMin); x <= bounds.xMax; x++) {
        if (x === 0) continue; // No dibujar la línea en el eje Y
        ctx.beginPath();
        ctx.moveTo(toCanvasX(x), 0);
        ctx.lineTo(toCanvasX(x), canvas.offsetHeight);
        ctx.stroke();
    }

    // Líneas horizontales
    for (let y = Math.floor(bounds.yMin); y <= bounds.yMax; y++) {
        if (y === 0) continue; // No dibujar la línea en el eje X
        ctx.beginPath();
        ctx.moveTo(0, toCanvasY(y));
        ctx.lineTo(canvas.offsetWidth, toCanvasY(y));
        ctx.stroke();
    }

    // --- Dibujar Ejes X e Y (animados) ---
    ctx.strokeStyle = '#333'; // Color más oscuro para los ejes
    ctx.lineWidth = 2;
    ctx.font = '12px Oswald';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // Animación del Eje X
    animateLine(
        ctx,
        { x: 0, y: originY },
        { x: canvas.offsetWidth, y: originY },
        '#333', 2,
        () => {
            // Dibujar ticks del Eje X
            for (let x = Math.floor(bounds.xMin); x <= bounds.xMax; x++) {
                if (x === 0) continue;
                ctx.beginPath();
                ctx.moveTo(toCanvasX(x), originY - 5);
                ctx.lineTo(toCanvasX(x), originY + 5);
                ctx.stroke();
                ctx.fillText(x.toString(), toCanvasX(x), originY + 8);
            }
            // Etiqueta del Eje X
            ctx.fillText('X', canvas.offsetWidth - 10, originY + 8);
        }
    );

    // Animación del Eje Y
    animateLine(
        ctx,
        { x: originX, y: 0 },
        { x: originX, y: canvas.offsetHeight },
        '#333', 2,
        () => {
            // Dibujar ticks del Eje Y
            for (let y = Math.floor(bounds.yMin); y <= bounds.yMax; y++) {
                if (y === 0) continue;
                ctx.beginPath();
                ctx.moveTo(originX - 5, toCanvasY(y));
                ctx.lineTo(originX + 5, toCanvasY(y));
                ctx.stroke();
                ctx.fillText(y.toString(), originX + 15, toCanvasY(y) - 5);
            }
            // Etiqueta del Eje Y
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText('Y', originX + 8, 10);
            ctx.fillText('0', originX - 15, originY + 15); // Origen
        }
    );
}

/**
 * Convierte una coordenada X del plano cartesiano a una coordenada X del canvas.
 * @param {number} xCoord - Coordenada X en el plano.
 * @returns {number} Coordenada X en píxeles del canvas.
 */
function toCanvasX(xCoord) {
    return originX + xCoord * scaleX;
}

/**
 * Convierte una coordenada Y del plano cartesiano a una coordenada Y del canvas.
 * El eje Y del canvas es invertido con respecto al plano cartesiano.
 * @param {number} yCoord - Coordenada Y en el plano.
 * @returns {number} Coordenada Y en píxeles del canvas.
 */
function toCanvasY(yCoord) {
    return originY - yCoord * scaleY;
}

/**
 * Dibuja una parábola de forma animada.
 * @param {CanvasRenderingContext2D} ctx - El contexto de renderizado 2D del Canvas.
 * @param {HTMLCanvasElement} canvas - El elemento Canvas.
 * @param {object} bounds - Límites del plano cartesiano.
 * @param {function} func - La función matemática f(x) = y.
 * @param {string} color - Color de la parábola.
 */
export function drawParabola(context, canvasElement, b, func, color) {
    ctx = context; // Asegurarse de que el contexto esté actualizado
    canvas = canvasElement;
    bounds = b;

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;

    const points = [];
    const step = (bounds.xMax - bounds.xMin) / (canvas.offsetWidth / 2); // Menos puntos para mayor velocidad, más para mayor precisión

    for (let x = bounds.xMin; x <= bounds.xMax; x += step) {
        let y = func(x);
        // Solo añadir puntos que estén dentro de los límites visibles del Y
        if (y >= bounds.yMin && y <= bounds.yMax) {
            points.push({ x: toCanvasX(x), y: toCanvasY(y) });
        }
    }

    // Animar la línea de la parábola
    animateLine(ctx, points[0], points[points.length - 1], color, 3, () => {
        ctx.beginPath();
        if (points.length > 0) {
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(points[i].x, points[i].y);
            }
        }
        ctx.stroke();
    }, points); // Pasa todos los puntos para la animación

    // Animación del vértice de la parábola
    const h = -0.5; // Vértice X para F(x) = x^2 + x + 2
    const k = 1.75; // Vértice Y para F(x) = x^2 + x + 2
    animatePoint(ctx, toCanvasX(h), toCanvasY(k), 'var(--accent-color)', 8, 'Vértice', () => {
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillStyle = 'var(--accent-color)';
        ctx.fillText(`V(${h}, ${k})`, toCanvasX(h) + 10, toCanvasY(k) - 10);
    });

}