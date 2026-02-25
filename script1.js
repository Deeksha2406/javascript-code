// Function Declaration - can be called before definition (hoisting)
function functionDeclaration() {
    document.getElementById('output').innerHTML = "Function Declaration: Hello from a declared function!";
}

// Function Expression - function stored in a variable
const functionExpression = function() {
    document.getElementById('output').innerHTML = "Function Expression: Hello from a function expression!";
};

// Arrow Function - concise syntax
const arrowFunction = () => {
    document.getElementById('output').innerHTML = "Arrow Function: Hello from an arrow function!";
};

// Parameters Demo - function with parameters
function parametersDemo(name = "Guest", age = 25) {
    document.getElementById('output').innerHTML = `Parameters Demo: Name: ${name}, Age: ${age}`;
}

// Callback Demo - function that uses a callback
function callbackDemo() {
    function processUser(callback) {
        const message = callback("John");
        document.getElementById('output').innerHTML = `Callback Demo: ${message}`;
    }
    
    processUser(function(name) {
        return `Hello ${name}, this is a callback!`;
    });
}