#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Contratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
