const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

//The expect.any() method takes a constructor as an argument. Here, we're expecting that the value property is created with a
//Number() constructor. In this instance, we allow the value to be any number, rather than a number in a range so that the test
//has more flexibility. This general test allows us to avoid testing the random number generator hundreds of times to make sure that it works.

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});