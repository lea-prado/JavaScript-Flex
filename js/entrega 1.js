let suma = 0;
let numeros = []; //Numeros agregados
let array1 = [];
let array2 = [];
let arraySuma = [];
let numero;
let option;

do {

    option = prompt( "Elige una opcion:\n" + "1. Sumar un numero\n" + "2. Restar un numero\n" + "3. Mostrar resultado actual\n" + "4. Mostrar los numeros \n" + "5. Crear y sumar dos arrays\n" + "0. Salir");

    switch(option){
        case "1":
            sumar(); //Llamo a mi funcion
            break;

        case "2":
            restar();
            break;
        case "3":
            alert("La suma actual es:" + suma);
            break;
        case "4":
            if (numeros.length > 0) {
                alert("Numeros ingresados:" + numeros.join(",")); //Concateno con una coma en el medio
            }else{
                alert("No hay numeros ingresados");
            }
            break;
        case "5":
            //Crear y sumar 2 arreglos
            array1 = [];
            array2 = [];
            arraySuma = [];
            let largo = prompt("Ingresa la longitud de los arreglos:");
            largo = parseInt(largo); // Convierto el largo en un numero entero

            if (!isNaN(largo) && largo > 0) {
                for (let i = 0; i < largo; i++){
                    let valor1 = prompt(`Ingresa el valor ${i + 1} para el primer arreglo:`);
                    valor1 = parseFloat(valor1);
                    if (!isNaN(valor1)){
                        array1.push(valor1);
                    }else {
                        alert("Valor invalido, se ingresara 0.");
                        array1.push(0);
                    }
                }
                for (let i = 0; i < largo; i++){
                    let valor2 = prompt(`Ingresa el valor ${i + 1} para el segundo arreglo:`);
                    valor2 = parseFloat(valor2);
                    if (!isNaN(valor2)){
                        array2.push(valor2);
                    }else {
                        alert("Valor invalido, se ingresara 0.");
                        array2.push(0);
                    }
                }

                //Sumo los dos arreglos
                for (let i = 0; i< largo; i++){
                    arraySuma.push(array1[i] + array2[i]);
                }

                alert("Primero array:" + array1.join(", ") + "\nSegundo array:" + array2.join(", ") + "\nSuma de arreglos:" + arraySuma.join(", "));


            }else{
                alert("Largo de arrays invalidos.");
            }
            break;

            default:
                alert("Opcion no valida, intenta nuevamente");
            
    }

}while (option !== "0"); //Si selecciono 0 salgo del do while

function sumar() {
    numero = prompt("Ingresa un numero:");
    if(!isNaN(numero) && numero !== null){ //Nota: isNaN true si es un numero (Not A Number)
        numero = parseFloat(numero); // Devuelve un numero de coma flotante
        numeros.push(numero); //Agrego al array de numeros
        suma += numero;
        alert("Numero sumado. Suma actual:" + suma) //Muestro alerta con la suma
        
    }else{
        alert("Nmero invalido.");
    }
};

function restar(){
    numero = prompt("Ingresa un numero para restar:");
    if(!isNaN(numero) && numero !==null){
        numero = parseFloat(numero);
        numeros.push(-numero); // Lo agrego como numero negativo
        suma -= numero; //Resto el numero de la suma
        alert("Numero restado. Suma actual:" + suma);
    }else{
        alert("Numero invalido");
    }
}



