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
module.exports = add