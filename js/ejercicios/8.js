/**
 * @file 8.js
 * @description Cerebro del Ejercicio 8: Ecuación de una Recta Paralela a otra.
 */
var ejercicioData = {
    titulo: "Recta Paralela a $y = 2x + 1$ que pasa por $(0, -4)$",
    
    pasos: [
        {
            explicacion: "El problema nos pide encontrar la ecuación de una recta <span class='keyword-concept'>paralela</span> a $y = 2x + 1$. Una <span class='keyword-rule'>propiedad fundamental</span> de las rectas paralelas es que tienen la <span class='keyword-concept'>misma pendiente</span>.",
            formula: "\\text{Recta dada: } y = 2x + 1 \\implies \\text{Pendiente } m = 2"
        },
        {
            explicacion: "Dado que nuestra nueva recta debe ser paralela a la recta dada, su pendiente (m) también debe ser 2.",
            formula: "\\text{Pendiente de nuestra recta: } m = 2"
        },
        {
            explicacion: "Ahora sabemos que nuestra recta tiene la forma $y = 2x + b$. Necesitamos encontrar el valor de 'b', que es la <span class='keyword-concept'>intersección con el eje Y</span>. Para esto, usamos el punto que se nos da: $(0, -4)$.",
            formula: "\\text{Nuestra recta: } y = 2x + b"
        },
        {
            explicacion: "Sustituimos las coordenadas del punto $(0, -4)$ en la ecuación de nuestra recta ($x=0, y=-4$).",
            formula: "-4 = 2(0) + b"
        },
        {
            explicacion: "Simplificamos para encontrar el valor de 'b'.",
            formula: "-4 = 0 + b \\implies b = -4"
        },
        {
            explicacion: "Ahora que tenemos la pendiente $m=2$ y la intersección con el eje Y $b=-4$, podemos escribir la ecuación completa de la recta.",
            formula: "\\text{Ecuación de la recta: } y = 2x - 4"
        },
        {
            explicacion: "Verificamos que la nueva recta tiene la misma pendiente (2) y pasa por el punto dado $(0, -4)$.",
            formula: "\\text{Dominio: } x \\in (-\\infty, \\infty) \\quad | \\quad \\text{Rango: } y \\in (-\\infty, \\infty)"
        },
        {
            tipo: 'solucionFinal',
            formula: "\\text{La ecuación de la recta paralela es } y = 2x - 4."
        }
    ],

    grafico: {
        tipo: 'linea_recta',
        // Pasamos la función de la recta encontrada
        funcion: (x) => 2 * x - 4,
        // Pasamos las intersecciones para que plano.js las marque
        interseccion_y: -4,
        interseccion_x: 2 // Cuando y=0, 2x-4=0 => 2x=4 => x=2
    }
};