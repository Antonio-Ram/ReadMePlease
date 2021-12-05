// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "what",
        message: "What is your app about?"
    },
    {
        type: "input",
        name: "why",
        message: "What problem does this solve?"
    },
    {
        type: "input",
        name: "how",
        message: "what tools does your app use?"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)

    // TODO: Create a function to write README file
    //function writeToFile(fileName, data) {}
    fs.writeFile("README.md", JSON.stringify(answers, null, '\t'), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success!");
        }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});



// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
