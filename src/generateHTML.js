const teamCards = team => {

  const generateManager = manager => {
    return `
<div class="card col-4" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">
    Title:
      ${manager.getRole()}
    </p>
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:${manager.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office number:${manager.getOfficeNumber()}</li>
  </ul>
 </div>
</div>
    `
  }

  const generateEngineer = engineer => {
    return `
<div class="card col-4" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">
    Title:
      ${engineer.getRole()}
    </p>
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:${engineer.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">Github:<a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
  </ul>
 </div>
</div>
    `
  }

  const generateIntern = intern => {
    return `
<div class="card col-4" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">
    Title:
      ${intern.getRole()}
    </p>
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Id:${intern.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
    <li class="list-group-item">School:${intern.getSchool()}</li>
  </ul>
 </div>
</div>
    `
  }

  const cards =[];

  cards.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
    .join('')
    );

  cards.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join('')
    );

  cards.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join('')
    );

    return cards.join('')
}

function generateHTML(team) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./dist/style.css"/>
    <title>Document</title>
  </head>
  <body>
    <header>
      <h1 class="text-center">My Team</h1>
    </header>
    <main class="container">
      <section class="row">
      ${teamCards(team)}
      </section>
    </main>
  </body>
</html>
    `
}

module.exports = generateHTML;