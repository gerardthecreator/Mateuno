// ======================================================================================
// PLANO_CARTESIANO.JS - El Artista del Dibujo (CORREGIDO para MÓDULOS ES6 y robustez)
// ======================================================================================
// Exporta la clase `PlanoCartesiano` para que otros módulos puedan importarla.
// Se han añadido validaciones para asegurar que los elementos del DOM existan antes de usarlos.
// ======================================================================================

export class PlanoCartesiano { // <<< ¡CLAVE! Se exporta la clase
 constructor(canvasId) {
  this.canvas = document.getElementById(canvasId);
  // Validar si el canvas realmente existe en el DOM
  if (!this.canvas) {
   console.error(`Error: El elemento canvas con ID '${canvasId}' no se encontró.`);
   this.ctx = null; // Establecer ctx a null para que los métodos subsiguientes fallen con gracia
   return; // El constructor ha fallado en encontrar el elemento crítico
  }
  this.ctx = this.canvas.getContext('2d');
  this.width = this.canvas.width;
  this.height = this.canvas.height;
 }
 
 init(ticksPorEje) {
  // Si el contexto de dibujo no se pudo obtener (porque el canvas no existía), no hacemos nada
  if (!this.ctx) return;
  this.ticksPorEje = ticksPorEje;
  this.centroX = this.width / 2;
  this.centroY = this.height / 2;
  this.escalaX = this.width / (2 * this.ticksPorEje);
  this.escalaY = this.height / (2 * this.ticksPorEje);
 }
 
 limpiar() {
  if (!this.ctx) return;
  this.ctx.clearRect(0, 0, this.width, this.height);
 }
 
 dibujarEjesYTicks() {
  if (!this.ctx) return;
  this.ctx.beginPath();
  this.ctx.strokeStyle = '#B3B3B3'; // Un color gris para los ejes
  this.ctx.lineWidth = 1;
  
  // Eje X
  this.ctx.moveTo(0, this.centroY);
  this.ctx.lineTo(this.width, this.centroY);
  
  // Eje Y
  this.ctx.moveTo(this.centroX, 0);
  this.ctx.lineTo(this.centroX, this.height);
  
  this.ctx.stroke();
  
  // Dibujar Ticks y Números
  this.ctx.font = '10px Oswald'; // Asegúrate de que esta fuente esté cargada
  this.ctx.fillStyle = '#B3B3B3';
  this.ctx.textAlign = 'center';
  this.ctx.textBaseline = 'middle';
  
  for (let i = -this.ticksPorEje; i <= this.ticksPorEje; i++) {
   if (i === 0) continue; // No dibujar en el origen
   
   // Ticks en el eje X
   const posX = this.centroX + i * this.escalaX;
   this.ctx.moveTo(posX, this.centroY - 5);
   this.ctx.lineTo(posX, this.centroY + 5);
   if (i % 5 === 0) { // Poner número cada 5 ticks
    this.ctx.fillText(i, posX, this.centroY + 15);
   }
   
   // Ticks en el eje Y
   const posY = this.centroY - i * this.escalaY; // El '-' es porque el eje Y del canvas está invertido
   this.ctx.moveTo(this.centroX - 5, posY);
   this.ctx.lineTo(this.centroX + 5, posY);
   if (i % 5 === 0) {
    this.ctx.fillText(i, this.centroX - 15, posY);
   }
  }
  this.ctx.stroke();
 }
 
 dibujarFuncion(funcion, color) {
  if (!this.ctx) return;
  this.ctx.beginPath();
  this.ctx.strokeStyle = color;
  this.ctx.lineWidth = 3; // Una línea más gruesa para la función
  
  let lastPixelY = NaN; // Para manejar saltos en la función (asíntotas)
  
  for (let pixelX = 0; pixelX < this.width; pixelX++) {
   const mathX = (pixelX - this.centroX) / this.escalaX;
   const mathY = funcion(mathX);
   const pixelY = this.centroY - (mathY * this.escalaY);
   
   if (pixelX === 0) {
    this.ctx.moveTo(pixelX, pixelY);
   } else {
    // Validación para evitar dibujar líneas "infinitas" a través de asíntotas.
    // Si el valor no es finito (Infinity, -Infinity, NaN) o si hay un salto muy grande,
    // movemos el lápiz sin dibujar una línea.
    const isCurrentYFinite = Number.isFinite(pixelY);
    const isLastYFinite = Number.isFinite(lastPixelY);
    
    // Definimos un umbral de "salto" para detectar asíntotas en la pantalla.
    // Por ejemplo, si el salto es mayor que la altura del canvas, es una asíntota.
    const jumpThreshold = this.height * 2;
    
    if (isCurrentYFinite && isLastYFinite && Math.abs(pixelY - lastPixelY) < jumpThreshold) {
     this.ctx.lineTo(pixelX, pixelY);
    } else {
     this.ctx.moveTo(pixelX, pixelY); // Mover sin dibujar
    }
   }
   lastPixelY = pixelY; // Guardar para la siguiente iteración
  }
  this.ctx.stroke();
 }
}