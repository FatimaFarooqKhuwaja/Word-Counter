import inquirer from "inquirer";
let paragraph = await inquirer.prompt({
    message: "Enter your paragraph",
    name: "UserParagraph",
    type: "input"
});
let answer = paragraph.UserParagraph.trim().split(" ");
console.log(answer);
console.log(answer.length);
