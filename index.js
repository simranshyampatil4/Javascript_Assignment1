function additionVariadic(...numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        if(typeof numbers[i] != "number"){
            return ["Invalid input!"];
        }
        sum += numbers[i];
    }
    return [sum];
}
// const sum = additionVariadic(10, 5, 2); 
// console.log("Addition Result:", ...sum);

function subtractionVariadic(...numbers) {
    let subResult = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] != "number") {
            return ["Invalid input!"];
        }
        subResult -= numbers[i];
    }
    return [subResult];
}
// const subResult = subtractionVariadic(10, 5, 2);
// console.log("Subtraction Result:", ...subResult);

function multiplicationVariadic(...numbers) {
    let mulResult = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] != "number") {
            return ["Invalid input!"];
        }
        mulResult *= numbers[i];
    }
    return [mulResult];
}
// const mulResult = multiplicationVariadic(3, 4, 2); 
// console.log("Multiplication Result:", ...mulResult);

function divisionVariadic(...numbers) {
    let divResult = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (typeof numbers[i] != "number" || numbers[i] == 0) {
            return ["Invalid input!"];
        }
        divResult /= numbers[i];
    }
    return [divResult];
}
// const divResult = divisionVariadic(10, 2, 2);
// console.log("Division Result:", ...divResult);

function factorialVariadic(...numbers) {
    const num = numbers[0];
    
    if (typeof num !== "number" || num < 0) {
        return ["Invalid input!"];
    }

    if (num === 0 || num === 1) {
        return [1];
    }

    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return [result];
}
// const factorialResult = factorialVariadic(5);
// console.log("Factorial Result:", ...factorialResult);

function sumOfNumbersVariadic(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number") {
            return ["Invalid input!"];
        }
        sum += numbers[i];
    }
    return [sum];
}

// const sumResult = sumOfNumbersVariadic(2, 4, 6, 8);
// console.log("Sum Result:", ...sumResult);


function ceilVariadic(...numbers) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] == "number") {
            results[i] = Math.ceil(numbers[i]);
        } else {
            results[i] = "Invalid input!";
        }
    }
    return results;
}

// const ceilResults = ceilVariadic(2.5, 3.7, 5.2);
// console.log("Ceil Results:", ...ceilResults);

function floorVariadic(...numbers) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] == "number") {
            results[i] = Math.floor(numbers[i]);
        } else {
            results[i] = "Invalid input!";
        }
    }
    return results;
}
// const floorResults = floorVariadic(2.5, 3.7, 5.2);
// console.log("Floor Results:", ...floorResults);

const calculator = (operation,...numbers) =>{
        switch (operation) {
            case "addition":
                return additionVariadic(...numbers);
            case "subtraction":
                return subtractionVariadic(...numbers);
            case "multiplication":
                return multiplicationVariadic(...numbers);
            case "division":
                return divisionVariadic(...numbers);
            case "factorial":
                return factorialVariadic(...numbers);
            case "sum":
                return sumOfNumbersVariadic(...numbers);
            case "ceil":
                return ceilVariadic(...numbers);
            case "floor":
                return floorVariadic(...numbers);
            default:
                return ["Invalid operation!"];
        }
}
const add = calculator('addition',10, 5, 2); 
console.log("Addition Result:",...add);

const subResult = calculator('subtraction',10, 5, 2);
console.log("Subtraction Result:", ...subResult);

const mulResult = calculator('multiplication',3, 4, 2); 
console.log("Multiplication Result:", ...mulResult);

const divResult = calculator('division',10, 2, 2);
console.log("Division Result:", ...divResult);

const factorialResult = calculator('factorial',5);
console.log("Factorial Result:", ...factorialResult);

const sumResult = calculator('sum',2, 4, 6, 8);
console.log("Sum Result:", ...sumResult);

const ceilResults = calculator('ceil',2.5, 3.7, 5.2);
console.log("Ceil Results:", ...ceilResults);

const floorResults = calculator('floor',2.5, 3.7, 5.2);
console.log("Floor Results:", ...floorResults);