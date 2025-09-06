/**
 * @file control.js
 * @description Orquesta la lógica de la aplicación. Adaptado para la creación asíncrona de componentes.
 */

const AppControl = {
 
 init: function() {
  const lista = document.getElementById('lista-ejercicios');
  if (!lista) {
   console.error("❌ Error fatal: No se encontró #lista-ejercicios.");
   return;
  }
  lista.addEventListener('click', this.handleEjercicioClick.bind(this));
 },
 
 handleEjercicioClick: function(event) {
  const targetButton = event.target.closest('button');
  if (targetButton) {
   const id = targetButton.dataset.id;
   this.marcarBotonActivo(targetButton);
   this.cargarEjercicio(id);
  }
 },
 
 marcarBotonActivo: function(botonActivo) {
  document.querySelectorAll('#lista-ejercicios button.active').forEach(btn => {
   btn.classList.remove('active');
  });
  botonActivo.classList.add('active');
 },
 
 cargarEjercicio: function(id) {
  this.gestionarEstadoUI('cargando');
  const scriptAnterior = document.getElementById('script-ejercicio');
  if (scriptAnterior) scriptAnterior.remove();
  
  const script = document.createElement('script');
  script.id = 'script-ejercicio';
  script.src = `${CONFIG.RUTA_EJERCICIOS}${id}.js`;
  
  script.onload = () => {
   if (typeof ejercicioData !== 'undefined') {
    this.mostrarSolucion(ejercicioData);
   } else {
    this.mostrarError(`El archivo del ejercicio ${id} se cargó, pero no tiene el formato correcto.`);
   }
   ejercicioData = undefined;
  };
  script.onerror = () => this.mostrarError(`El ejercicio ${id} aún no está disponible.`);
  
  document.body.appendChild(script);
 },
 
 async mostrarSolucion(data) {
  this.gestionarEstadoUI('solucion');
  
  const tituloEl = document.getElementById('titulo-ejercicio');
  const pasosEl = document.getElementById('pasos-solucion');
  
  tituloEl.innerHTML = data.titulo;
  pasosEl.innerHTML = '';
  
  try {
   const promesasDePasos = data.pasos.map((paso, index) =>
    crearPasoHTML(paso, index + 1)
   );
   
   const elementosDePasoRenderizados = await Promise.all(promesasDePasos);
   
   elementosDePasoRenderizados.forEach(elemento => {
    pasosEl.appendChild(elemento);
   });
   
   // --- ¡LA CORRECCIÓN ESTÁ AQUÍ! ---
   // Ahora le pedimos a MathJax que procese tanto el título como el contenedor de los pasos.
   // Esto encontrará cualquier matemática "inline" (con $...$) en las explicaciones.
   if (window.MathJax && window.MathJax.typesetPromise) {
    await window.MathJax.typesetPromise([tituloEl, pasosEl]);
   }
   
  } catch (err) {
   console.error("❌ Error al renderizar los pasos de la solución:", err);
   this.mostrarError("Ocurrió un error al procesar las fórmulas matemáticas.");
   return;
  }
  
  console.log('✅ Renderizado completo. Dibujando en el plano...');
  PlanoCartesiano.dibujarInecuacion(data.grafico);
 },
 
 mostrarError: function(mensaje) {
  this.gestionarEstadoUI('error', mensaje);
  PlanoCartesiano.limpiar();
  PlanoCartesiano.dibujarEjes();
 },
 
 gestionarEstadoUI: function(estado, mensajeError = '') {
  const bienvenida = document.getElementById('mensaje-bienvenida');
  const areaSolucion = document.getElementById('area-solucion');
  const estadoCarga = document.getElementById('estado-carga');
  const tituloEl = document.getElementById('titulo-ejercicio');
  const pasosEl = document.getElementById('pasos-solucion');
  
  bienvenida.classList.add('hidden');
  areaSolucion.classList.remove('hidden');
  
  if (estado === 'cargando') {
   estadoCarga.classList.remove('hidden');
   tituloEl.innerHTML = '';
   pasosEl.innerHTML = '';
  } else if (estado === 'solucion') {
   estadoCarga.classList.add('hidden');
  } else if (estado === 'error') {
   estadoCarga.classList.add('hidden');
   tituloEl.innerHTML = 'Ha ocurrido un error';
   pasosEl.innerHTML = `<div class="paso"><p class="paso-explicacion">${mensajeError}</p></div>`;
  }
 }
};
