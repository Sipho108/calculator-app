// JavaScript functionality for the calculator

// Function to operate the calculator
function calculate(operator, num1, num2) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error('Division by zero');
            }
        default:
            throw new Error('Invalid operator');
    }
}

// Example usage:
// const result = calculate('+', 5, 3);
// console.log(result); // Outputs: 8
