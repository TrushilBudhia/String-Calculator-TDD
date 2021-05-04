const add = require('./add.js');
describe(`string-calculator`, () => {

    it(`return an empty string if an empty string is given)`, () => {
        const result = add('');
        expect(result).toEqual('');
    })

    it(`return the string value 1 when the string 1 is given`, ()=> {
        const result = add('1');
        expect(result).toEqual('1');
    })

    it(`returns '3' when it receives '1,2'`, ()=> {
        const result = add('1,2');
        expect(result).toEqual('3');
    })

})