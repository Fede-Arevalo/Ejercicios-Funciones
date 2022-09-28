// Funciones

// Crea un programa el cual te pregunte por una nota del 0 al 10 y
// dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

// function clasificacion() {
//   let nota = prompt("Introduce una nota del 0 al 10");

//   switch (+nota) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//       resultado = "Insuficiente";
//       break;

//     case 5:
//     case 6:
//       resultado = "Suficiente";
//       break;

//     case 7:
//     case 8:
//       resultado = "Notable";
//       break;

//     case 9:
//     case 10:
//       resultado = "Sobresaliente";
//       break;

//     default:
//       resultado = "No es un número del 0 al 10.";
//       break;
//   }

//   return alert("Clasificación: " + resultado);
// }

// clasificacion();

// ----------------------------------------------------------

// Crea una función resta que espere dos parámetros a y b y
// que devuelva la resta de los mismos.

// function resta(a, b) {
//   return a - b;
// }

// console.log("function resta = " + resta(8, 4));

// ----------------------------------------------------------

// Crea la función duplicaNumero debe recibir un tipo number y devolver
// el doble del valor recibido. Si la función no recibe un dato tipo number
// debe devolver el string ‘Debo ser ejecutada con un número’

// function duplicaNumero(number) {
//   if (typeof number != "number") {
//     return console.log("Debo ser ejecutada con un número");
//   }
//   let total = number * 2;
//   return console.log(total);
// }

// duplicaNumero(5);

// ----------------------------------------------------------

// Crea la función caracterInicial debe recibir un tipo string y
// devolver un string con el primer carácter.

//     - Si la función no recibe un dato tipo string debe devolver
//     el string 'Debo ser ejecutada con un string'.

//     - Si recibe un string vacío debe devolver
//     'Debo ser ejecutada con un string no vacío'

// function caracterInicial(string) {
//   if (typeof string != "string") {
//     return console.log("Debo ser ejecutada con un string");
//   } else if (string == "") {
//     return console.log("Debo ser ejecutada con un string no vacío");
//   }
//   return console.log(string.charAt(0));
// }

// caracterInicial("Ferrari");

// ----------------------------------------------------------

// Crea la función ultimoCaracter debe recibir un tipo string y
// devolver un string con el último carácter.

//     - Si la función no recibe un dato tipo string debe devolver
// el string 'Debo ser ejecutada con un string'.

//     - Si recibe un string vacío debe devolver 'Debo ser ejecutada
// con un string no vacío'

// function ultimoCaracter(string) {
//   if (typeof string != "string") {
//     return console.log("Debo ser ejecutada con un string");
//   } else if (string == "") {
//     return console.log("Debo ser ejecutada con un string no vacío");
//   }
//   return console.log(string.slice(-1));
// }

// ultimoCaracter("Honda");

// ----------------------------------------------------------

// Crea la función cuentaCaracteres debe recibir un tipo string y
// devolver un number con el número de carácteres.

//     - Si la función no recibe un dato tipo string debe devolver
//     el string 'Debo ser ejecutada con un string'

// function cuentaCaracteres(string) {
//   if (typeof string != "string") {
//     console.log("Debo ser ejecutada con un string");
//   }
//   return console.log(string.lengt);
// }

// cuentaCaracteres("Fede");

// ----------------------------------------------------------

// Un palíndromo es una palabra que se escribe igual del derecho que
// del revés por ejemplo orejero, rallar o somos.
// Crea la función esPalindromo que recibirá una cadena de texto y
// deberá devolver si es un palíndromo o no.

//     - Si la función no recibe una cadena de texto o está vacía
//     'no es un formato correcto'

// function esPalindromo(string) {
//   if (typeof string != "string" || string == "") {
//     return console.log("no es un formato correcto");
//   }

//   const stringReversed = string.split("").reverse().join("");

//   return stringReversed === string
//     ? console.log("Es un palíndromo")
//     : console.log("No es un palíndromo");
// }

// esPalindromo("somos");

// ----------------------------------------------------------

// Crea la función getPrecioMostrar para que devuelva una cadena de texto
// con formato precio con dos decimales. Para 2 debería devolver 2.00 €.

//     - Si la función no recibe un número debería devolver devolver
//     'no es un formato correcto'

// function getPrecioMostrar(number) {
//   if (typeof number != "number") {
//     return console.log("No es un formato correcto");
//   }
//   return console.log(`${number.toFixed(2)} €`);
// }

// getPrecioMostrar(2);

// ----------------------------------------------------------

// Crea la función division que acepte como argumento dos números y
// devuelva el resultado de su división.

// function division(num1, num2) {
//   return console.log(num1 / num2);
// }

// division(10, 2);

// ----------------------------------------------------------

// Crea una función que dada una array de números, devuelve una nueva array
// que tenga solo los números que son 5 o más.
// Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

// let newArray = [];

// const array = [3, 6, 8, 2, 10, 1, 25];

// function mayor5(array) {
//   for (const num of array) {
//     if (num >= 5) {
//       newArray.push(num);
//     }
//   }
//   console.log(newArray);
// }

// mayor5(array);

// ----------------------------------------------------------

// Crea una aplicación que nos pida un número por prompt y con un método
// se lo pasamos por parámetro para que nos indique si es o no un número primo,
// debe devolver true si es primo sino false.

//     - Un número primo es aquel que solo puede dividirse entre 1 y sí mismo.
//     Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo,
//     17 si es primo.

// let numero = prompt("Introduce un numero");

// function esPrimo(numero) {
//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) {
//       return console.log("No es un número primo");
//     }
//   }
//   return console.log("Es un número primo");
// }

// esPrimo(numero);
