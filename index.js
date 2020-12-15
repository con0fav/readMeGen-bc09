const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./markdown');

// array of questions for user
const questions = [
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
        message: 'How do you install your application?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How do you test your file?',
        name: 'tests',
      },
      // list type creates list from an array for users to choose options from
      {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'Creative Commons family', 'Unlicense'],
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
  const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  fs.writeFile(filename, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
};

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function(data){
    writeToFile(fileName, data)
  })
}

// function call to initialize program
init();


// day 2 activity 14
// day 2 activity 20