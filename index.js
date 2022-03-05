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




function writeToFile(fileName, data, extension) {
    fs.writeFile(`${fileName}.${extension}`, generateHTML(data), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  }