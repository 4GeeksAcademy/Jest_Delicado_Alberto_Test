// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Función para convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Primero convertimos de dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Luego convertimos de euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

// Función para convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    // Primero convertimos de yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Luego convertimos de euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exportamos las funciones
module.exports = { 
    sum, 
    fromEuroToDollar, 
    fromDollarToYen, 
    fromYenToPound 
};