const inquirer = require('inquirer');
const fs = require('fs');
const gen = require('./utils/generateMarkdown');

function readMeFunction () {
  inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your title?"
  },
  {
      type: "input",
      name: "description",
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
    fs.writeFile("README.MD", gen(answers), (err) => {
      if(err) {
          console.log(err);
      }else {
          console.log("success!");
      }
    })
  })
}

function init() {
  readMeFunction()
}

init(inquirer.promptQuestions);

