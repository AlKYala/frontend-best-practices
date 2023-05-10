//Tests sind immer im Unterordner __tests__
/*
Starten mit npm t 

*/

//jede datei beschreibt eine Test suite. 

//sei eine Einfache Funktion:

function divide(a: number, b: number) {
    if(b === 0) {
        throw new Error("Dont divide by 0");
    }
    return a / b;
}

/*
WIR TESTEN SO:

Wir schreiben einen test. 
Dieser hat einen Namen als 1ster param
2ter param ist eine Funktion. Best Practice hier: als Anonyme Funktion

Expect nimmt einen zu pruefenden Ausdruck
daraufhin hat man matcher, die starten meist mit to ....
*/

test('AssertEquals', () => {
    expect(divide(10, 2)).toBe(5);
});

test('AssertThrows', () => {
    expect(() => {divide(10, 0)}).toThrow(); //anonyme function, da ausfuehrung im augenmerk steht
    expect(() => divide(10, 0)).toThrow(/divide by 0/); //matcher: string soll zero containen
});

test('Does not throw', () => {
    expect(() => divide(10, 2)).not.toThrow();
});

test('Greater/Smaller than', () => {
    expect(divide(10, 2)).toBeGreaterThan(4);
    expect(divide(10, 2)).toBeLessThan(6);
});

test('add returns a value that is not NaN', () => {
    expect(divide(10, 2)).not.toBeNaN();
});

test('RegexMatching', () => {
    expect(divide(10, 2).toString()).toMatch(/[0-9]+/);
    expect(divide(10, 2).toString()).not.toMatch(/[a-z]+/);
})

test('HasProperty', () => {
    const myObject = {foo: divide(10, 2)}; 
    expect(myObject).toHaveProperty('foo');
})

test('Compare Objects', () => {
    const myObject = {foo: divide(10, 2), foo2: divide(20, 2)};
    const compareWith = {foo: 5, foo2: 10};
    expect(myObject).toStrictEqual(compareWith);
})

//desribe zur Gruppierung von Tests 

describe('Gruppe von Tests die die Beschaffenheit von Objekten prueft', () => {

    test('HasProperty', () => {
        const myObject = {foo: divide(10, 2)}; 
        expect(myObject).toHaveProperty('foo');
    })
    
    test('Compare Objects', () => {
        const myObject = {foo: divide(10, 2), foo2: divide(20, 2)};
        const compareWith = {foo: 5, foo2: 10};
        expect(myObject).toStrictEqual(compareWith);
    })


});