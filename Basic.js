//strings es todo aquel que va en comillas
 var vat = "capitan";
var saludo = "hola como estas";
// //Numbers
 var num = 13;
 console.log(num);
 var numero = "13"; //string
 console.log(numero);
//Booleanos
var a = "true"; // string
console.log(a);
var b = true; // booleano
console.log(b);
var age = 2;
console.log(age);
//Operadores Matematicos
var x = 1;
var y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); //Modulo nos devuelve el resto de la division de dos numeros EJEMPLO 21/5 = 4,2 (El modil es el 2)
//Asociatividad
var x = 10;
var y = 5;
var w = 1;
console.log(x + y * w);
console.log(x + (y * w));
function miFuncion(x, y){
  //Dentro de las dos llaves escribimos el codigo
  console.log(x + y)
}
miFuncion(5, 6);
miFuncion(3, 9);
//Otra miFuncion
function hola(Nombre){
  console.log("hola" + " " + Nombre)
}
hola("Sergio")
//Otro Ejemplo
function despedida(otroNombre){
  console.log("Hasta Luego" + " " + otroNombre)
}
despedida("Sergio Andres");
//Otra Funcion
function edad(años){
  console.log("tienes" + " " + años + " " + "Años de vida")
}
edad(31);
//otra funcion
function vida(sentimiento){
  console.log("tu vida es" + " " + sentimiento)
}
vida("alegria");
//Otra forma de escribir la funcion
function MiFuncion(x, y){
   console.log(x + y)
}
MiFuncion(2, 5);
 //En ves de usar console.log podemos unsar return para constate
const OtraFuncion = function(x, y){
 return x + y
};
console.log(OtraFuncion(5, 5));
//otro ejemplo con return y const
const caminos =  function(x, r){
  console.log("¿Cuantos caminos conducen a ROMA? ")
  return x * r
} 
console.log(caminos(9, 90))
//otro ejemplo con return y const
const vacas = function(d, g, t){
  console.log("¿cuantas vacas hay en 3 haciendas?")
  return d + g +t  
}
console.log(vacas(1000, 700, 5000))
//otro ejemplo con return y const
const planetas = function (j,g){
  console.log("¿Cuantos mundos tiene el universo?")
  return j * g 
}
console.log(planetas(283638, 672292))
//Otro ejemplo de return con const
const MinutosySegundos = function(t, x){
  console.log("son las:  ")
  return t * x
}
console.log(MinutosySegundos(2, 8))
//Otro ejemplo con funcion
function hola (sergio){
  console.log("Como estas" + " " + sergio)
}
hola("sergio")
//Otro ejemplo de return con const
const edad = function(m, n){
  console.log("mi edad son ")
  return m + n
}
console.log(edad(15, 16)) 
const mifunction = function(y, x){
  console.log("la suma es ")
  return y + x
}
console.log(mifuncion(7, 7));
//Otro con texto
function mifuncion(nombre){
  console.log("Buenas tardes " + nombre )
}
mifuncion("Andres");
const mifuncionsita = function(y, x, u, t){
  console.log("la suma es de todo es")
  return y * x /u +t
}
console.log(mifuncionsita(7, 7, 2, 9));
const otrafun = function(d, j){
  console.log("estoy dentro de la funcion");
  console.log("Sumandose y concatenadose");
  return d + j
}
console.log(otrafun(8, 9));
//Otra funcion con const

const otrafuncion = function(saludo){
  console.log("Buenas tardes")
  return saludo
}
console.log(otrafuncion("Hi How Are You"))
//Otra forma de escribir codigo
function sumar(x, m){
  var resultado = x + m;
  return resultado
}
console.log(sumar(2, 5))
//Otra forma de escribir codigo
//Funcion saludo
function saluda(nombre){
  console.log("hola " + nombre);
}
saluda("sergio")
//Otro con numero
function suma(a, b){
  console.log(a + b)
}
suma(3, 5)
//Funcion nombre y apellido
function nombreApellido(nombre, apellido){
  console.log(nombre + " " + apellido);
}
nombreApellido("sergio", "Valenzuela")
//Otro repaso con letras
function paisYciudad(pais, ciudad){
  console.log(pais + " " + ciudad)
}
paisYciudad("Colombia", "Bogota")
paisYciudad("Estados Unidos", "Miami")
paisYciudad("Inglaterra", "Liverpool")
//Otro ejemplo console log
function frutaYverdura(fruta, verdura){
  console.log(fruta + " " + verdura)
}
frutaYverdura("Manzana", "Espinaca")
//Otro Return
function misNumeros(s, g){
  console.log("Esta es una respuesta de la multiplicacion ")
  return s * g
}
console.log(misNumeros(4, 5))
//Utilizando una variable
function quehay(nombre){
  console.log( "hola, " + nombre);
}
var myName = "Jeronimo";
quehay(myName)
//otro Ejemplo con Variable
function hola(nombreyapellidos){
  console.log("como estas, " + nombreyapellidos)
}
var NyA = "Juan Jose Valenzuela";
hola(NyA);


