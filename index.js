// require Inquirer module
const inquirer = require('inquirer');
// require fs (file system) module
const fs = require('fs');
// require markdown.js, which creates the behavior for writing markdown in the readme file that gets generated
const generateMarkdown = require('./utils/generateMarkdown');
// makes sure the filename is README.md
const fileName = "READMEgenerated.md";

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
  // uses markdown.js file to create markdown
  const markdown = generateMarkdown(data);
  // fs method to write the file, includes if/else for throwing an error message in case of an error
  fs.writeFile(fileName, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
};

// function to initialize program
function init() {
  // inquirer node module
  inquirer.prompt(questions).then(function(data){
    writeToFile(fileName, data)
  })
}

// function call to initialize program
init();


// day 2 activity 14
// day 2 activity 20