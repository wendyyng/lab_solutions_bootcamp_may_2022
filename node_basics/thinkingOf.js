const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">"
})

const randomNum = Math.floor(Math.random() * 10 + 1);
let count = 1;

console.log("I'm thinking of a number between 1 and 10");
rl.prompt();

rl.on("line", (line) => {
    if (line != randomNum) {
        count++;
        console.log("Nope. Try again.");
        rl.prompt();
    } else {
        console.log(`Guessed "${randomNum}" correctly in ${count} attempts!`);
        rl.close();
    }
})


// const ask = () => {
//     rl.question("I'm thinking of a number between 1 and 10\n", (answer) => {
//         if (answer != randomNum) {
//             count++;
//             console.log("Nope. Try again.");
//             ask();
//         } else {
//             console.log(`Guessed "${randomNum}" correctly in ${count} attempts!`);
//             rl.close();
//         }
//     })
// }

// ask();