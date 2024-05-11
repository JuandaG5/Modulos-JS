// console.log("Hola mundo");

// let num1 = 10;
// let num2 = 20;
// let result = num1 + num2;

// console.log(`La suma entre ${num1} y ${num2} es ${result}`);


//Método Common JS
// const op = require("./operaciones");
// console.log(op.sumar(57,23));

// const {sumar, restar}=require("./operaciones");
// console.log(sumar(57,23));

//Método EcmaScrit
import { sumar, restar } from "./operaciones.mjs";

console.log(` La suma es ${sumar(57,23)} y la resta es ${restar(10,5)}`);  


