#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
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
