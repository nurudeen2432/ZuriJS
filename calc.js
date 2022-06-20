// Program for simple calculator

// taking the input 
const operator = prompt('Enter any ofthe following(+,-, * , /):');

// taking the operand input
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter your second number: '));

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}

else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

//result display
console.log(`${num1} ${operator} ${num2} = ${result}`);