// Misión: Punto de entrada de la aplicación. Inicia todos los módulos.
document.addEventListener('DOMContentLoaded', () => {
 console.log('DOM completamente cargado y analizado. Iniciando aplicación.');
 
 generarListaEjercicios();
 AppControl.init();
 PlanoCartesiano.init();
 PlanoCartesiano.dibujarEjes(); // Dibuja los ejes al inicio
});