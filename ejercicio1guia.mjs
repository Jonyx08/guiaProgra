import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// console.log('---Menu de opciones ---');
// console.log('---1. Sumar---');
// console.log('---2. Restar---');
// console.log('---3. Multiplicar---');
// console.log('---4. Dividir---');
// console.log('---5. Salir---');




// rl.question('selecione una opcion del 1 al 5: ', (option)=>{
//     let opcion = Number(option);

// function Sumar(a, b){
//     let result = a+b
//     return result    
// }
// function Restar(a, b){
//     let result = a - b
//     return result    
// }
// function Multiplicar(a, b){
//     let result = a*b
//     return result    
// }
// function Dividir(a, b){
//     let result = a/b
//     return result    
// }
//     switch(opcion){
//         case 1:
//         case 2:
//         case 3:
//         case 4:

//         rl.question('ingrese el primer numero: ', (num1)=>{
//             rl.question('ingrese el segundo numero: ', (num2)=>{
//                 const a1 = Number(num1)
//                 const b1 = Number(num2)

//                 let resultado = 0; 
                
//                 switch(opcion){
//                 case 1:
//                     resultado = Sumar(a1, b1)
//                     console.log(`la respuesta es ${resultado}`);
//                     break;
//                 case 2:
//                     resultado = Restar(a1, b1)
//                     console.log(`la respuesta es ${resultado}`);
//                     break;
//                 case 3:
//                     resultado = Multiplicar(a1, b1)
//                     console.log(`la respuesta es ${resultado}`);
//                     break;
//                 case 4:
//                     resultado = Dividir(a1, b1)
//                     console.log(`la respuesta es ${resultado}`);
//                     break;
//                 default:
//                     console.log('haz elegido salir');
//                     break;
//             }
//             })
//         })
//     }
//     rl.close()
// })


rl.question('Ingresa una hora en horario militar: ', (time)=>{
    let tiempo = Number(time)
    let resultado = saludo(tiempo)

    console.lo g(`Hola ${resultado}`);
    rl.close()
})

function saludo(hora){
    if(hora >= 6 && hora <= 11){
        return ('Buenos dias')
    }else if(hora >= 12 && hora <= 17 ){
        return ('Buenas tardes')
    }else if(hora >=18 && hora <=23){
        return 'Buenas noches'
    }else if(hora >= 0 && hora <= 5){
        return 'a dormir'
    }else{
        return 'Haz ingresado la hora mala'
    }
}
