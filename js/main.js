// Operadores lógicos.

// Igualdad: vamos a comparar si un valor es o no igual a otro valor

// let numeroA = 2;
// let numeroB = 8;

// let numeroBString = "8";

// // let comparacion = numeroA == numeroB;

// // console.log(numeroA == numeroB);

// // console.log(numeroA == 2);
// // console.log(numeroB == 8);

// console.log(numeroB == numeroBString); // 8 == "8" da true porque ambos son 8
// console.log(numeroB === numeroBString); // 8 === "8" da false porque son dos tipos de datos diferentes

// // Si hacemos igualdad (==) solo compara valores. Si hacemos igualdad estricta (===) además compara tipo de dato

// console.log(numeroA === numeroB);

// Operadores de comparación mayor/menor

// let edadDelProfe = 17;

// console.log(edadDelProfe > 17);
// console.log(edadDelProfe >= 18);
// console.log(edadDelProfe < 18);

// MAYOR O IGUAL ---> >=
// MENOR O IGUAL ---> <=

// -------------------------------

// DESIGUALDAD

// console.log(2 !== 3);

// Operador NOT: cambia el booleano de true a false o de false a true según corresponda

// console.log(!!false);

/*
!!false ---> !true
*/

// OPERADOR AND (&&)


// let asado = true;
// let cerveza = true;

// console.log(asado && cerveza);

// Conclusión del operador AND: para que el operador AND nos devuelva true, TODAS SUS VARIABLES TIENEN QUE SER TRUE. Con que solo una sea false, todo se convierte en false


/*

Para tipear && hacemos SHIFT + 6 (el que está arriba de la T y la Y, no el teclado numérico)

a   b    a&&b
V   V      V
V   F      F
F   V      F
F   F      F

*/


// Operador OR (||)

// let asado = false;
// let pizza = true;

// console.log(asado || pizza);

// Conclusión del operador OR: para que el operador OR nos devuelva false, TODAS SUS VARIABLES TIENEN QUE SER FALSE. Con que solo una sea true, todo se convierte en true

/*

Para tipear || tocamos la tecla que está al lado del 1 (no en el teclado numérico) (También se puede con ALT + 124 del teclado numérico)

a   b    a||b
V   V      V
V   F      V
F   V      V
F   F      F

*/


// Operador IF (utiliza el equivalente a decir si sin tilde, o sea, de condición y no de afirmación).

/*

if(condicion){
    // Ejecutamos algo
}

*/

// if(true){
//     console.log("Entro al operador if");
// };

// if(false){
//     console.log("No lo vamos a ver en consola");
// };

// if(true){
//     console.log("Entro al segundo operador if");
// };

// let numeroA = 3;

// if(numeroA === 3){
//     console.log("Tu número es tres");
// };

// if(numeroA !== 3){
//     console.log("Tu número NO es tres");
// };

// let edadDelProfe = 17;

// if(edadDelProfe >= 18){
//     console.log("Sos mayor de edad");
// } else {
//     console.log("El profe está en la flor de la edad");
// };

// if(edadDelProfe >= 18){
//     console.log("Sos mayor de edad");
// };

// if(edadDelProfe < 18){
//     console.log("El profe está en la flor de la edad");
// };

// let otraEdad = 21;

// if (otraEdad < 18) {
//     console.log("NO PASA");
// } else if (otraEdad > 20) {
//     console.log("PASA GRATIS");
// } else {
//     console.log("PASA PAGANDO ENTRADA");
// };


// let precio = 100.5;

// if (precio < 20) {
//     alert("El precio es menor que 20");
// }
// else if (precio < 50) {
//     alert("El precio es menor que 50");
// }
// else if (precio < 100) {
//     alert("El precio es menor que 100");
// }
// else {
//     alert("El precio es mayor que 100");
// }

// let precio = 100.5;

// // // // // // if (precio < 20) {
// // // // // //     alert("El precio es menor que 20");
// // // // // // }
// // // // // // if (precio < 50) {
// // // // // //     alert("El precio es menor que 50");
// // // // // // }
// // // // // // if (precio < 100) {
// // // // // //     alert("El precio es menor que 100");
// // // // // // }
// // // // // // if(precio > 100) {
// // // // // //     alert("El precio es mayor que 100");
// // // // // // }

// Login

// let usuario = prompt("Ingrese su usuario").toLowerCase(); // lucascoder

// let clave = prompt("Ingrese su clave").toLowerCase(); // clavecoder

// if(usuario === "lucascoder" && clave === "clavecoder"){
//     alert("Bienvenido a la súper plataforma de Coder");
// } else {
//     alert("Credenciales inválidas");
// };


// Saludos

