import readline from 'readline';

// 1. Configurar la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * --- Ejercicio 2: Saludo por Hora ---
 * Muestra un saludo basado en la hora actual del sistema.
 */
function saludoPorHora() {
    console.log("--- Ejercicio 2: Saludo por Hora ---");
    const hora = new Date().getHours();

    if (hora >= 6 && hora <= 11) {
        console.log("Buenos días");
    } else if (hora >= 12 && hora <= 17) {
        console.log("Buenas tardes");
    } else if (hora >= 18 && hora <= 23) {
        console.log("Buenas noches");
    } else { // Cubre de 0 a 5
        console.log("a dormir");
    }
    console.log("--------------------------------------");
}

/**
 * --- Ejercicio 3: Precio del Cine ---
 * Pide la edad al usuario y muestra el precio de la entrada.
 * @param {function} callback - Función a llamar cuando este ejercicio termine.
 */
function calcularPrecioCine(callback) {
    console.log("\n--- Ejercicio 3: Precio del Cine ---");
    
    rl.question("Por favor, ingrese su edad: ", (respuesta) => {
        const edad = parseInt(respuesta);

        if (isNaN(edad) || edad < 0) {
            console.log("Error: La edad ingresada no es válida.");
        } else if (edad < 12) {
            console.log("El precio de la entrada es: $3.00");
        } else if (edad >= 12 && edad <= 59) {
            console.log("El precio de la entrada es: $5.00");
        } else { // edad >= 60
            console.log("El precio de la entrada es: $2.50");
        }
        
        console.log("------------------------------------");
        callback(); // Llama a la siguiente función en la cadena
    });
}

/**
 * --- Ejercicio 4: Costo del Estacionamiento ---
 * Pide las horas de estacionamiento y muestra el total a pagar.
 * @param {function} callback - Función a llamar cuando este ejercicio termine.
 */
function calcularCostoEstacionamiento(callback) {
    console.log("\n--- Ejercicio 4: Costo de Estacionamiento ---");
    
    rl.question("Ingrese la cantidad de horas estacionado: ", (respuesta) => {
        // Usamos parseFloat para permitir horas fraccionadas (ej: 1.5)
        const horas = parseFloat(respuesta);

        if (isNaN(horas) || horas < 0) {
            console.log("Error: El número de horas no es válido.");
        } else if (horas > 0 && horas <= 1) {
            console.log("El total a pagar es: $2");
        } else if (horas > 1 && horas <= 4) {
            console.log("El total a pagar es: $5");
        } else if (horas > 4) {
            console.log("El total a pagar es: $10");
        } else { // horas === 0
            console.log("El total a pagar es: $0");
        }
        
        console.log("---------------------------------------------");
        callback(); // Llama a la última función (cerrar rl)
    });
}

/**
 * --- Función Principal ---
 * Orquesta la ejecución de todos los ejercicios en orden.
 */
function iniciarEjercicios() {
    // 1. Ejecutar el saludo (no necesita entrada)
    saludoPorHora();
    
    // 2. Iniciar la cadena de preguntas.
    // Cada función llama a la siguiente como un callback.
    calcularPrecioCine(() => {
        calcularCostoEstacionamiento(() => {
            // 3. Una vez que todo termina, cerrar readline
            console.log("\nTodos los ejercicios completados.");
            rl.close();
        });
    });
}

// Iniciar la secuencia
iniciarEjercicios();