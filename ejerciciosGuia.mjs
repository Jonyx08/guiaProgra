import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saludoPorHora() {
    console.log("--- Ejercicio 2: Saludo por Hora ---");
    const hora = new Date().getHours();

    if (hora >= 6 && hora <= 11) {
        console.log("Buenos días");
    } 
    else if (hora >= 12 && hora <= 17) {
        console.log("Buenas tardes");
    } else if (hora >= 18 && hora <= 23) {
        console.log("Buenas noches");
    } else { 
        console.log("a dormir");
    }
    console.log("--------------------------------------");
}

function calcularPrecioCine(callback) {
    console.log("\n--- Ejercicio 3: Precio del Cine ---");
    
    rl.question("Por favor, ingrese su edad: ", (resp) => {
        const edad = parseInt(resp);

        if (isNaN(edad) || edad < 0) {
            console.log("Error: La edad ingresada no es válida.");
        } else if (edad < 12) {
            console.log("El precio de la entrada es: $3.00");
        } else if (edad >= 12 && edad <= 59) 
        {
            console.log("El precio de la entrada es: $5.00");
        } else { 
            console.log("El precio de la entrada es: $2.50");
        }
        
        console.log("------------------------------------");
        callback();
    });
}

function calcularCostoEstacionamiento(callback) {
    console.log("\n--- Ejercicio 4: Costo de Estacionamiento ---");
    
    rl.question("Ingrese la cantidad de horas estacionado: ", (respuesta) => {
        const horas = parseFloat(respuesta);

        if (isNaN(horas) || horas < 0) {
            console.log("Error: El número de horas no es válido.");
        } else if (horas > 0 && horas <= 1) {
            console.log("El total a pagar es: $2");
        } else if (horas > 1 && horas <= 4) {
            console.log("El total a pagar es: $5");
        } else if (horas > 4) {
            console.log("El total a pagar es: $10");
        } else { 
            console.log("El total a pagar es: $0");
        }
        
        console.log("---------------------------------------------");
        callback();
    });
}

function iniciarEjercicios() {
    saludoPorHora();
    
    calcularPrecioCine(() => {
        calcularCostoEstacionamiento(() => {
            console.log("\nTodos los ejercicios completados.");
            rl.close();
        });
    });
}

iniciarEjercicios();