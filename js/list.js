/**
 * Misión: Generar la lista de botones de ejercicios en la barra lateral.
 * Esta función es robusta, maneja errores y está optimizada para el rendimiento.
 */
function generarListaEjercicios() {
 // 1. Búsqueda del elemento contenedor en el DOM.
 const listaUL = document.getElementById('lista-ejercicios');
 
 // 2. Verificación de robustez: ¿Existe el contenedor?
 // Si no encontramos el elemento, detenemos la ejecución y notificamos en la consola.
 // Esto previene errores y facilita enormemente la depuración.
 if (!listaUL) {
  console.error('❌ Error Crítico: No se pudo encontrar el elemento con id="lista-ejercicios". Revisa tu archivo index.html.');
  return; // Detiene la función aquí.
 }
 
 // 3. Verificación de robustez: ¿Existe la configuración?
 // Comprobamos que el objeto CONFIG y su propiedad TOTAL_EJERCICIOS existan y sean del tipo correcto.
 if (typeof CONFIG === 'undefined' || typeof CONFIG.TOTAL_EJERCICIOS !== 'number') {
  console.error('❌ Error Crítico: El objeto CONFIG o la propiedad TOTAL_EJERCICIOS no están definidos. Asegúrate de que config.js se carga correctamente ANTES que list.js.');
  listaUL.innerHTML = '<li class="loading-placeholder">Error al cargar configuración.</li>';
  return;
 }
 
 // 4. Limpieza del contenido inicial (elimina el mensaje "Cargando lista...").
 listaUL.innerHTML = '';
 
 // 5. Optimización con DocumentFragment.
 // Creamos un fragmento de documento para añadir todos los elementos 'li' de una sola vez.
 // Esto es mucho más eficiente que modificar el DOM real en cada iteración del bucle.
 const fragment = document.createDocumentFragment();
 
 for (let i = 1; i <= CONFIG.TOTAL_EJERCICIOS; i++) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  
  button.textContent = `Ejercicio ${i}`;
  // Usamos un 'data-attribute' para guardar el ID del ejercicio.
  // Es la forma moderna y correcta de almacenar datos en elementos HTML.
  button.dataset.id = i;
  
  li.appendChild(button);
  fragment.appendChild(li); // Añadimos el 'li' al fragmento, no al DOM real.
 }
 
 // 6. Inserción en el DOM.
 // Añadimos el fragmento completo (con todos los botones) al 'ul' en una sola operación.
 listaUL.appendChild(fragment);
 
 console.log(`✅ Lista de ${CONFIG.TOTAL_EJERCICIOS} ejercicios generada exitosamente.`);
}