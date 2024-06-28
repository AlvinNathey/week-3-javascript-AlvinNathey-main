
// Declaring variables
let name = "Alvin Nathey";        
let age = 20;             
let isStudent = true;    

// Define functions for simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Call functions and log output
console.log("Variables:");
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student?", isStudent);

console.log("\nOperations:");
let resultAdd = add(5, 3);
console.log("5 + 3 =", resultAdd);

let resultSubtract = subtract(10, 4);
console.log("10 - 4 =", resultSubtract);

let resultDivide = divide(15, 3);
console.log("15 / 3 =", resultDivide);

let resultMultiply = multiply(7, 2);
console.log("7 * 2 =", resultMultiply);

// Get references to DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const resultDiv = document.getElementById('result');

// Event listeners for buttons
addBtn.addEventListener('click', function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let result = num1 + num2;
    resultDiv.textContent = `Result: ${result}`;
});

subtractBtn.addEventListener('click', function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let result = num1 - num2;
    resultDiv.textContent = `Result: ${result}`;
});

multiplyBtn.addEventListener('click', function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let result = num1 * num2;
    resultDiv.textContent = `Result: ${result}`;
});

divideBtn.addEventListener('click', function() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    if (num2 === 0) {
        resultDiv.textContent = "Error: Division by zero";
    } else {
        let result = num1 / num2;
        resultDiv.textContent = `Result: ${result}`;
    }
});

// Chart rendering using CanvasJS
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Daily High Temperature at Different Beaches"
        },
        axisX: {
            valueFormatString: "DD MMM,YY"
        },
        axisY: {
            title: "Temperature (in °C)",
            suffix: " °C"
        },
        legend:{
            cursor: "pointer",
            fontSize: 16,
            itemclick: toggleDataSeries
        },
        toolTip:{
            shared: true
        },
        data: [{
            name: "Myrtle Beach",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 31 },
                { x: new Date(2017,6,25), y: 31 },
                { x: new Date(2017,6,26), y: 29 },
                { x: new Date(2017,6,27), y: 29 },
                { x: new Date(2017,6,28), y: 31 },
                { x: new Date(2017,6,29), y: 30 },
                { x: new Date(2017,6,30), y: 29 }
            ]
        },
        {
            name: "Martha Vineyard",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 20 },
                { x: new Date(2017,6,25), y: 20 },
                { x: new Date(2017,6,26), y: 25 },
                { x: new Date(2017,6,27), y: 25 },
                { x: new Date(2017,6,28), y: 25 },
                { x: new Date(2017,6,29), y: 25 },
                { x: new Date(2017,6,30), y: 25 }
            ]
        },
        {
            name: "Nantucket",
            type: "spline",
            yValueFormatString: "#0.## °C",
            showInLegend: true,
            dataPoints: [
                { x: new Date(2017,6,24), y: 22 },
                { x: new Date(2017,6,25), y: 19 },
                { x: new Date(2017,6,26), y: 23 },
                { x: new Date(2017,6,27), y: 24 },
                { x: new Date(2017,6,28), y: 24 },
                { x: new Date(2017,6,29), y: 23 },
                { x: new Date(2017,6,30), y: 23 }
            ]
        }]
    });
    chart.render();

    function toggleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else{
            e.dataSeries.visible = true;
        }
        chart.render();
    }
};