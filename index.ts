#! /usr/bin/env/ node

import inquirer from "inquirer";

async function startfunc() {
  const sysNum = Math.floor(Math.random() * 10);
  const usrNum = await inquirer.prompt([
    {
      type: "number",
      name: "usrguess",
      message: "Enter a number between 1 and 10",
    },
  ]);
  const { usrguess } = usrNum;

  console.log(`Your Guess : ${usrguess}\nSystem Guess: ${sysNum}`);

  if (usrguess !== sysNum) {
    console.log("You Lose!");
  } else {
    console.log("You Win!");
  }
}

async function again() {
  do {
    await startfunc();
    var run_again = await inquirer.prompt({
      type: "input",
      name: "run_again",
      message: "Do you want to play again? (y/n)",
    });
  } while (
    run_again.run_again == "Y" ||
    run_again.run_again == "y" ||
    run_again.run_again == "yes" ||
    run_again.run_again == "YES"
  );
}

again();
