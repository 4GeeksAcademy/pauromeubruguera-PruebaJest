
// One euro is:
const oneEuroIs = (divisa) => {
    let returnDivisa
    if(divisa == "JPY") returnDivisa = 156.5;
    if(divisa == "USD") returnDivisa = 1.07;
    if(divisa == "GBP") returnDivisa = 0.87;
    return returnDivisa
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = (valueInEuro) => {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs("USD");
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar)  => {
    let valueInYen = valueInDollar/ oneEuroIs("USD") * oneEuroIs("JPY");
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen/oneEuroIs("JPY") * oneEuroIs("GBP");
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs}
