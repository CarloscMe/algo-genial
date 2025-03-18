const numero1 = prompt("ingresa el primer numero");

const numero2 = prompt("ingresa el segundo numero");

if(numero1 > numero2){
   alert( `el numero mayor es: ${numero1}. `);
}

else if(numero2 > numero1){
    alert(`el numero mayor es: ${numero2}. `);
}

else{
    alert("tu numero es igual asi mismo");
}


// con un metodo de array puedo recorrerlo y los numero que no aparezcan son impar en si tengo que repasar los metodos//

/*const entrada = prompt("ingresa un numero");

for(let i= 0; i < 1000; i += 2 ){

    if(entrada == i){
        console.log(`el numero: ${entrada} es par. `);
    }
}*/



