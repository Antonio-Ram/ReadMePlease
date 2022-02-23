// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
//const questions = [];
function readMeFunction () {
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
      name: "desciption",
      message: "Desribe your project"
  },
  {
      type: "input",
      name: "installation",
      message: "How do we install your project?"
  },
  {
      type: "input",
      name: "usage",
      message: "What information is needed to use your project?"
  },
  {
      type: 'input',
      name: "contribution",
      message: "How can other developers contribut to your project?"
  },
  {
      type: "input",
      name: "test",
      message: "How do we test your project?"
  },
  {
      type: "input",
      name: 'question',
      message: 'What is your github username?'
  },
  {
      type: 'input',
      name: "questions",
      message: 'What is your email?'
  }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    fs.writeFile("README.MD", JSON.stringify(answers, null, '\t'), (err) => {
      if(err) {
          console.log(err);
      }else {
          console.log("success!");
      }
  })
  })
  
 /* .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});*/
}
// TODO: Create a function to write README file
/*function writeToFile(fileName, data) {
  fs.writeFile("README.MD", json.stringify(answers, null, '\t'), (err) => {
      if(err) {
          console.log(err);
      }else {
          console.log("success!");
      }
  })
  .catch((error) => {
      if(error.isTtyError) {
          
      }else{

      }
  })
}*/

// TODO: Create a function to initialize app
function init() {
  readMeFunction()
  /*.then((answers) => {
      fs.writeFile(path.join(process.cwd(), "README.md"), answers)
  })*/
}

// Function call to initialize app
init(inquirer.promptQuestions);

