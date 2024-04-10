// Importar la función sum del archivo app.js
const { sum } = require('./app.js');
const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('test 2', () => {
    // hacemos otro test
    let total = sum(-10, 5);
    expect(total).toBe(-5);
});

test("One euro should be 1.07 dollars", () => {
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * oneEuroIs("USD");
    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146,26 Yen", () => {
    const yen = fromDollarToYen(3.5);
    const expected = 3.5/oneEuroIs("USD") * oneEuroIs("JPY");
    // Hago mi comparación (la prueba)
    expect(yen).toBe(expected); 
})

test("One yen should be 0,005 Pound", () => {
    const pound = fromYenToPound(1000);
    const expected = 1000/oneEuroIs("JPY") * oneEuroIs("GBP");
    // Hago mi comparación (la prueba)
    expect(pound).toBe(expected); 
}) 