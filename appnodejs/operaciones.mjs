function sumar(num1,num2){
    return num1+num2
}

function restar(num1,num2){
    return num1-num2
}

function multiplicar(num1,num2){
    return num1*num2
}

function dividir(num1,num2){
    return num1/num2
}

//Método Common JS --> No recomendado por EcmaScript
// module.exports={
//     sumar,
//     restar,
//     multiplicar,
//     dividir
// }

//Método EcmaScript --> Recomendado
export{
    sumar,restar,multiplicar,dividir
}