/************* SOLUTION 1 for first three test **************/
/*function add(string) {
    const arrayOfStrings = string.split(',');
    if(arrayOfStrings.length === 1) {
        return string;
    }
    else {
        const sum = Number(arrayOfStrings[0]) + Number(arrayOfStrings[1]);
        return sum.toString();
    }
}
module.exports = {
    add
}*/

/************* SOLUTION 2 for first three test **************/
/*
module.exports = {
    add: (numericString) => {
        if(numericString === '') {
            return numericString;
        } else {
            const arrayOfNumberStrings = numericString.split(','); // "1".split(',') ==> ["1"]
            if(arrayOfNumberStrings.length === 1) {
                return arrayOfNumberStrings[0];
            }
            else {
                const firstNumber = Number(arrayOfNumberStrings[0]);
                const secondNumber= Number(arrayOfNumberStrings[1]);
                const sum = firstNumber + secondNumber;
                return sum.toString();
            }
        }
    }
}
*/
/************* SOLUTION 3 for first three test **************/
/*
function add(string) {
    const arrayOfStrings = string.split(',');
    if(arrayOfStrings.length === 1) {
        return string;
    }
    else {
        const arrayOfNumbers = [];
        for(let i = 0; i < arrayOfStrings.length; i++) {
            arrayOfNumbers.push(parseInt(arrayOfStrings[i]));
        }
        const sum = arrayOfNumbers[0] + arrayOfNumbers[1];
        return sum.toString();
    }
}
module.exports = {
    add: add
}
*/
/************* SOLUTION 4 for the tests **************/
/*
function add(string) {
    const arrayOfStrings = string.split(',');
    if(arrayOfStrings.length === 1) {
        return string;
    }
    else {
        // Creating a new array of numbers by parsing the numeric strings as integars
        const arrayOfNumbers = [];
        for(let i = 0; i < arrayOfStrings.length; i++) {
            arrayOfNumbers.push(parseInt(arrayOfStrings[i]));    
        }
        // Add the items in numbers the array together by using the reduce() method
        const sum = arrayOfNumbers.reduce(function(a, b){
            return a + b;
        }, 0);
        return sum.toString();
    }
}
module.exports = {
    add: add
}
*/

/************* SOLUTION 5 for the tests **************/
/*
function add(string) {
    const arrayOfStrings = string.split(',');
    if(arrayOfStrings.length === 1) {
        return string;
    }
    else {
        // Using a for loop to convert the numeric strings to numbers and adding the numbers together
        let sum = 0;
        for(let i = 0; i < arrayOfStrings.length; i++) {
            sum = sum + Number(arrayOfStrings[i]);
        }
        // Converting the number result of sum to a string
        return sum.toString();
    }
}
module.exports = {
    add: add
}
*/
/************* SOLUTION 6 for the tests **************/
function add(string) {
    const arrayOfStrings = string.split(',');
    if(arrayOfStrings.length === 1) {
        return string;
    }
    else {
        const sum = arrayOfStrings.reduce(function(a, b){
            return a + parseInt(b);
        }, 0);
        return sum.toString();
    }
}
module.exports = {
    add: add
}

/************* SOLUTION 7 for the tests - does not work atm **************/
/*
function add(string) {
    string === '' 
        ? string 
        : string
            .split(',')
            .map((numberString) => Number(numberString))
            .reduce((accumulator, number) => accumulator + number)
            .toString()
}

module.exports = {
    add: add
}
*/