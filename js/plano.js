/**
 * @file plano.js
 * @description Módulo para controlar el dibujo en el <canvas>.
 * Ahora es capaz de dibujar líneas rectas, parábolas, hipérbolas racionales y generales, y soluciones de intervalos.
 */
const PlanoCartesiano = {
    canvas: null, ctx: null, width: 0, height: 0, centroX: 0, centroY: 0,
    escala: 25, numTicks: 15, colorEjes: '#666', colorTicks: '#444',
    colorCurva: '#2ecc71', // Verde por defecto para curvas
    colorSombreado: 'rgba(46, 204, 113, 0.3)',
    colorAsintota: '#e74c3c', // Rojo para asíntotas y marcas de puntos

    init: function() { /* ... (sin cambios) ... */
        this.canvas = document.getElementById('plano-cartesiano');
        if (!this.canvas) { console.error("❌ Error: No se encontró #plano-cartesiano."); return; }
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width; this.height = this.canvas.height;
        this.centroX = this.width / 2; this.centroY = this.height / 2;
    },
    mathToCanvas: function(x, y) { /* ... (sin cambios) ... */
        const canvasX = this.centroX + x * this.escala;
        const canvasY = this.centroY - y * this.escala;
        return { x: canvasX, y: canvasY };
    },
    limpiar: function() { /* ... (sin cambios) ... */
        if (!this.ctx) return; this.ctx.clearRect(0, 0, this.width, this.height);
    },
    dibujarEjes: function() { /* ... (sin cambios) ... */
        if (!this.ctx) return; const tickSize = 5; this.ctx.beginPath(); this.ctx.strokeStyle = this.colorEjes; this.ctx.lineWidth = 2; this.ctx.moveTo(0, this.centroY); this.ctx.lineTo(this.width, this.centroY); this.ctx.moveTo(this.centroX, 0); this.ctx.lineTo(this.centroX, this.height); this.ctx.stroke(); this.ctx.beginPath(); this.ctx.strokeStyle = this.colorTicks; this.ctx.lineWidth = 1; const espacioX = this.centroX / this.numTicks; const espacioY = this.centroY / this.numTicks; for (let i = 1; i <= this.numTicks; i++) { this.ctx.moveTo(this.centroX + i * espacioX, this.centroY - tickSize); this.ctx.lineTo(this.centroX + i * espacioX, this.centroY + tickSize); this.ctx.moveTo(this.centroX - i * espacioX, this.centroY - tickSize); this.ctx.lineTo(this.centroX - i * espacioX, this.centroY + tickSize); this.ctx.moveTo(this.centroX - tickSize, this.centroY - i * espacioY); this.ctx.lineTo(this.centroX + tickSize, this.centroY - i * espacioY); this.ctx.moveTo(this.centroX - tickSize, this.centroY + i * espacioY); this.ctx.lineTo(this.centroX + tickSize, this.centroY + i * espacioY); } this.ctx.stroke();
    },

    dibujarInecuacion: function(datosGrafico) {
        if (!this.ctx) return;
        this.limpiar();
        this.dibujarEjes();
        const { tipo } = datosGrafico;
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = this.colorCurva;
        this.ctx.fillStyle = this.colorSombreado;

        switch (tipo) {
            case 'linea_vertical': /* ... (sin cambios) ... */
                const { valor, desigualdad } = datosGrafico; const esInclusivo = desigualdad.includes('='); const pos = this.mathToCanvas(valor, 0); this.ctx.setLineDash(esInclusivo ? [] : [10, 10]); this.ctx.beginPath(); this.ctx.moveTo(pos.x, 0); this.ctx.lineTo(pos.x, this.height); this.ctx.stroke(); if (desigualdad.includes('>')) { this.ctx.fillRect(pos.x, 0, this.width - pos.x, this.height); } else { this.ctx.fillRect(0, 0, pos.x, this.height); }
                break;
            case 'intervalos_x': /* ... (sin cambios) ... */
                const { intervalos } = datosGrafico; intervalos.forEach(intervalo => { const inicioX = (intervalo.inicio === -Infinity) ? 0 : this.mathToCanvas(intervalo.inicio, 0).x; const finX = (intervalo.fin === Infinity) ? this.width : this.mathToCanvas(intervalo.fin, 0).x; this.ctx.fillRect(inicioX, 0, finX - inicioX, this.height); if (intervalo.inicio !== -Infinity) { this.ctx.setLineDash(intervalo.incluye_inicio ? [] : [10, 10]); this.ctx.beginPath(); this.ctx.moveTo(inicioX, 0); this.ctx.lineTo(inicioX, this.height); this.ctx.stroke(); } if (intervalo.fin !== Infinity) { this.ctx.setLineDash(intervalo.incluye_fin ? [] : [10, 10]); this.ctx.beginPath(); this.ctx.moveTo(finX, 0); this.ctx.lineTo(finX, this.height); this.ctx.stroke(); } });
                break;
            case 'hiperbola_racional': /* ... (sin cambios) ... */
                const { funcion: funcHiperbola, asintota_vertical, asintota_horizontal } = datosGrafico; this.ctx.strokeStyle = this.colorAsintota; this.ctx.lineWidth = 1; this.ctx.setLineDash([5, 5]); const av_pos = this.mathToCanvas(asintota_vertical, 0); this.ctx.beginPath(); this.ctx.moveTo(av_pos.x, 0); this.ctx.lineTo(av_pos.x, this.height); this.ctx.stroke(); const ah_pos = this.mathToCanvas(0, asintota_horizontal); this.ctx.beginPath(); this.ctx.moveTo(0, ah_pos.y); this.ctx.lineTo(this.width, ah_pos.y); this.ctx.stroke(); this.ctx.setLineDash([]); this.ctx.strokeStyle = '#3498db'; this.ctx.lineWidth = 3; this.ctx.beginPath(); for (let px = 0; px < this.width; px++) { const x_math = (px - this.centroX) / this.escala; if (Math.abs(x_math - asintota_vertical) < 0.1) { this.ctx.stroke(); this.ctx.beginPath(); continue; } const y_math = funcHiperbola(x_math); const pos_canvas = this.mathToCanvas(x_math, y_math); this.ctx.lineTo(pos_canvas.x, pos_canvas.y); } this.ctx.stroke();
                break;
            case 'parabola': /* ... (sin cambios) ... */
                const { funcion: funcParabola, vertice } = datosGrafico; this.ctx.strokeStyle = '#2ecc71'; this.ctx.lineWidth = 3; this.ctx.beginPath(); for (let px = 0; px < this.width; px++) { const x_math = (px - this.centroX) / this.escala; const y_math = funcParabola(x_math); const pos_canvas = this.mathToCanvas(x_math, y_math); if (px === 0) { this.ctx.moveTo(pos_canvas.x, pos_canvas.y); } else { this.ctx.lineTo(pos_canvas.x, pos_canvas.y); } } this.ctx.stroke(); if (vertice) { this.ctx.fillStyle = this.colorAsintota; const vertice_pos = this.mathToCanvas(vertice.x, vertice.y); this.ctx.beginPath(); this.ctx.arc(vertice_pos.x, vertice_pos.y, 5, 0, 2 * Math.PI); this.ctx.fill(); }
                break;
            case 'linea_recta': /* ... (sin cambios) ... */
                const { funcion: funcRecta, interseccion_y, interseccion_x } = datosGrafico; this.ctx.strokeStyle = '#9b59b6'; this.ctx.lineWidth = 3; this.ctx.beginPath(); const xMin = (-this.centroX) / this.escala; const xMax = (this.width - this.centroX) / this.escala; const y1 = funcRecta(xMin); const y2 = funcRecta(xMax); const p1 = this.mathToCanvas(xMin, y1); const p2 = this.mathToCanvas(xMax, y2); this.ctx.moveTo(p1.x, p1.y); this.ctx.lineTo(p2.x, p2.y); this.ctx.stroke(); this.ctx.fillStyle = this.colorAsintota; if (interseccion_y !== undefined) { const int_y_pos = this.mathToCanvas(0, interseccion_y); this.ctx.beginPath(); this.ctx.arc(int_y_pos.x, int_y_pos.y, 5, 0, 2 * Math.PI); this.ctx.fill(); } if (interseccion_x !== undefined) { const int_x_pos = this.mathToCanvas(interseccion_x, 0); this.ctx.beginPath(); this.ctx.arc(int_x_pos.x, int_x_pos.y, 5, 0, 2 * Math.PI); this.ctx.fill(); }
                break;
            
            // --- ¡NUEVA LÓGICA PARA DIBUJAR HIPÉRBOLAS DEFINIDAS POR ECUACIÓN! ---
            case 'hiperbola_definida':
                const { centro, a, b } = datosGrafico;
                const h = centro.x;
                const k = centro.y;
                
                // Calculamos las asíntotas y = k +- (b/a)(x-h)
                const pendiente1 = b / a;
                const pendiente2 = -b / a;

                // 1. Dibujar Centro
                this.ctx.fillStyle = this.colorAsintota; // Color de marca
                const centro_pos = this.mathToCanvas(h, k);
                this.ctx.beginPath();
                this.ctx.arc(centro_pos.x, centro_pos.y, 5, 0, 2 * Math.PI); // Pequeño círculo en el centro
                this.ctx.fill();

                // 2. Dibujar Asíntotas
                this.ctx.strokeStyle = this.colorAsintota;
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([5, 5]); // Punteadas
                
                // Asíntota 1: y = k + pendiente1 * (x - h)
                const y_asintota1 = (x_val) => k + pendiente1 * (x_val - h);
                const p1_asintota1 = this.mathToCanvas(this.xMinVisible, y_asintota1(this.xMinVisible));
                const p2_asintota1 = this.mathToCanvas(this.xMaxVisible, y_asintota1(this.xMaxVisible));
                this.ctx.beginPath();
                this.ctx.moveTo(p1_asintota1.x, p1_asintota1.y);
                this.ctx.lineTo(p2_asintota1.x, p2_asintota1.y);
                this.ctx.stroke();

                // Asíntota 2: y = k + pendiente2 * (x - h)
                const y_asintota2 = (x_val) => k + pendiente2 * (x_val - h);
                const p1_asintota2 = this.mathToCanvas(this.xMinVisible, y_asintota2(this.xMinVisible));
                const p2_asintota2 = this.mathToCanvas(this.xMaxVisible, y_asintota2(this.xMaxVisible));
                this.ctx.beginPath();
                this.ctx.moveTo(p1_asintota2.x, p1_asintota2.y);
                this.ctx.lineTo(p2_asintota2.x, p2_asintota2.y);
                this.ctx.stroke();
                this.ctx.setLineDash([]); // Resetear
                
                // 3. Dibujar la hipérbola (ramas horizontales)
                this.ctx.strokeStyle = this.colorCurva; // Color de la curva (ej: verde)
                this.ctx.lineWidth = 3;

                // Rama derecha (x > h + a)
                this.ctx.beginPath();
                for (let px = centro_pos.x + a * this.escala; px < this.width; px++) {
                    const x_math = (px - this.centroX) / this.escala;
                    // Resolver la ecuación para y: (y-k)^2 = (x-h)^2/a^2 - 1 * b^2
                    // y = k + b * sqrt( (x-h)^2/a^2 - 1 )
                    // y = k - b * sqrt( (x-h)^2/a^2 - 1 )
                    const term_x = (x_math - h) / a;
                    const radicand = term_x * term_x - 1;
                    if (radicand >= 0) { // Solo si el radicando es no negativo
                        const y_plus = k + b * Math.sqrt(radicand);
                        const y_minus = k - b * Math.sqrt(radicand);
                        
                        // Dibujar la rama superior
                        const pos_canvas_plus = this.mathToCanvas(x_math, y_plus);
                        if (px === centro_pos.x + a * this.escala) { this.ctx.moveTo(pos_canvas_plus.x, pos_canvas_plus.y); } else { this.ctx.lineTo(pos_canvas_plus.x, pos_canvas_plus.y); }
                    }
                }
                this.ctx.stroke(); // Terminar la rama superior derecha

                this.ctx.beginPath(); // Empezar la rama inferior derecha
                 for (let px = centro_pos.x + a * this.escala; px < this.width; px++) {
                    const x_math = (px - this.centroX) / this.escala;
                    const term_x = (x_math - h) / a;
                    const radicand = term_x * term_x - 1;
                    if (radicand >= 0) {
                        const y_minus = k - b * Math.sqrt(radicand);
                        const pos_canvas_minus = this.mathToCanvas(x_math, y_minus);
                         if (px === centro_pos.x + a * this.escala) { this.ctx.moveTo(pos_canvas_minus.x, pos_canvas_minus.y); } else { this.ctx.lineTo(pos_canvas_minus.x, pos_canvas_minus.y); }
                    }
                }
                this.ctx.stroke(); // Terminar la rama inferior derecha


                // Rama izquierda (x < h - a)
                this.ctx.beginPath();
                for (let px = centro_pos.x - a * this.escala; px >= 0; px--) {
                    const x_math = (px - this.centroX) / this.escala;
                    const term_x = (x_math - h) / a;
                    const radicand = term_x * term_x - 1;
                     if (radicand >= 0) {
                        const y_plus = k + b * Math.sqrt(radicand);
                        const y_minus = k - b * Math.sqrt(radicand);
                        
                        // Dibujar la rama superior
                        const pos_canvas_plus = this.mathToCanvas(x_math, y_plus);
                        if (px === centro_pos.x - a * this.escala) { this.ctx.moveTo(pos_canvas_plus.x, pos_canvas_plus.y); } else { this.ctx.lineTo(pos_canvas_plus.x, pos_canvas_plus.y); }
                    }
                }
                this.ctx.stroke(); // Terminar la rama superior izquierda

                this.ctx.beginPath(); // Empezar la rama inferior izquierda
                for (let px = centro_pos.x - a * this.escala; px >= 0; px--) {
                    const x_math = (px - this.centroX) / this.escala;
                    const term_x = (x_math - h) / a;
                    const radicand = term_x * term_x - 1;
                    if (radicand >= 0) {
                        const y_minus = k - b * Math.sqrt(radicand);
                        const pos_canvas_minus = this.mathToCanvas(x_math, y_minus);
                        if (px === centro_pos.x - a * this.escala) { this.ctx.moveTo(pos_canvas_minus.x, pos_canvas_minus.y); } else { this.ctx.lineTo(pos_canvas_minus.x, pos_canvas_minus.y); }
                    }
                }
                this.ctx.stroke(); // Terminar la rama inferior izquierda

                break;

            default: /* ... (sin cambios) ... */
                console.warn(`Tipo de gráfico desconocido: '${tipo}'.`); this.ctx.font = "16px Oswald"; this.ctx.fillStyle = "#e74c3c"; this.ctx.textAlign = "center"; this.ctx.fillText(`Gráfico tipo '${tipo}' no implementado.`, this.width / 2, this.height / 2);
                break;
        }
        this.ctx.setLineDash([]); // Resetea el estilo de línea para futuros dibujos.
    },
    
    // Propiedades para calcular el rango visible en coordenadas matemáticas
    get xMinVisible() { return (-this.centroX) / this.escala; },
    get xMaxVisible() { return (this.width - this.centroX) / this.escala; },
    get yMinVisible() { return (-this.centroY) / this.escala; }, // En Math, y hacia abajo es negativo
    get yMaxVisible() { return (this.height - this.centroY) / this.escala; } // En Math, y hacia arriba es positivo
};