// let idioma = prompt("Ingrese el idioma en el que quiera saludar").toLowerCase();

// if (idioma === "español") {
//     alert("HOLA");
// } else if (idioma === "ingles") {
//     alert("HELLO");
// } else if (idioma === "frances") {
//     alert("BONJOUR")
// } else if (idioma === "euskera") {
//     alert("EGUN ON");
// } else {
//     alert("NO TENEMOS ESE IDIOMA");
// };

// switch (idioma) {
//     case "español":
//         alert("HOLA");
//         break;
//     case "ingles":
//         alert("HELLO");
//         break;
//     case "frances":
//         alert("BONJOUR");
//         break;
//     default:
//         alert("NO TENEMOS ESE IDIOMA");
//         break;
// }  // Volvemos 21:55


// Conclusión de switch: todo lo que hagan con switch se puede hacer con if else, pero no al revés. Por qué? Porque switch SOLO COMPARA IGUALDADES.


// Ciclo for: es un ciclo por conteo. Quiere decir que vamos a conocer cuántos conteos queremos hacer y vamos a decirle.

// Vamos a elaborar un "turnero". 

// let personaA = prompt("Ingrese su nombre");
// let personaB = prompt("Ingrese su nombre");
// let personaC = prompt("Ingrese su nombre");

// console.log("Turno 1: " + personaA);
// console.log("Turno 2: " + personaB);
// console.log("Turno 3: " + personaC);

/*

for(let i = 1; condicion; modificacion){
   // Instrucciones
}

i++ significa que vamos a aumentar en 1 cada vez que hagamos un paso nuevo.

*/

// let persona;

// for(let i = 1; i <= 4; i++){
//     persona = prompt("Ingrese nombre");
//     console.log(i + "- " + persona);
// };

// Login con 3 intentos

// for (let i = 1; i <= 3; i++) {
//     let usuario = prompt("Ingrese su usuario").toLowerCase(); // lucascoder

//     let clave = prompt("Ingrese su clave").toLowerCase(); // clavecoder

//     if (usuario === "lucascoder" && clave === "clavecoder") {
//         alert("Bienvenido a la súper plataforma de Coder");
//         break;
//     } else {
//         alert("Credenciales inválidas");
//         if(i === 3){
//             alert("DESPÍDETE DE TU CUENTA, LINCE (me lo contó mi papá que era taringuero)");
//         };
//     };
// };

// WHILE: ciclo por condición. Vamos a decir qué queremos que compare y va a repetirse mientras se cumpla esa comparación


/*

while(condicion){
    // Bloque a ejecutar
}

*/

// let rol = prompt("Ingresá tu rol");

// while(rol !== "profe"){
//     rol = prompt("Ingresá tu rol. No sos profe. Cuando seas profe termina esto");
// };


// let repetir = true;

// while (repetir) {
//     let usuario = prompt("Ingrese su usuario").toLowerCase(); // lucascoder

//     let clave = prompt("Ingrese su clave").toLowerCase(); // clavecoder

//     if (usuario === "lucascoder" && clave === "clavecoder") {
//         alert("Bienvenido a la súper plataforma de Coder");
//         repetir = false;
//     } else {
//         alert("Credenciales inválidas");
//     };
// }

// let entrada = prompt("Ingresar un dato");

// while (entrada != "ESC") {
//     alert("El usuario ingresó " + entrada);
//     entrada = prompt("Ingresar otro dato");
// }

// Para ejecutar sí o sí al menos una vez, tenemos DO WHILE. Digamos que es primo hermano de while pero es un poquito más rebelde y temerario.

// let entrada;

// do{
//     entrada = prompt("Ingresar un dato");
//     alert("El usuario ingresó " + entrada);
// } while(entrada != "ESC");


// Final boss: vamos a hacer un menú de opciones.

/*

1. Ver precio
2. Comprar
3. Ver stock

0. SALIR

*/

let opcion;

do{

    opcion = prompt("Ingrese la opción deseada. 1 para ver precio, 2 para comprar, 3 para ver stock. Si desea salir, pulse 0");

    switch (opcion) {
        case "0":
            alert("Gracias, vuelvas prontos!");
            break;
        case "1":
            alert("Estos son nuestros precios");
            break;
        case "2":
            alert("Compraste este producto: xxx");
            break;
        case "3":
            alert("Vas a ver el stock de este producto: yyy")
            break;
        default:
            alert("Ingresaste una opción inválida. Ingresá por favor una correcta");
            break;
    };
}while(opcion !== "0");

// Tarea: hacer lo mismo con if else. De modo tal que solo cambiarían un condicional. No van a usar ciclos en esta tarea.

// Tarea plus: prueben hacerlo con while.