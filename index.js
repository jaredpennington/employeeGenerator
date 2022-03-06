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
    name: "Office number?",
    message: "Manager's Office number?",
  },
];


inquirer.prompt(questions).then((answers) => {
  for (let i = 0; i <  answers ; i++) {
    if (answers.license === license[i]) answers.badges = badges[i];
  }

   writeToFile();
});

function writeToFile(fileName, data, extension) {
    fs.writeFile(`${fileName}.${extension}`, generateHTML(data), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }

