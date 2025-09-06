// ======================================================================================
// ORQUESTADOR.JS - El Cerebro de la Aplicación (CORREGIDO para MÓDULOS ES6 y robustez)
// ======================================================================================
// Este módulo exporta las funciones `mostrarFuncion` y `mostrarErrorFuncion`, que son
// las encargadas de tomar los datos de una función y actualizar la interfaz de usuario.
// ======================================================================================

import { actualizarNombreOpcion } from './lista.js'; // <<< ¡CLAVE! Importamos

/**
 * Muestra los datos de una función en la interfaz de usuario.
 * Esta función es llamada por `lista.js` o `index_functions.js` cuando se necesita
 * actualizar la vista con los datos de una función válida.
 * @param {object} data - El objeto de datos completo de la función (ej: dataFuncion1).
 * @param {number} [selectedId=null] - El ID de la función que actualmente está seleccionada en el <select>.
 *                                    Si no se proporciona, se usa `data.id`.
 */
export function mostrarFuncion(data, selectedId = null) { // <<< ¡CLAVE! Se exporta
 const explicacionContainer = document.getElementById('explicacion-container');
 const selectElement = document.getElementById('funcion-select');
 
 // Validar que los elementos DOM existan
 if (!explicacionContainer) {
  console.error("mostrarFuncion: Elemento 'explicacion-container' no encontrado.");
  return;
 }
 if (!selectElement) {
  console.error("mostrarFuncion: Elemento 'funcion-select' no encontrado.");
  return;
 }
 
 // 1. Inyectar el contenido HTML en el contenedor de la explicación.
 explicacionContainer.innerHTML = data.teoriaHTML;
 
 // 2. Pedirle a MathJax que renderice las fórmulas del nuevo contenido.
 // Es bueno comprobar si MathJax ya está disponible.
 if (window.MathJax && window.MathJax.typesetPromise) {
  MathJax.typesetPromise([explicacionContainer]).catch((err) => {
   console.error('Error al renderizar las fórmulas con MathJax: ', err);
  });
 }
 
 // 3. Dar la orden al objeto 'plano' para que dibuje todo.
 // 'window.plano' se inicializa en `main.js` y se hace global.
 if (window.plano && window.plano.ctx) { // Asegurarnos de que el plano existe y es válido
  plano.limpiar();
  plano.dibujarEjesYTicks();
  plano.dibujarFuncion(data.funcionParaGraficar, data.color);
 } else {
  console.error("El objeto 'plano' no está disponible o no se inicializó correctamente.");
 }
 
 // 4. Actualizar el nombre de la opción en la lista desplegable con el título real.
 // Y asegurar que la opción correcta esté seleccionada en el desplegable.
 if (data.id && data.titulo) {
  actualizarNombreOpcion(data.id, data.titulo);
  // Si se nos pasó un ID seleccionado, asegurar que el <select> lo muestre.
  selectElement.value = selectedId !== null ? selectedId : data.id;
 }
 
 // 5. Reiniciar la animación de entrada del contenido.
 explicacionContainer.classList.remove('fade-in-element');
 // Truco para forzar un 'reflow' del navegador y que la animación se reinicie correctamente.
 void explicacionContainer.offsetWidth;
 explicacionContainer.classList.add('fade-in-element');
}

/**
 * Muestra un mensaje de error si una función no pudo ser cargada o procesada.
 * @param {number} funcionId - El ID de la función que falló.
 */
export function mostrarErrorFuncion(funcionId) { // <<< ¡CLAVE! Se exporta
 const explicacionContainer = document.getElementById('explicacion-container');
 
 // Validar que el contenedor de la explicación exista
 if (!explicacionContainer) {
  console.error("mostrarErrorFuncion: Elemento 'explicacion-container' no encontrado.");
  return;
 }
 
 console.error(`Error: No se pudo cargar o procesar la función ${funcionId}.js.`);
 
 explicacionContainer.innerHTML = `
        <h2 class="highlight-proceso">¡Error! Función no disponible o con formato incorrecto.</h2>
        <p>El archivo de datos para la función <span class="highlight-resultado">"${funcionId}.js"</span> no se pudo cargar o no tiene el formato esperado.</p>
        <p>Por favor, asegúrate de que el archivo existe en la misma carpeta que los demás scripts y que <strong class="highlight-termino">exporta un objeto 'default'</strong> con las propiedades <code>id</code>, <code>titulo</code>, <code>teoriaHTML</code>, <code>funcionParaGraficar</code> y <code>color</code>.</p>
        <p>Mientras tanto, el plano cartesiano está limpio.</p>
    `;
 // Limpiar el canvas si no hay función para dibujar
 if (window.plano && window.plano.ctx) {
  plano.limpiar();
  plano.dibujarEjesYTicks();
 }
 actualizarNombreOpcion(funcionId, `Función ${funcionId}.js (No encontrada)`);
 
 explicacionContainer.classList.remove('fade-in-element');
 void explicacionContainer.offsetWidth;
 explicacionContainer.classList.add('fade-in-element');
}