function clearOutput() {
    document.getElementById("output").innerHTML = "";
}

function printOutput(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

// For Loop
function forLoopDemo() {
    clearOutput();
    printOutput("FOR LOOP:");
    for (let i = 1; i <= 5; i++) {
        printOutput(i);
    }
}

// While Loop
function whileLoopDemo() {
    clearOutput();
    printOutput("WHILE LOOP:");
    let i = 1;
    while (i <= 5) {
        printOutput(i);
        i++;
    }
}

// Do While Loop
function doWhileDemo() {
    clearOutput();
    printOutput("DO WHILE LOOP:");
    let i = 1;
    do {
        printOutput(i);
        i++;
    } while (i <= 5);
}

// For...of
function forOfDemo() {
    clearOutput();
    printOutput("FOR...OF LOOP:");
    const numbers = [10, 20, 30];
    for (let value of numbers) {
        printOutput(value);
    }
}

// For...in
function forInDemo() {
    clearOutput();
    printOutput("FOR...IN LOOP:");
    const student = { name: "Ravi", age: 22 };
    for (let key in student) {
        printOutput(key + ": " + student[key]);
    }
}

// Break
function breakDemo() {
    clearOutput();
    printOutput("BREAK DEMO:");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        printOutput(i);
    }
}

// Continue
function continueDemo() {
    clearOutput();
    printOutput("CONTINUE DEMO:");
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        printOutput(i);
    }
}

// Nested Loop
function nestedLoopDemo() {
    clearOutput();
    printOutput("NESTED LOOP PATTERN:");
    for (let i = 1; i <= 3; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        printOutput(row);
    }
}