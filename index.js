const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const readmeQuestions = [
  // input type takes text input from user
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
      {
        type: 'input',
        message: 'How do you test your project?',
        name: 'tests',
      },
      // list type creates list from an array for users to choose options from
      {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
      },
      // append to a contact form headed "questions"
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


// day 2 activity 14
// day 2 activity 20