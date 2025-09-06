/**
 * @file main.js
 * @description Punto de entrada de la aplicación. Utiliza el método oficial de MathJax
 * para garantizar que la librería esté completamente inicializada antes de ejecutar el código de la aplicación.
 */

document.addEventListener('DOMContentLoaded', () => {
 console.log('🚀 DOM listo. Esperando la promesa de arranque oficial de MathJax...');
 
 // MathJax.startup.promise es la forma oficial y segura de esperar a que todo esté listo.
 MathJax.startup.promise.then(() => {
  console.log('✅ MathJax está completamente listo y configurado. Iniciando la aplicación.');
  
  // Una vez que la promesa se resuelve, podemos ejecutar de forma segura toda la lógica de nuestra aplicación.
  try {
   // --- 1. Inicializar componentes de la UI global ---
   const menuToggle = document.getElementById('menu-toggle');
   const sidebar = document.getElementById('sidebar-nav');
   
   if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
     const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
     sidebar.classList.toggle('sidebar-closed');
     menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
   } else {
    console.warn("Advertencia: No se encontraron los elementos para el menú desplegable.");
   }
   
   // --- 2. Inicializar los módulos principales en orden ---
   generarListaEjercicios();
   AppControl.init();
   PlanoCartesiano.init();
   PlanoCartesiano.dibujarEjes();
   
   console.log('✅ Aplicación inicializada correctamente. Esperando interacción del usuario.');
   
  } catch (error) {
   console.error('❌ ERROR CRÍTICO DURANTE LA INICIALIZACIÓN DE LA APLICACIÓN:', error);
   document.body.innerHTML = '<div class="no-script-warning"><h1>Error Crítico</h1><p>La aplicación no pudo iniciarse. Por favor, revisa la consola para más detalles técnicos.</p></div>';
  }
 }).catch((err) => {
  // Este .catch se activará si MathJax mismo falla al inicializarse.
  console.error("❌ Error fatal durante el arranque de MathJax:", err);
  document.body.innerHTML = '<div class="no-script-warning"><h1>Error Crítico</h1><p>La librería de matemáticas (MathJax) no pudo cargarse. La aplicación no puede continuar.</p></div>';
 });
});