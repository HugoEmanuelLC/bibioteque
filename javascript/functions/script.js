
//JAVASCRIPT: CODIGO INTERPRETADO

//ORDENAMIENTO DE CODIGO: (prioridades)
//1. Importacion de modulos.
//2. Declaracion de variables
//3. Declaracion de funciones
//4. Ejecucion de codigo 








//----DECLARACION DE FUNCION-----------------------------------------

// function functionName() {
//     console.log("llamo la funcion")
// }
// functionName()
// function functionName&-(params) {
//     console.log(params)
// }
// functionName_2("llamo la funcion otra vez")
// function functionName_3(params = "valeur par default") {
//     console.log(params)
// }
// functionName_3()
// function testFnct() {
//     console.log("sera affiché") // sera affiché
//     console.log("sera affiché") // sera affiché
//     console.log("sera affiché") // sera affiché
//     return "test return";   // sera envoyé
//     console.log("ne sera pas affiché") // ne sera pas affiché
//     console.log("ne sera pas affiché") // ne sera pas affiché
//     console.log("ne sera pas affiché") // ne sera pas affiché
// }
// testFnct()
// console.log("----");
// console.log(testFnct());







//-----FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS--------------------
//FUNCIONES DECLARADAS :

// appellerAvantEtApres() // OK
// function appellerAvantEtApres() {
//     console.log('las functions declaradas pueden invocarse en cualquier parte de nuestro codigo , incluso antes de que sea declarada');
// }
// appellerAvantEtApres() // OK




//-----FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS--------------------
//FUNCIONES EXPRESADAS (funciones anonimas):

// funcionExpresada() // ReferenceError: Cannot access 'funcionExpresada' before initialization, at Object.<anonymous>
// const funcionExpresada = function(){
//     console.log("esto es una funcion expresada, una funcion que se le ha asignado como valor a una variable");
// }
// const funcionExpresada_2 = () => {}
// funcionExpresada() // ok