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

const texto = document.querySelector(".texto");

titulo1.addEventListener("click", () =>{
    texto.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, pariatur quas. Id, quos eaque. Molestiae rerum architecto in modi sequi numquam, quos laborum! Magni vel voluptate veniam dicta, neque laborum?"
});

titulo2.addEventListener("click", () =>{
  texto.innerText = "xd";
})

titulo3.addEventListener("click", () =>{
  texto.innerText = "xdggggggggggggggg";
})

