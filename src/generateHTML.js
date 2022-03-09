const teamCards = team => {

  const generateManager = manager => {
    return `
<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">
      ${manager.getRole()}
    </p>
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.getId()}</li>
    <li class="list-group-item">${manager.getEmail()}</li>
    <li class="list-group-item">${manager.getOfficeNumber()}</li>
  </ul>
 </div>
</div>
    `
  }

  const generateEngineer = engineer => {
    return `
<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">
      ${engineer.getRole()}
    </p>
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.getId()}</li>
    <li class="list-group-item">${engineer.getEmail()}</li>
    <li class="list-group-item">${engineer.getGithub()}</li>
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
      <div class="col-12 d-flex justify-content-center">
      ${teamCards(team)}
      </div>
      </section>
    </main>
  </body>
</html>
    `
}

module.exports = generateHTML;