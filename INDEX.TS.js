"use strict";
/*
import inquirer from "inquirer";

const answer = await inquirer.prompt([
{ message: "kinly enter first number", type: "number", name: "firstNumber" },
{ message: "kindly enter second number", type: "number", name: "secondNumber"},
{ message: "select one of the operator to perform operation",
type: "list",
name: "operator",
choices: ["addition", "subtraction", "multiplication", "division"],
},
]);

// conditional statements
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
    
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {

    console.log(answer.firstNumber / answer.secondNumber);
} else {
    console.log("please enter a valid number")
}
*/
/*
import inquirer from "inquirer";
 const answer = await inquirer.prompt([
    {message: "kindly enter first number", type: "number", name: "firstName"},
    {message: "kindly enter second number", type: "number", name: "secondName"},
    {message: "kindly select one operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"]
 },
]);

// conditional statement
if (answer.operator === "addition") {
  console.log(answer.firstName + answer.secondName);
} else if (answer.operator === "subtraction") {
    console.log(answer.firstName - answer.secondName);
} else if(answer.operator === "multiplication") {
    console.log(answer.firstName * answer.secondName);
} else if(answer.operator === "division") {
    console.log(answer.firstName / answer.secondName);
} else {
    console.log("please enter valid number");
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "kindly enter first number", type: "number", name: "firstName" },
    { message: "kindy enter second number", type: "number", name: "secondName" },
    { message: "kindly select one operator for perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
// conditional statements
if (answer.operator === "addition") {
    console.log(answer.firstName + answer.secondName);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstName - answer.secondName);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstName * answer.secondName);
}
else if (answer.operator === "division") {
    console.log(answer.firstName / answer.secondName);
}
else {
    console.log("please enter valid number");
}
