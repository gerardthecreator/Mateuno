// ======================================================================================
// INDEX_FUNCTIONS.JS - El Arrancador Principal de la Aplicación (CORREGIDO y CENTRALIZADO)
// ======================================================================================
// Este script es el ÚNICO punto de entrada para toda la lógica de la aplicación que
// interactúa con el DOM. Todo el código se ejecuta DENTRO del manejador
// 'DOMContentLoaded' para asegurar que todos los elementos HTML estén disponibles.
// ======================================================================================

// <<< ¡CLAVE! Importamos todas las funciones y constantes necesarias de otros módulos
import { initPlanoApp } from './main.js'; // Función para inicializar el plano
import { inicializarListaDesplegable, actualizarNombreOpcion, cargarFuncion, TOTAL_FUNCIONES_DISPONIBLES } from './lista.js';
import { mostrarErrorFuncion } from './orquestador.js'; // También para mostrar errores si el arranque falla

/**
 * Función asíncrona para intentar importar un módulo de función.
 * Se usa para "descubrir" los títulos de las funciones al inicio.
 * @param {number} id - El ID de la función a importar.
 * @returns {Promise<object|null>} Los datos de la función si se importa correctamente, de lo contrario null.
 */
async function intentarImportarFuncion(id) {
 try {
  const module = await import(`./${id}.js`); // Intenta cargar el módulo dinámicamente
  const data = module.default; // Accede al objeto exportado por defecto
  
  // Validar que el objeto exportado tiene el formato esperado
  if (data && data.id === id && data.titulo && typeof data.teoriaHTML === 'string' && typeof data.funcionParaGraficar === 'function') {
   return data; // Si todo es correcto, devuelve los datos de la función
  } else {
   console.warn(`Módulo ${id}.js cargado pero su formato es inválido o incompleto.`, data);
   return null; // Si no es válido, devuelve null
  }
 } catch (error) {
  // Este error ocurre si el archivo .js no existe o hay un problema de sintaxis en el módulo.
  // console.warn(`No se pudo importar el módulo ${id}.js (puede que no exista):`, error.message);
  return null; // En caso de error, devuelve null
 }
}

/**
 * FUNCIÓN PRINCIPAL DE ARRANQUE DE LA APLICACIÓN.
 * Todo el código que interactúa con el DOM se ejecuta aquí,
 * garantizando que el DOM esté completamente cargado.
 */
document.addEventListener('DOMContentLoaded', async () => { // <<< ¡CLAVE! EL ÚNICO DOMContentLoaded
 // 1. Inicializar el Plano Cartesiano
 // Llamamos a la función de main.js para crear y configurar el objeto del plano.
 const plano = initPlanoApp();
 if (!plano) {
  // Si el plano no se pudo inicializar, la aplicación no puede continuar.
  console.error("La aplicación no puede continuar sin un plano cartesiano inicializado correctamente.");
  // Podríamos mostrar un mensaje más amigable al usuario aquí si es necesario.
  return;
 }
 
 // 2. Inicializar la lista desplegable con las 30 opciones genéricas.
 // Esto crea todos los elementos <option> en el <select> con nombres como "Función 1.js (Desconocida)".
 inicializarListaDesplegable();
 
 // 3. Intentar cargar y extraer el título de cada una de las 30 funciones.
 // Creamos un array de promesas, cada una intentará importar un archivo N.js.
 const importPromises = [];
 for (let i = 1; i <= TOTAL_FUNCIONES_DISPONIBLES; i++) {
  importPromises.push(intentarImportarFuncion(i));
 }
 
 // Esperamos a que TODAS las promesas de importación se resuelvan (éxito o fallo).
 const allFunctionData = await Promise.all(importPromises);
 
 let primeraFuncionRealId = null; // Para saber cuál fue la primera función que se cargó con éxito
 
 // 4. Procesar los resultados y actualizar los nombres en la lista desplegable.
 allFunctionData.forEach((data, index) => {
  const id = index + 1; // El ID de la función corresponde al índice + 1
  if (data) {
   // Si la función se cargó correctamente, actualizamos su nombre real en el desplegable.
   actualizarNombreOpcion(id, data.titulo);
   // Si aún no hemos encontrado una primera función real, guardamos su ID.
   if (primeraFuncionRealId === null) {
    primeraFuncionRealId = id;
   }
  } else {
   // Si no se pudo cargar o el formato era incorrecto, la opción permanece como "No disponible".
   actualizarNombreOpcion(id, `Función ${id}.js (No disponible)`);
  }
 });
 
 // 5. Cargar la primera función real encontrada (o mostrar un mensaje si no hay ninguna).
 if (primeraFuncionRealId !== null) {
  // Asegurarse de que la lista desplegable muestre la primera función real como seleccionada.
  const selectElement = document.getElementById('funcion-select');
  if (selectElement) {
   selectElement.value = primeraFuncionRealId;
  }
  // Finalmente, cargamos y mostramos la primera función encontrada en la interfaz.
  cargarFuncion(primeraFuncionRealId);
 } else {
  // Si no se encontró ninguna función válida después de intentar cargar las 30
  const explicacionContainer = document.getElementById('explicacion-container');
  if (explicacionContainer) {
   explicacionContainer.innerHTML = `
                <h2 class="highlight-proceso">¡Bienvenido!</h2>
                <p>No se encontró ninguna función válida. Por favor, crea archivos como <code>1.js</code>, <code>2.js</code>, etc., en la misma carpeta.</p>
                <p>Asegúrate de que cada archivo <strong class="highlight-termino">exporte un objeto por defecto</strong> con las propiedades <code>id</code>, <code>titulo</code>, <code>teoriaHTML</code>, <code>funcionParaGraficar</code> y <code>color</code>.</p>
                <p>El plano cartesiano está listo para cuando añadas tu primera función.</p>
            `;
  }
  // Limpiar y dibujar ejes del plano si no hay funciones.
  if (window.plano && window.plano.ctx) {
   window.plano.limpiar();
   window.plano.dibujarEjesYTicks();
  }
 }
});