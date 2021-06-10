//Operadores de comparación
//< > <= >= === == !==
// Operadores logicos
console.log(1 < 2) //true
console.log(!!1) //true
console.log(!!function(){}) //true
console.log(!!2) //True
console.log(!!0) //False
console.log(!!null) //False
console.log(!!false) //False
console.log(!!true) //True
console.log(false && true) //false

// AND --> &&, 
// OR -->  , 
// NOT -->   !
/*
1E      2E      &&      ||
true   true    true    true
true   false   false   true
false  true    false   true       
false  false   false   false
*/ 
//Operadores Logicos
1 < 2;  // false
2 < 3; // true
3 > 2; //true
1 === 1; //true
1 === "1" //false
"perro" === "perro" //true
"gato" === "Gato" //false

//doble igual
1 == "1" //true
false == 0 // true
" " == 0 // true
if(1){
  console.log("1 es un valor truthy")
}else{
  console.log("1 no es un valor truthy")
}  //1 es un valor truthy

// =   Se usa para asignar valore a una variable (se usa para asignar valores)
// ==  Se usa para comparar dos elementos sin importar el tipo de datos que es (se usa para comparar valores)
// === a diferencia del doble igual el triple igual compara el continido y el tipo de dato que es (se usa para comparar valores)

//BUCLES FOR!!!
//Bucles sirven para poder repetir un mismo codigo varias veces de forma automatica
for(var i = 0; i < 10; i++){
  console.log(i);
}

//While a diferencia del for solo recibe por parentesis nuestra condicino de corte
function mostrarNumeros(numeroLimite) {
  var i = 1;
  while(i <= numeroLimite){
      console.log(i);
      i++;
  };
 console.log("se termino el bucle");
};
mostrarNumeros(39);
//Otro ejemplo de While

function mostrarNumeros(numeroLimite) {
  var i = 1;
  var seguir = true;
  while(seguir){
      console.log(i);
      i++;
      if(i === 11){
          seguir = false;
      }
  };
 console.log("se termino el bucle");
};
mostrarNumeros(39);
//UN BONITO KACHIVACHE
function mostrarNumeros(numeroLimite) {
  for(var i = numeroLimite; i >= 1; i--){
      for(var j = 0; j < numeroLimite; j++){
          for(var g = 1; g <= numeroLimite; g++){
              for(var h = 2; h > numeroLimite; h--){
                  console.log(i * j + g -h);
              }
          }
      }
  }
  var i = 1;
  var seguir = true;
  while(seguir){
      console.log(i);
      i++;
      if(i === 11){
          seguir = false;
      }
  };
 console.log("se termino el bucle");
};
mostrarNumeros(39);