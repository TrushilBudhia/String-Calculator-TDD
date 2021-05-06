const stringCalculator = require('./string-calculator.js');
describe(`string-calculator`, () => {

    it(`return an empty string if an empty string is given)`, () => {
        const result = stringCalculator.add('');
        expect(result).toEqual('');
    });

    it(`return the string value 1 when the string 1 is given`, ()=> {
        const result = stringCalculator.add('1');
        expect(result).toEqual('1');
    });

    it(`returns '3' when it receives '1,2'`, ()=> {
        const result = stringCalculator.add('1,2');
        expect(result).toEqual('3');
    });

    describe(`Can add an arbitrary number of numbers`, () => {
        it(`returns '6' when it receives '1,2,3'`, ()=> {
            const result = stringCalculator.add('1,2,3');
            expect(result).toEqual('6');
        });
        it(`returns '55' when it receives '1,2,3,4,5,6,7,8,9,10'`, ()=> {
            const result = stringCalculator.add('1,2,3,4,5,6,7,8,9,10');
            expect(result).toEqual('55');
        });
    });

    describe(`Can add negative numbers`, () => {
        it(`returns '-3' when it receives '-1,-2'`, ()=> {
            const result = stringCalculator.add('-1,-2');
            expect(result).toEqual('-3');
        });
        it(`returns '5' when it receives '-1,2,-3,4,-5,6,-7,8,-9,10'`, ()=> {
            const result = stringCalculator.add('-1,2,-3,4,-5,6,-7,8,-9,10');
            expect(result).toEqual('5');
        });
    })

});