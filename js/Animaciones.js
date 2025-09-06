// js/Animaciones.js

/**
 * Anima el dibujo de una línea o una serie de puntos en el canvas.
 * @param {CanvasRenderingContext2D} ctx - Contexto 2D del canvas.
 * @param {object | Array<object>} startOrPoints - Si es un objeto, es el punto inicial {x,y}. Si es un array, son todos los puntos a dibujar.
 * @param {object} [end] - Punto final {x,y} si startOrPoints es un único punto inicial.
 * @param {string} color - Color de la línea.
 * @param {number} width - Ancho de la línea.
 * @param {function} [onComplete] - Función a ejecutar cuando la animación termine.
 * @param {Array<object>} [allPoints] - Todos los puntos de la curva si se anima una curva compleja.
 */
export function animateLine(ctx, startOrPoints, end, color, width, onComplete, allPoints = []) {
 const duration = 700; // milisegundos
 const startTime = performance.now();
 
 ctx.strokeStyle = color;
 ctx.lineWidth = width;
 ctx.lineCap = 'round'; // Borde de la línea redondo
 
 let points = [];
 let isSingleLine = false;
 
 if (Array.isArray(startOrPoints)) {
  points = startOrPoints;
 } else {
  points.push(startOrPoints);
  points.push(end);
  isSingleLine = true;
 }
 
 const draw = (currentTime) => {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1); // Clamp entre 0 y 1
  
  ctx.save(); // Guarda el estado actual del canvas
  // No limpiar todo el canvas para no borrar los ejes ya dibujados
  // Esto asume que el plano cartesiano ya está dibujado
  ctx.beginPath();
  
  if (isSingleLine) {
   // Animación para una línea simple (ejes)
   ctx.moveTo(points[0].x, points[0].y);
   ctx.lineTo(points[0].x + (points[1].x - points[0].x) * progress,
    points[0].y + (points[1].y - points[0].y) * progress);
  } else {
   // Animación para una curva compleja (parábola)
   // Dibuja la curva hasta el punto actual según el progreso
   if (points.length > 0) {
    const numPointsToDraw = Math.floor(points.length * progress);
    if (numPointsToDraw > 0) {
     ctx.moveTo(points[0].x, points[0].y);
     for (let i = 1; i < numPointsToDraw; i++) {
      ctx.lineTo(points[i].x, points[i].y);
     }
     // Si no estamos en el último punto, interpolar hacia el siguiente para suavizar la punta
     if (numPointsToDraw < points.length) {
      const remainingProgress = (points.length * progress) - numPointsToDraw;
      const p1 = points[numPointsToDraw - 1] || points[0];
      const p2 = points[numPointsToDraw];
      ctx.lineTo(p1.x + (p2.x - p1.x) * remainingProgress,
       p1.y + (p2.y - p1.y) * remainingProgress);
     }
    }
   }
  }
  ctx.stroke();
  ctx.restore(); // Restaura el estado del canvas
  
  if (progress < 1) {
   requestAnimationFrame(draw);
  } else {
   if (onComplete) {
    onComplete(); // Llama a la función de callback cuando la animación termina
   }
  }
 };
 
 requestAnimationFrame(draw);
}


/**
 * Anima el dibujo de un punto en el canvas.
 * @param {CanvasRenderingContext2D} ctx - Contexto 2D del canvas.
 * @param {number} x - Coordenada X del punto.
 * @param {number} y - Coordenada Y del punto.
 * @param {string} color - Color del punto.
 * @param {number} radius - Radio máximo del punto.
 * @param {string} [label] - Etiqueta opcional para el punto.
 * @param {function} [onComplete] - Función a ejecutar cuando la animación termine.
 */
export function animatePoint(ctx, x, y, color, radius, label = '', onComplete) {
 const duration = 500; // milisegundos
 const startTime = performance.now();
 
 const draw = (currentTime) => {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);
  
  const currentRadius = radius * progress;
  
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, currentRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke(); // Opcional: un pequeño borde
  
  if (label) {
   ctx.font = 'bold 14px Oswald';
   ctx.fillStyle = color;
   ctx.textAlign = 'left';
   ctx.textBaseline = 'bottom';
   // ctx.fillText(label, x + radius + 5, y + radius + 5); // Posiciona la etiqueta
  }
  ctx.restore();
  
  if (progress < 1) {
   requestAnimationFrame(draw);
  } else {
   if (onComplete) {
    onComplete();
   }
  }
 };
 
 requestAnimationFrame(draw);
}