// ======================================================================================
// LISTA.JS - Lógica para la lista desplegable interactiva (CORREGIDO para MÓDULOS ES6 y robustez)
// ======================================================================================
// Importa `mostrarFuncion` y `mostrarErrorFuncion` del orquestador.
// Contiene la lógica para generar las opciones, manejar la selección del usuario y el caché.
// = Exporta todas sus funciones para que otros módulos puedan utilizarlas.
// ======================================================================================

import { mostrarFuncion, mostrarErrorFuncion } from './orquestador.js'; // <<< ¡CLAVE! Importamos

export const TOTAL_FUNCIONES_DISPONIBLES = 30; // <<< Exportamos esta constante
const cacheFunciones = new Map(); // Caché para almacenar los datos de las funciones ya cargadas

/**
 * Función auxiliar para actualizar el nombre de una opción en la lista desplegable.
 * @param {number} id - El ID de la función cuya opción se debe actualizar.
 * @param {string} nuevoNombre - El nuevo texto para mostrar en la opción.
 */
export function actualizarNombreOpcion(id, nuevoNombre) { // <<< ¡CLAVE! Se exporta
 const selectElement = document.getElementById('funcion-select');
 // Validar que el elemento select exista
 if (!selectElement) {
  console.error("actualizarNombreOpcion: Elemento 'funcion-select' no encontrado en el DOM.");
  return;
 }
 const option = selectElement.querySelector(`option[value="${id}"]`);
 if (option) {
  option.textContent = nuevoNombre;
 }
}

/**
 * Carga dinámicamente un archivo de función y actualiza la interfaz.
 * Esta es la función principal que se activa al seleccionar una opción del desplegable
 * o al cargar una función inicialmente.
 * @param {number} funcionId - El ID de la función a cargar (ej: 1 para "1.js").
 */
export async function cargarFuncion(funcionId) { // <<< ¡CLAVE! Se exporta y es asíncrona
 // Si la función ya está en caché, la mostramos directamente para mayor eficiencia.
 if (cacheFunciones.has(funcionId)) {
  mostrarFuncion(cacheFunciones.get(funcionId), funcionId);
  return;
 }
 
 // Actualizar el nombre de la opción a "Cargando..." para feedback al usuario
 actualizarNombreOpcion(funcionId, `Función ${funcionId}.js (Cargando...)`);
 
 try {
  // Importación dinámica: Intentamos cargar el módulo N.js
  // import() devuelve una Promesa. `await` espera a que se resuelva.
  const module = await import(`./${funcionId}.js`);
  
  // Asumimos que cada N.js exporta un objeto 'default'.
  const data = module.default;
  
  // Verificaciones básicas del objeto de datos para asegurar que es válido
  if (data && data.id === funcionId && data.titulo && typeof data.teoriaHTML === 'string' && typeof data.funcionParaGraficar === 'function') {
   cacheFunciones.set(funcionId, data); // Guardar en caché
   mostrarFuncion(data, funcionId); // Mostrar la función usando el orquestador
  } else {
   // Si el módulo se cargó pero los datos no son válidos o están incompletos
   console.error(`El archivo ${funcionId}.js se cargó, pero sus datos no son válidos o no tienen el formato esperado.`);
   mostrarErrorFuncion(funcionId);
  }
  
 } catch (error) {
  // Si el archivo no existe o hay un error de importación/sintaxis en el módulo
  console.error(`Error al importar el módulo ${funcionId}.js:`, error);
  mostrarErrorFuncion(funcionId);
 }
}

/**
 * Inicializa la lista desplegable al cargar la página.
 * Asume que se le llama cuando el DOM ya está listo.
 */
export function inicializarListaDesplegable() { // <<< ¡CLAVE! Se exporta
 const selectElement = document.getElementById('funcion-select');
 // Validar que el elemento select exista
 if (!selectElement) {
  console.error("inicializarListaDesplegable: Elemento 'funcion-select' no encontrado. No se puede inicializar la lista.");
  return;
 }
 selectElement.innerHTML = ''; // Limpiar opciones anteriores para evitar duplicados
 
 // Generar las 30 opciones con nombres por defecto
 for (let i = 1; i <= TOTAL_FUNCIONES_DISPONIBLES; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = `Función ${i}.js (Desconocida)`; // Nombre por defecto inicial
  selectElement.appendChild(option);
 }
 
 // Añadir el escuchador de eventos para cuando el usuario cambia la selección
 selectElement.addEventListener('change', (event) => {
  const funcionSeleccionadaId = parseInt(event.target.value, 10);
  cargarFuncion(funcionSeleccionadaId);
 });
 
 // La carga inicial de la primera función real se manejará en `index_functions.js`.
}