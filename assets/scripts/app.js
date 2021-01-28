const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor.js file
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    }; // testing objects

    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserInput();
    if (
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber // this means if NOT enteredNumber..
        // i.e. if enteredNumber = 0/false
    ) {
        return;
    }
    // This is ONE WAY of ensuring that the code
    //will only run if all of these conditions
    //are met! Another way is below!

    // if (
    //     calculationType === 'ADD' ||
    //     calculationType === 'SUBTRACT' ||
    //     calculationType === 'MULTIPLY' ||
    //     calculationType === 'DIVIDE'
    // ) {
        // if using the first method of doing this
        // then this code would not need to be inside
        // curly braces

        const initialResult = currentResult;
        let mathOperator;

        if (calculationType === 'ADD') {
            currentResult += enteredNumber;
            mathOperator = '+';
        } else if (calculationType === 'SUBTRACT') {
            currentResult -= enteredNumber;
            mathOperator = '-';
        } else if (calculationType === 'MULTIPLY') {
            currentResult *= enteredNumber;
            mathOperator = '*';
        } else if (calculationType === 'DIVIDE') {
            currentResult /= enteredNumber;
            mathOperator = '/';
        }

        createAndWriteOutput(mathOperator, initialResult, enteredNumber);
        writeToLog(
            calculationType,
            initialResult,
            enteredNumber,
            currentResult
        );
    // }
    // this was removed as it is a part of the
    // 2nd example of how to achieve this!
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
