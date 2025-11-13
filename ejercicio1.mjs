import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero del 1 al 3: ', (num)=>{
    let numero = Number(num);

    switch(numero){
        case 1: 
            console.log('Numero uno')
            break;
        case 2: 
            console.log('Numero dos');
            break;
        case 3: 
            console.log('Numero tres');
            break;
        default:
            console.log('Ingresa un numero dentro del rango');
            break;
    }
    rl.close();
})