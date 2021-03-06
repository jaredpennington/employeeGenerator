// when the application is started 
// you enter team managers name, employee id, email, and office number

//once you enter that information 
// you are prompted with a menu with the option to add other employees or to finish 

//when selecting certain classes of employee
// then you enter the name, id, email and unique information

//

var inquirer = require("inquirer");
var fs = require("fs");
var generateHTML = require("./src/generateHTML.js");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
var teamArray = [];


inquirer.prompt 


const questions = [
  
  {
    type: "input",
    name: "Name",
    message: "What is the team Manager's name?",
  },
  {
    type: "input",
    name: "Id",
    message: "Manager Id number?",
  },
  {
    type: "input",
    name: "Email",
    message: "Manager email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Manager's Office number?",
  },
];

function start() {
  function managerQs() {
    inquirer.prompt(questions)
    .then(res => {
      //First we define new employee and passs arguments for each class data
      
      const manager = new Manager(res.Name, res.Id, res.Email, res.officeNumber)
      // push the new employee into team array in order to pass it to generateHtml function
      teamArray.push(manager);
      // Call cycle question to loop over the amount of interns and engineers the user would like to create until they select DONE option

      nextMember();
    })
  }

  function nextMember() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What team member would you like to make next?',
        choices: ['Engineer', 'Intern', 'Done']
      }
    ])
    .then(res => {
      switch(res.choice) {
        case 'Engineer':
          engineerQs();
          break;
        case 'Intern':
          internQs();
          break;
        default:
          writeToFile();
          break;
      }
    })
  }

  function engineerQs() {
    inquirer.prompt([
      {
        type: "input",
        name: "Name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "Id",
        message: "Engineer Id number?",
      },
      {
        type: "input",
        name: "Email",
        message: "Engineer email?",
      },
      {
        type: "input",
        name: "Github",
        message: "Engineer Github?",
      },
    ])
    .then(res => {
      // push to team array
      const engineer = new Engineer(res.Name, res.Id, res.Email, res.Github)
      // push the new employee into team array in order to pass it to generateHtml function
      teamArray.push(engineer);
      nextMember();
    })

  }

  function internQs() {
    inquirer.prompt([
      {
        type: "input",
        name: "Name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "Id",
        message: "Intern Id number?",
      },
      {
        type: "input",
        name: "Email",
        message: "Intern email?",
      },
      {
        type: "input",
        name: "School",
        message: "Intern school?",
      },
    ])
    .then(res => {
      // push to team array
      const intern = new Intern(res.Name, res.Id, res.Email, res.School)
      // push the new employee into team array in order to pass it to generateHtml function
      teamArray.push(intern);
      nextMember();
    })
  }

  managerQs();
}
start();

// inquirer.prompt(questions).then((answers) => {
//   for (let i = 0; i <  answers ; i++) {
//     if (answers.license === license[i]) answers.badges = badges[i];
//   }

//    writeToFile();
// });

function writeToFile() {
    fs.writeFile('index.html', generateHTML(teamArray), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }

