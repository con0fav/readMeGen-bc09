const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const readmeQuestions = [
      {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Table of contents',
        name: 'contents',
      },
      {
        type: 'input',
        message: 'How do you install this?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How do you use this?',
        name: 'usage',
      },
      // no idea what this section means yet
      {
        type: 'input',
        message: 'What are the tests? or How do you test this?',
        name: 'tests',
      },
      // make a list of options for license
      {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'Creative Commons family', 'Unlicense'],
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
