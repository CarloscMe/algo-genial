/*const numero1 = parseInt(prompt("ingresa el primer numero")); // como la entrada es number el programa esta completado //

const numero2 = parseInt(prompt("ingresa el segundo numero"));

if(numero1 > numero2){
   alert( `el numero mayor es: ${numero1}. `); 
}

else if(numero2 > numero1){
    alert(`el numero mayor es: ${numero2}. `);
}

else{
    alert("tu numero es igual asi mismo");
}*/

/*const entrada = parseInt(prompt("ingresa un numero"));

if (entrada % 2 == 0){
  console.log(`el numero ${entrada} es par. `)
}

else if( entrada % 2 != 0){
  console.log(`el numero ${entrada} es impar. `)
}*/


/*const edad = parseInt(prompt("ingresa tu edad"));

if (edad >= 18 && edad <= 100) {
  alert(`tienes ${edad} eres mayor de edad. `);
} else {
  alert("no puedes pasar");
}*/

/*const entrada3 = parseInt(prompt("ingresa tu numero"));

const dato1 = Math.random()*100;

const dato2 = Math.round(dato1);

if (entrada3 == dato2 ) {
    console.log(dato2)
}

else if (entrada3 > 100){
    console.log("debe ser hasta 100")
 }
 else{
    alert("intentarlo")
 }*/


const titulo1 = document.querySelector("#titulo-1");

const titulo2 = document.querySelector("#titulo-2");

const titulo3 = document.querySelector("#titulo-3");

const textos = document.querySelector(".texto");

let info = "hola chapapapapapapapapa"

textos.textContent = info;

titulo1.addEventListener("click", () =>{
    textos.innerText = info;
});

titulo2.addEventListener("click", () =>{
  textos.innerText = "xd";
})

titulo3.addEventListener("click", () =>{
  textos.innerText = "xdggggggggggggggg";
})

const input = document.querySelector("#input");

const texto = document.querySelector(".salida");

const mandar = document.querySelector("#mandar");

mandar.addEventListener("click", () =>{

  let edad = 0; 

  let añoActual = new Date().getFullYear();  /* en si hay 2 opciones tomar el numero decimal y se vuelve entero o si el numero es decimal alertar*/

  edad = parseInt(input.value);

  let resultado = añoActual - edad;

 /* alert(typeof(edad) + edad);*/
  Math.floor(edad);
 
   if(edad){
     
       if (input.value >= 1 && input.value <= 122) {
      
         texto.innerText = `nacistes en el año ${resultado}. `;
         input.value = '';
        
       }
       
       else{
        alert("esta no es una edad comun")
       }

   }
   else{
    alert("ingresa tu edad");
   }


});
