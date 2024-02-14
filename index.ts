import inquirer from 'inquirer';
import chalk from 'chalk';

type ansType ={
    userGuess : number
}

async function startGame() {
    let attempts = 3;
    const systemGeneratedNo = Math.floor(Math.random() * 10);

    while (attempts > 0) {
        const answer: ansType = await inquirer.prompt([
            {
                type: "number",
                name: "userGuess",
                message: `Please enter your guess number between 1 to 10 (${attempts} attempts left):`
            }
        ]);

        const { userGuess } = answer;

        if (userGuess === systemGeneratedNo) {
            console.log(chalk.green.bold("Congrats! You win"));
            console.log("User Guess:", chalk.blue.bold(userGuess), "System Generated No:", chalk.blue.bold(systemGeneratedNo));
            return; 
        } else {
            console.log(chalk.red.bold("Wrong guess! Try again"));

            console.log("User Guess:", chalk.blue.bold(userGuess), "System Generated No:", chalk.blue.bold(systemGeneratedNo));
            attempts--;
        }
    }

    console.log(chalk.red.bold("Out of attempts! Try next time:)"));
}

startGame();
