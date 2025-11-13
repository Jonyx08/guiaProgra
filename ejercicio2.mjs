import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const frutas = ['manzana', 'banana', 'naranja', 'fresas']

function precioFrutas(fruta){
    let precio;
    
    switch(fruta.toLowerCase()){
        case 'manzana':
            precio = 0.75
            break;
        case 'banana':
            precio = 0.50
            break;
        case 'naranja':
            precio = 0.80
            break;
        case 'fresas':
            precio = 1.20
            break;
        default:
            precio = 0
    }
    return precio;
}

rl.question('Ingresa tu producto_fruta: ', (fruta)=>{
    const precio = precioFrutas(fruta);

    if(frutas.includes(fruta.trim().toLowerCase())){
        console.log(`El precio de ${fruta} es ${precio.toFixed(1)}`);
    }else{
        console.log('Fruta no valida');
    }
    rl.close();
})